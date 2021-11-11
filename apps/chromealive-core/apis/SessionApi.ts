import {
  IHeroSessionArgs,
  ISessionApiStatics,
  ISessionResumeArgs,
} from '@ulixee/apps-chromealive-interfaces/apis/ISessionApi';
import TimelineBuilder from '@ulixee/hero-timetravel/player/TimelineBuilder';
import SessionObserver from '../lib/SessionObserver';
import ChromeAliveCore from '../index';

@ISessionApiStatics
export default class SessionApi {
  static getScreenshot(args: IHeroSessionArgs & { tabId: number; timestamp: number }): {
    imageBase64: string;
  } {
    const timelineBuilder = TimelineBuilder.bySessionId.get(args.heroSessionId);
    return { imageBase64: timelineBuilder.getScreenshot(args.tabId, args.timestamp) };
  }

  static async quit(args: IHeroSessionArgs): Promise<void> {
    const sessionObserver = getObserver(args);
    await sessionObserver.heroSession.close(true);
  }

  static async timetravel(
    args: IHeroSessionArgs & {
      percentOffset?: number;
      step?: 'forward' | 'back';
    },
  ): Promise<{
    timelineOffsetPercent: number;
  }> {
    const sessionObserver = getObserver(args);
    let timelineOffsetPercent = args.percentOffset ?? 100;
    sessionObserver.playbackState = 'timetravel';
    if (args.step) {
      timelineOffsetPercent = await sessionObserver.timetravelPlayer.step(args.step);
    } else {
      await sessionObserver.timetravelPlayer.goto(timelineOffsetPercent);
    }
    await sessionObserver.timetravelPlayer.showLoadStatus(
      sessionObserver.timelineBuilder.lastMetadata,
    );
    return { timelineOffsetPercent };
  }

  static step(args: IHeroSessionArgs): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const observer = getObserver(args);

    // observer.heroSession.commands.pause();
  }

  static resume(args: ISessionResumeArgs): {
    success: boolean;
    error?: Error;
  } {
    const observer = getObserver(args);

    const error = observer.relaunchSession(args.startLocation, args.startFromNavigationId);

    return {
      success: !error,
      error,
    };
  }
}

function getObserver(args: IHeroSessionArgs): SessionObserver {
  const sessionId = args.heroSessionId ?? ChromeAliveCore.activeHeroSessionId;
  if (!sessionId || !ChromeAliveCore.sessionObserversById.has(sessionId))
    throw new Error(`No active session found - sessionId: "${sessionId}"`);

  return ChromeAliveCore.sessionObserversById.get(sessionId);
}