import { Session as HeroSession, Tab } from '@ulixee/hero-core';
import { TypedEventEmitter } from '@ulixee/commons/lib/eventUtils';
import * as Fs from 'fs';
import IScriptInstanceMeta from '@ulixee/hero-interfaces/IScriptInstanceMeta';
import { bindFunctions } from '@ulixee/commons/lib/utils';
import IHeroSessionActiveEvent from '@ulixee/apps-chromealive-interfaces/events/IHeroSessionActiveEvent';
import type { IOutputChangeRecord } from '@ulixee/hero-core/models/OutputTable';
import IDataboxOutputEvent from '@ulixee/apps-chromealive-interfaces/events/IDataboxOutputEvent';
import IDataboxCollectedAssets from '@ulixee/apps-chromealive-interfaces/IDataboxCollectedAssets';
import IDataboxCollectedAssetEvent from '@ulixee/apps-chromealive-interfaces/events/IDataboxCollectedAssetEvent';
import IAppModeEvent from '@ulixee/apps-chromealive-interfaces/events/IAppModeEvent';
import { spawn } from 'child_process';
import Log from '@ulixee/commons/lib/Logger';
import TimetravelPlayer from '@ulixee/hero-timetravel/player/TimetravelPlayer';
import TimelineWatch from '@ulixee/hero-timetravel/lib/TimelineWatch';
import EventSubscriber from '@ulixee/commons/lib/EventSubscriber';
import ISessionApi from '@ulixee/apps-chromealive-interfaces/apis/ISessionApi';
import { IPage } from '@unblocked-web/specifications/agent/browser/IPage';
import SourceLoader from '@ulixee/commons/lib/SourceLoader';
import ISourceCodeLocation from '@ulixee/commons/interfaces/ISourceCodeLocation';
import ISourceCodeReference from '@ulixee/hero-interfaces/ISourceCodeReference';
import MirrorPage from '@ulixee/hero-timetravel/lib/MirrorPage';
import CommandTimeline from '@ulixee/hero-timetravel/lib/CommandTimeline';
import { LoadStatus } from '@unblocked-web/specifications/agent/browser/Location';
import ITimelineMetadata from '@ulixee/hero-interfaces/ITimelineMetadata';
import { CanceledPromiseError } from '@ulixee/commons/interfaces/IPendingWaitEvent';
import ISessionSearchResult, {
  ISearchContext,
} from '@ulixee/apps-chromealive-interfaces/ISessionSearchResult';
import { ISelectorMap } from '@ulixee/apps-chromealive-interfaces/ISelectorMap';
import { IBoundLog } from '@ulixee/commons/interfaces/ILog';
import { SourceMapSupport } from '@ulixee/commons/lib/SourceMapSupport';
import ResourceSearch from './ResourceSearch';
import HeroCorePlugin from './HeroCorePlugin';
import ElementsModule from './hero-plugin-modules/ElementsModule';
import DevtoolsBackdoorModule from './hero-plugin-modules/DevtoolsBackdoorModule';
import VueScreen from './VueScreen';
import SourceCodeTimeline from './SourceCodeTimeline';
import OutputRebuilder, { IOutputSnapshot } from './OutputRebuilder';
import AliveBarPositioner from './AliveBarPositioner';
import ChromeAliveCore from '../index';
import TabGroupModule from './hero-plugin-modules/TabGroupModule';
import SelectorRecommendations from './SelectorRecommendations';

const { log } = Log(module);

