import * as Fs from 'fs';
import { NodeVM, VMScript } from 'vm2';
import { isSemverSatisfied } from '@ulixee/commons/lib/VersionUtils';
import DataboxWrapper from '@ulixee/databox';
import IDataboxManifest from '@ulixee/databox-interfaces/IDataboxManifest';
import IDataboxCoreRuntime from '@ulixee/databox-interfaces/IDataboxCoreRuntime';
import DataboxCore from '@ulixee/databox-core';

const { version: installedRuntimeVersion } = require('./package.json');

export default class DataboxCoreRuntime implements IDataboxCoreRuntime {
  public databoxRuntimeVersion = '';
  public databoxRuntimeName = '@ulixee/databox';

  private compiledScriptsByPath = new Map<string, Promise<VMScript>>();

  private vm = new NodeVM({
    console: 'inherit',
    sandbox: {},
    wasm: false,
    eval: false,
    wrapper: 'commonjs',
    strict: true,
    require: {
      external: ['@ulixee/*'],
    },
  });

  public async start(): Promise<void> {
    process.env.ULX_DATABOX_DISABLE_AUTORUN = 'true';
    await new Promise(resolve => process.nextTick(resolve));
  }

  public close(): Promise<void> {
    this.compiledScriptsByPath.clear();
    return Promise.resolve();
  }

  public async run(path: string, manifest: IDataboxManifest, input: any): Promise<{ output: any }> {
    const script = await this.getVMScript(path, manifest);
    const databoxWrapper = this.vm.run(script);

    if (!(databoxWrapper instanceof DataboxWrapper)) {
      throw new Error(
        'The default export from this script needs to inherit from "@ulixee/databox"',
      );
    }

    const output = await databoxWrapper.run({
      input,
    });
    return { output };
  }

  public canSatisfyVersion(version: string): boolean {
    return isSemverSatisfied(version, installedRuntimeVersion);
  }

  private getVMScript(path: string, manifest: IDataboxManifest): Promise<VMScript> {
    if (this.compiledScriptsByPath.has(path)) {
      return this.compiledScriptsByPath.get(path);
    }

    const script = new Promise<VMScript>(async resolve => {
      const file = await Fs.promises.readFile(path, 'utf8');
      const vmScript = new VMScript(file, {
        filename: manifest.scriptEntrypoint,
      }).compile();
      resolve(vmScript);
    });

    this.compiledScriptsByPath.set(path, script);
    return script;
  }

  public static register(): void {
    DataboxCore.registerRuntime(new DataboxCoreRuntime());
  }
}