export default class SessionObserver extends TypedEventEmitter<{
  'hero:updated': void;
  'databox:output': void;
  'databox:asset': IDataboxCollectedAssetEvent;
  'app:mode': void;
  closed: void;
}> {
  public mode: IAppModeEvent['mode'] = 'Live';
  public playbackState: IHeroSessionActiveEvent['playbackState'] = 'running';

  public readonly timetravelPlayer: TimetravelPlayer;
  public readonly timelineWatch: TimelineWatch;
  public readonly scriptInstanceMeta: IScriptInstanceMeta;
  public readonly sourceCodeTimeline: SourceCodeTimeline;

  public readonly liveMirrorPagesByTabId: { [tabId: number]: MirrorPage } = {};

  public readonly worldHeroSessionIds = new Set<string>();

  public get heroCorePlugin(): HeroCorePlugin {
    return HeroCorePlugin.bySessionId.get(this.heroSession.id);
  }

  public get tabGroupModule(): TabGroupModule {
    return this.heroCorePlugin.tabGroupModule;
  }

  public get devtoolsBackdoorModule(): DevtoolsBackdoorModule {
    return this.heroCorePlugin.devtoolsBackdoorModule;
  }

  public get elementsModule(): ElementsModule {
    return this.heroCorePlugin.elementsModule;
  }

  public mirrorPagePauseRefreshing = false;

  private selectorRecommendations: SelectorRecommendations;
  private vueScreensByName: { [name: string]: VueScreen } = {};

  private scriptEntrypointTs: string;
  private scriptLastModifiedTime: number;
  private outputRebuilder = new OutputRebuilder();
  private hasScriptUpdatesSinceLastRun = false;
  private watchHandle: Fs.FSWatcher;
  private events = new EventSubscriber();
  private readonly lastDomChangesByTabId: Record<number, number> = {};
  private mirrorRefreshLastUpdated: number;
  private mirrorRefreshTimeout: NodeJS.Timeout;
  private lastTimelineMetadata: ITimelineMetadata;
  private resourceSearch: ResourceSearch;
  private isSearchingTimetravel = false;
  private readonly logger: IBoundLog;

  constructor(public readonly heroSession: HeroSession) {
    super();
    bindFunctions(this);
    this.logger = log.createChild(module, { sessionId: heroSession.id });
    this.scriptInstanceMeta = heroSession.options.scriptInstanceMeta;
    this.worldHeroSessionIds.add(heroSession.id);
    this.resourceSearch = new ResourceSearch(heroSession, this.events);

    this.events.on(this.heroSession, 'kept-alive', this.onHeroSessionKeptAlive);
    this.events.on(this.heroSession, 'resumed', this.onHeroSessionResumed);
    this.events.on(this.heroSession, 'closing', this.close);
    this.events.on(this.heroSession, 'output', this.onOutputUpdated);
    this.events.on(this.heroSession, 'collected-asset', this.onCollectedAsset);
    this.events.on(this.heroSession, 'tab-created', this.onTabCreated);
    this.events.on(this.heroSession.commands, 'pause', this.onCommandsPaused);
    this.events.on(this.heroSession.commands, 'resume', this.onCommandsResumed);

    this.timelineWatch = new TimelineWatch(heroSession, {
      extendAfterCommands: 1e3,
      extendAfterLoadStatus: {
        status: LoadStatus.PaintingStable,
        msAfterStatus: 2e3,
      },
    });
    this.events.on(this.timelineWatch, 'updated', () => this.emit('hero:updated'));

    this.timetravelPlayer = TimetravelPlayer.create(heroSession.id, heroSession);

    this.scriptLastModifiedTime = Fs.statSync(this.scriptInstanceMeta.entrypoint).mtimeMs;
    this.selectorRecommendations = new SelectorRecommendations(this.scriptInstanceMeta);

    this.sourceCodeTimeline = new SourceCodeTimeline(heroSession);

    const entrypoint = this.sourceCodeTimeline.entrypoint;
    if (entrypoint !== this.scriptInstanceMeta.entrypoint) {
      this.scriptEntrypointTs = entrypoint;
    } else if (this.scriptInstanceMeta.entrypoint.endsWith('.ts')) {
      this.scriptEntrypointTs = this.scriptInstanceMeta.entrypoint;
    }

    this.watchHandle = Fs.watch(
      this.scriptInstanceMeta.entrypoint,
      {
        persistent: false,
      },
      this.onScriptEntrypointUpdated,
    );
  }

  public onMultiverseSession(session: HeroSession): void {
    this.worldHeroSessionIds.add(session.id);
    this.emit('hero:updated');
  }

  public bindExtractor(extractorSession: HeroSession): void {
    const evt = this.events.on(extractorSession, 'output', this.onOutputUpdated);
    this.events.once(extractorSession, 'closed', () => this.events.off(evt));
  }

  public pauseSession(): void {
    this.heroSession.pauseCommands().catch(() => null);
  }

  public resumeSession(): void {
    this.heroSession.resumeCommands().catch(() => null);
  }

  public async relaunchSession(
    startLocation: 'sessionStart' | 'extraction',
  ): Promise<Error | undefined> {
    if (startLocation === 'sessionStart') {
      ChromeAliveCore.restartingHeroSessionId = this.heroSession.id;
      AliveBarPositioner.restartingSession(this.heroSession.id);
      // will automatically send out a restarting playback state

      await this.close();
      await this.heroSession.closeTabs();
      SourceMapSupport.resetCache();
    }
    const script = this.scriptInstanceMeta.entrypoint;
    const execPath = this.scriptInstanceMeta.execPath;
    const execArgv = this.scriptInstanceMeta.execArgv ?? [];
    const args = [
      `--sessionResume.startLocation="${startLocation}"`,
      `--sessionResume.sessionId="${this.heroSession.id}"`,
      '--show-chrome-alive',
    ];
    if (startLocation === 'extraction') {
      args.length = 0;
      this.resetExtraction();
      args.push(`--extractSessionId="${this.heroSession.id}"`, '--mode="browserless"');
    }

    try {
      this.logger.info('Relaunch Session', { execPath, args: [...execArgv, script, ...args] });
      const child = spawn(execPath, [...execArgv, script, ...args], {
        cwd: this.scriptInstanceMeta.workingDirectory,
        stdio: ['ignore', 'pipe', 'pipe', 'ipc'],
        env: { ...process.env, ULX_CLI_NOPROMPT: 'true', ULX_DATABOX_DISABLE_AUTORUN: 'false' },
      });
      child.stderr.setEncoding('utf8');
      child.stdout.setEncoding('utf8');
      child.stderr.on('data', msg => {
        this.heroSession.awaitedEventEmitter.emit('rerun-stderr', msg);
      });
      child.stdout.on('data', msg => {
        this.heroSession.awaitedEventEmitter.emit('rerun-stdout', msg);
      });
    } catch (error) {
      this.logger.error('ERROR resuming session', { error });
      return error;
    }
  }

  public async toggleInspectElementMode(): Promise<void> {
    await this.devtoolsBackdoorModule.toggleInspectElementMode();
  }

  public async highlightNode(id: { backendNodeId?: number; objectId?: string }): Promise<void> {
    await this.elementsModule.highlightNode(id);
  }

  public async hideHighlight(): Promise<void> {
    await this.elementsModule.hideHighlight();
  }

  public async search(query: string): Promise<ISessionSearchResult> {
    const searchingContext = this.getCurrentSearchContext();

    return {
      searchingContext,
      elements: await this.devtoolsBackdoorModule.searchDom(query),
      resources: this.resourceSearch.search(query, searchingContext),
    };
  }

  public getCurrentSearchContext(): ISearchContext {
    if (!this.lastTimelineMetadata) this.getHeroSessionEvent();
    const metadata = this.lastTimelineMetadata;
    const lastUrl = metadata.urls[metadata.urls.length - 1];
    const lastNavigation = this.heroSession
      .getLastActiveTab()
      .navigations.get(lastUrl.navigationId);
    const commandTimeline = CommandTimeline.fromSession(this.heroSession);
    let tabId = lastUrl.tabId;
    let startTime =
      lastNavigation.statusChanges.get('HttpRequested') ??
      lastNavigation.statusChanges.get('HttpResponded');
    let endTime = commandTimeline.endTime;
    let documentUrl = lastNavigation.finalUrl ?? lastNavigation.requestedUrl;
    if (this.isSearchingTimetravel) {
      const tab = this.timetravelPlayer.activeTab;
      tabId = tab.id;
      documentUrl = tab.currentTick.documentUrl;
      if (!tab.focusedOffsetRange) {
        const documentLoadTime = tab.getPaintEventAtIndex(
          tab.currentTick.documentLoadPaintIndex,
        )?.timestamp;
        if (documentLoadTime) startTime = documentLoadTime;
        endTime = tab.currentTick.timestamp;
      } else {
        const focusedTicks = tab.focusedPaintIndexes;
        startTime = tab.getPaintEventAtIndex(focusedTicks[0])?.timestamp;
        endTime = tab.getPaintEventAtIndex(focusedTicks[1])?.timestamp;
      }
    }
    return { baseTime: commandTimeline.startTime, startTime, tabId, endTime, documentUrl };
  }

  public async generateQuerySelector(id: {
    backendNodeId?: number;
    objectId?: string;
  }): Promise<ISelectorMap> {
    const selectorMap = await this.elementsModule.generateQuerySelector(id);
    const activePageUrl = this.heroCorePlugin.activePage.mainFrame.url;

    void this.selectorRecommendations
      .save(selectorMap, activePageUrl)
      .catch(err => console.error('ERROR saving selector map', err));

    selectorMap.topMatches = selectorMap.topMatches.slice(0, 50);
    return selectorMap;
  }

  public async openMode(mode: Parameters<ISessionApi['openMode']>[0]['mode']): Promise<void> {
    this.mirrorPagePauseRefreshing = mode === 'Finder';
    this.isSearchingTimetravel = false;
    let isFocusingOnFrozenLiveTab = false;
    const focusPages: IPage[] = [];
    if (mode === 'Finder') {
      // if coming from timetravel, we'll use the timetravel player
      if (this.timetravelPlayer.isOpen && this.mode === 'Timetravel') {
        this.isSearchingTimetravel = true;
        focusPages.push(this.timetravelPlayer.activeTab.mirrorPage.page);
      } else {
        const activeTabId = this.heroSession.getLastActiveTab().id;
        const mirrorPage = this.liveMirrorPagesByTabId[activeTabId];
        isFocusingOnFrozenLiveTab = true;
        focusPages.push(mirrorPage.page);
      }
    } else if (mode === 'Live') {
      focusPages.push(...this.getSessionPages());
    } else if (mode === 'Timetravel') {
      if (!this.timetravelPlayer.isOpen) await this.timetravelPlayer.goto(100);
      focusPages.push(this.timetravelPlayer.activeTab.mirrorPage.page);
    } else {
      const tabExists = !!this.vueScreensByName[mode];
      this.vueScreensByName[mode] ??= new VueScreen(mode, this.heroSession);
      const vueScreen = this.vueScreensByName[mode];
      if (!tabExists) {
        this.events.once(vueScreen, 'close', () => delete this.vueScreensByName[mode]);
      }
      const page = await vueScreen.open();
      focusPages.push(page);
    }

    await this.tabGroupModule.showTabs(...focusPages);
    this.mode = mode;
    this.emit('app:mode');
    if (this.mode === 'Finder') {
      await this.heroCorePlugin.devtoolsBackdoorModule.showElementsPanel(focusPages[0]);
    }

    if (isFocusingOnFrozenLiveTab === true) {
      await this.heroCorePlugin.devtoolsBackdoorModule.focusPendingFinderNode();
    }
  }

  public close(): void {
    if (this.watchHandle) {
      this.watchHandle.close();
      this.watchHandle = null;
    }
    this.sourceCodeTimeline.close();
    this.events.close();

    for (const screen of Object.values(this.vueScreensByName)) {
      screen.close().catch(console.error);
    }

    for (const mirrorPage of Object.values(this.liveMirrorPagesByTabId)) {
      mirrorPage.close().catch(console.error);
    }
    clearTimeout(this.mirrorRefreshTimeout);

    this.timelineWatch.close();
    this.timetravelPlayer?.close()?.catch(console.error);
    this.emit('closed');
  }

  public getScriptDetails(): Pick<
    IHeroSessionActiveEvent,
    'scriptEntrypoint' | 'scriptEntrypointTs' | 'scriptLastModifiedTime'
  > {
    return {
      scriptEntrypoint: this.scriptInstanceMeta.entrypoint,
      scriptEntrypointTs: this.scriptEntrypointTs,
      scriptLastModifiedTime: this.scriptLastModifiedTime,
    };
  }

  public getHeroSessionEvent(): IHeroSessionActiveEvent {
    const commandTimeline = CommandTimeline.fromSession(this.heroSession);

    const db = this.heroSession.db;

    const mainFrameIds = db.frames.mainFrameIds();

    const urls: ITimelineMetadata['urls'] = [];

    const loadStatusLookups = [
      [LoadStatus.HttpRequested, 'Http Requested'],
      [LoadStatus.JavascriptReady, 'Document Open'],
    ];

    const urlChangeTimestamps: number[] = [];
    for (const nav of commandTimeline.loadedNavigations) {
      if (!mainFrameIds.has(nav.frameId)) continue;

      const urlOffset =
        urls.length === 0 ? 0 : commandTimeline.getTimelineOffsetForTimestamp(nav.initiatedTime);
      if (urlOffset === -1) continue;

      const entry: ITimelineMetadata['urls'][0] = {
        tabId: nav.tabId,
        url: nav.finalUrl ?? nav.requestedUrl,
        offsetPercent: urlOffset,
        navigationId: nav.id,
        loadStatusOffsets: [],
      };
      urls.push(entry);

      for (const [loadStatus, name] of loadStatusLookups) {
        const timestamp = nav.statusChanges.get(loadStatus as LoadStatus);
        const offsetPercent = commandTimeline.getTimelineOffsetForTimestamp(timestamp);
        if (loadStatus === LoadStatus.HttpResponded) {
          urlChangeTimestamps.push(nav.initiatedTime);
        }
        if (offsetPercent !== -1) {
          entry.loadStatusOffsets.push({
            timestamp,
            loadStatus: loadStatus as LoadStatus,
            status: name,
            offsetPercent,
          });
        }
      }
    }

    const paintEvents: ITimelineMetadata['paintEvents'] = [];
    let domChangeForUrl = 0;
    for (const [timestamp, domChanges] of db.domChanges.countByTimestamp) {
      // if we got back the response, reset our counter
      if (urlChangeTimestamps.length && timestamp > urlChangeTimestamps[0]) {
        urlChangeTimestamps.shift();
        domChangeForUrl = 0;
      }
      domChangeForUrl += domChanges;
      const offsetPercent = commandTimeline.getTimelineOffsetForTimestamp(timestamp);
      if (offsetPercent === -1) continue;
      paintEvents.push({
        domChanges: domChangeForUrl,
        offsetPercent,
      });
    }
    this.lastTimelineMetadata = {
      urls,
      paintEvents,
      screenshots: [],
      storageEvents: [],
    };

    return {
      heroSessionId: this.heroSession.id,
      startTime: commandTimeline.startTime,
      endTime: commandTimeline.endTime,
      runtimeMs: commandTimeline.runtimeMs,
      inputBytes: this.heroSession.meta.input
        ? Buffer.byteLength(JSON.stringify(this.heroSession.meta.input))
        : 0,
      playbackState: this.playbackState,
      ...this.getScriptDetails(),
      timeline: this.lastTimelineMetadata,
    };
  }

  public async getCollectedAssets(fromSessionId?: string): Promise<IDataboxCollectedAssets> {
    const sessionId = fromSessionId ?? this.heroSession.id;
    const assetNames = await this.heroSession.getCollectedAssetNames(sessionId);
    const result: IDataboxCollectedAssets = {
      collectedElements: [],
      collectedResources: [],
      collectedSnippets: [],
    };
    for (const name of assetNames.elements) {
      const elements = await this.heroSession.getCollectedElements(sessionId, name);
      for (const element of elements as IDataboxCollectedAssets['collectedElements']) {
        this.addSourceCodeLocation(element);
        result.collectedElements.push(element);
      }
    }
    for (const name of assetNames.resources) {
      const resources = await this.heroSession.getCollectedResources(sessionId, name);
      for (const resource of resources as IDataboxCollectedAssets['collectedResources']) {
        this.addSourceCodeLocation(resource);
        result.collectedResources.push(resource);
      }
    }
    for (const name of assetNames.snippets) {
      const snippets = await this.heroSession.getCollectedSnippets(sessionId, name);
      for (const snippet of snippets as IDataboxCollectedAssets['collectedSnippets']) {
        this.addSourceCodeLocation(snippet);
        result.collectedSnippets.push(snippet);
      }
    }
    return result;
  }

  public getDataboxEvent(): IDataboxOutputEvent {
    const output: IOutputSnapshot = this.outputRebuilder.getLatestSnapshot() ?? {
      bytes: 0,
      output: null,
      changes: [],
    };
    return {
      ...output,
    };
  }

  public async timetravel(
    option: Parameters<ISessionApi['timetravel']>[0],
  ): Promise<{ timelineOffsetPercent: number }> {
    await this.timetravelPlayer.setFocusedOffsetRange(option.timelinePercentRange);

    if (option.step) {
      await this.timetravelPlayer.step(option.step);
    } else {
      let percentOffset = option.percentOffset;
      if (option.commandId) {
        percentOffset = await this.timetravelPlayer.findCommandPercentOffset(option.commandId);
      }
      await this.timetravelPlayer.goto(percentOffset ?? 100);
    }

    await this.openMode('Timetravel');
    await this.timetravelPlayer.showLoadStatus(this.lastTimelineMetadata);
    const timelineOffsetPercent = this.timetravelPlayer.activeTab.currentTimelineOffsetPct;
    return { timelineOffsetPercent };
  }

  public getSourceCodeAtCommandId(commandId: number): (ISourceCodeLocation & { code: string })[] {
    const command = this.heroSession.commands.history.find(x => x.id === commandId);
    if (!command) return [];
    return command.callsite.map(x => SourceLoader.getSource(x));
  }

  public addSourceCodeLocation(record: { commandId: number } & ISourceCodeReference): void {
    record.sourcecode = this.getSourceCodeAtCommandId(record.commandId);
  }

  public onCollectedAsset(event: HeroSession['EventTypes']['collected-asset']): void {
    const sendEvent: IDataboxCollectedAssetEvent = {};

    if (event.type === 'resource') {
      sendEvent.collectedResource = event.asset as any;
      this.addSourceCodeLocation(sendEvent.collectedResource);
    }
    if (event.type === 'element') {
      sendEvent.collectedElement = event.asset as any;
      this.addSourceCodeLocation(sendEvent.collectedElement);
    }
    if (event.type === 'snippet') {
      sendEvent.collectedSnippet = event.asset as any;
      this.addSourceCodeLocation(sendEvent.collectedSnippet);
    }
    this.emit('databox:asset', sendEvent);
  }

  public onTabCreated(event: HeroSession['EventTypes']['tab-created']): void {
    const pageEvents = this.events.on(
      event.tab,
      'page-events',
      this.sendDomRecordingUpdates.bind(this, event.tab),
    );
    const mirrorPage = event.tab.createMirrorPage();
    const shouldAttach = Object.keys(this.liveMirrorPagesByTabId).length === 0;
    const tabId = event.tab.id;
    this.liveMirrorPagesByTabId[tabId] = mirrorPage;
    this.events.once(event.tab, 'close', () => {
      this.events.off(pageEvents);
      delete this.liveMirrorPagesByTabId[tabId];
    });
    if (shouldAttach) {
      this.openMode('Live').catch(error =>
        this.logger.error('ERROR loading mode', { error, tabId }),
      );
      mirrorPage
        .attachToPage(this.heroCorePlugin.mirrorPage, this.heroSession.id)
        .catch(error => this.logger.error('ERROR setting up mirrorPage', { error, tabId }));
    }
  }

  public sendDomRecordingUpdates(tab: Tab, events: Tab['EventTypes']['page-events']): void {
    if (!events.records.domChanges?.length) return;
    const timestamp = this.lastDomChangesByTabId[tab.id];
    const domRecording = tab.mirrorPage.getDomRecordingSince(timestamp);

    this.lastDomChangesByTabId[tab.id] =
      domRecording.paintEvents[domRecording.paintEvents.length - 1].timestamp;

    this.refreshLiveMirrorPage(tab.id).catch(console.error);

    ChromeAliveCore.sendAppEvent('Dom.updated', {
      paintEvents: domRecording.paintEvents.map(x => x.changeEvents),
      framesById: tab.session.db.frames.framesById,
    });
  }

  public async refreshLiveMirrorPage(tabId: number, force = false): Promise<void> {
    const now = Date.now();
    if (!force && this.mirrorPagePauseRefreshing) {
      clearTimeout(this.mirrorRefreshTimeout);
      this.mirrorRefreshTimeout = setTimeout(
        this.refreshLiveMirrorPage.bind(this, tabId),
        1e3,
      ).unref();
      return;
    }

    if (!force && this.mirrorRefreshLastUpdated && now - this.mirrorRefreshLastUpdated < 100) {
      if (!this.mirrorRefreshTimeout) {
        this.mirrorRefreshTimeout = setTimeout(
          this.refreshLiveMirrorPage.bind(this, tabId),
          now - this.mirrorRefreshLastUpdated,
        ).unref();
        return;
      }
    }
    clearTimeout(this.mirrorRefreshTimeout);
    this.mirrorRefreshTimeout = null;
    this.mirrorRefreshLastUpdated = now;

    try {
      await this.liveMirrorPagesByTabId[tabId].load();
    } catch (error) {
      if (!(error instanceof CanceledPromiseError))
        this.logger.error('ERROR loading mirror page to latest', { error });
    }
  }

  public getDomRecording(tabId: number): ReturnType<ISessionApi['getDom']> {
    const tab = this.heroSession.tabsById.get(tabId) ?? this.heroSession.getLastActiveTab();
    const domRecording = {
      ...tab.mirrorPage.domRecording,
      framesById: this.heroSession.db.frames.framesById,
    };
    const last = domRecording.paintEvents[domRecording.paintEvents.length - 1];
    if (last) this.lastDomChangesByTabId[tab.id] = last.timestamp;
    return Promise.resolve(domRecording);
  }

  private getSessionPages(): IPage[] {
    const sessionPages: IPage[] = [];
    for (const tab of this.heroSession.tabsById.values()) {
      if (tab.page.groupName === 'session') {
        sessionPages.push(tab.page);
      }
    }
    return sessionPages;
  }

  private async onScriptEntrypointUpdated(action: string): Promise<void> {
    if (action !== 'change') return;
    const stats = await Fs.promises.stat(this.scriptInstanceMeta.entrypoint);
    this.scriptLastModifiedTime = stats.mtimeMs;
    this.hasScriptUpdatesSinceLastRun = true;
    this.emit('hero:updated');
  }

  private onHeroSessionResumed(): void {
    this.playbackState = 'running';
    this.outputRebuilder = new OutputRebuilder();
    this.sourceCodeTimeline.clearCache();
    this.hasScriptUpdatesSinceLastRun = false;
    this.emit('hero:updated');
    this.emit('databox:output');
  }

  private onCommandsPaused(): void {
    this.playbackState = 'paused';
    this.emit('hero:updated');
  }

  private onCommandsResumed(): void {
    this.playbackState = 'running';
    this.emit('hero:updated');
  }

  private onHeroSessionKeptAlive(event: { message: string }): void {
    this.playbackState = 'finished';
    this.emit('hero:updated');
    event.message = `ChromeAlive! has assumed control of your script. You can make changes to your script and re-run from the ChromeAlive interface.`;
  }

  private resetExtraction(): void {
    this.outputRebuilder = new OutputRebuilder();
    this.emit('databox:output');
  }

  private onOutputUpdated(event: { changes: IOutputChangeRecord[] }): void {
    this.outputRebuilder.applyChanges(event.changes);
    this.emit('databox:output');
  }
}
