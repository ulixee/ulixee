import * as HashUtils from '@ulixee/commons/lib/hashUtils';
import IDataboxManifest, {
  IVersionHistoryEntry,
} from '@ulixee/databox-interfaces/IDataboxManifest';
import { mkdirSync, promises as Fs, readFileSync, rmdirSync } from 'fs';
import { Helpers } from '@ulixee/databox-testing';
import * as Path from 'path';
import PackageRegistry from '../lib/PackageRegistry';
import DataboxNotFoundError from '../lib/DataboxNotFoundError';
import DataboxManifest from '../lib/DataboxManifest';

const storageDir = Path.resolve(process.env.ULX_DATA_DIR ?? '.', 'packageregistry.test');
const tmpDir = `${storageDir}/tmp`;

afterAll(() => {
  rmdirSync(storageDir, { recursive: true });
});

function hashScript(script: string): string {
  const sha = HashUtils.sha3(script);
  return HashUtils.encodeHash(sha, 'scr');
}

test('should throw an error if the databox runtime is not installed', async () => {
  const registry = new PackageRegistry(storageDir, tmpDir);
  const databoxTmpDir = `${storageDir}/tmp/dbx1`;
  mkdirSync(databoxTmpDir, { recursive: true });
  await Fs.writeFile(
    `${databoxTmpDir}/databox-manifest.json`,
    JSON.stringify(<IDataboxManifest>{
      versionHash: 'dbx123',
      scriptHash: 'scr123',
      runtimeName: '@ulixee/not-here',
      runtimeVersion: '2.0.0-alpha.1',
      scriptEntrypoint: 'here.js',
      linkedVersions: [],
    }),
  );
  await Fs.writeFile(`${databoxTmpDir}/databox.js`, 'function(){}');
  await expect(registry.save(databoxTmpDir, Buffer.from('dbx file'))).rejects.toThrow(
    'not installed',
  );
});

test('should be able to upload and retrieve the databox', async () => {
  const registry = new PackageRegistry(storageDir, tmpDir);
  const script = 'function(){}';
  const scriptHash = hashScript(script);
  const databoxTmpDir = `${storageDir}/tmp/dbx2`;
  mkdirSync(databoxTmpDir, { recursive: true });
  const versionTimestamp = Date.now();
  const versionHash = DataboxManifest.createVersionHash({
    scriptHash,
    versionTimestamp,
    scriptEntrypoint: 'here.js',
    linkedVersions: [],
  });
  await Fs.writeFile(
    `${databoxTmpDir}/databox-manifest.json`,
    JSON.stringify(<IDataboxManifest>{
      scriptHash,
      versionTimestamp,
      versionHash,
      runtimeName: '@ulixee/databox-for-hero',
      runtimeVersion: '2.0.0-alpha.1',
      scriptEntrypoint: 'here.js',
      linkedVersions: [],
    }),
  );
  await Fs.writeFile(`${databoxTmpDir}/databox.js`, script);
  await expect(registry.save(databoxTmpDir, Buffer.from(script))).resolves.toBeTruthy();

  const uploaded = registry.getByVersionHash(versionHash);
  expect(uploaded).toBeTruthy();
  expect(readFileSync(uploaded.path, 'utf8')).toBe(script);
});

test('should allow a user to override updating with no history', async () => {
  const databoxTmpDir = `${storageDir}/tmp/test`;
  Helpers.needsClosing.push({ close: () => rmdirSync(databoxTmpDir), onlyCloseOnFinal: false });
  const registry = new PackageRegistry(storageDir, tmpDir);

  let originalVersionHash: string = null;
  {
    await Fs.mkdir(databoxTmpDir, { recursive: true });
    const script = 'function 1(){}';
    const manifest = <IDataboxManifest>{
      runtimeName: '@ulixee/databox-for-hero',
      runtimeVersion: '2.0.0-alpha.1',
      scriptEntrypoint: 'override.js',
      scriptHash: hashScript(script),
      versionHash: null,
      linkedVersions: [],
    };

    manifest.versionHash = DataboxManifest.createVersionHash(manifest);
    originalVersionHash = manifest.versionHash;

    await Fs.writeFile(`${databoxTmpDir}/databox-manifest.json`, JSON.stringify(manifest));
    await Fs.writeFile(`${databoxTmpDir}/databox.js`, script);
    await expect(registry.save(databoxTmpDir, Buffer.from(script))).resolves.toBeTruthy();
  }
  {
    await Fs.mkdir(databoxTmpDir, { recursive: true });
    const script = 'function 2(){}';
    const manifest = <IDataboxManifest>{
      runtimeName: '@ulixee/databox-for-hero',
      runtimeVersion: '2.0.0-alpha.1',
      scriptEntrypoint: 'override.js',
      scriptHash: hashScript(script),
      versionHash: null,
      linkedVersions: [],
    };

    manifest.versionHash = DataboxManifest.createVersionHash(manifest);

    await Fs.writeFile(`${databoxTmpDir}/databox-manifest.json`, JSON.stringify(manifest));
    await Fs.writeFile(`${databoxTmpDir}/databox.js`, script);
    await expect(registry.save(databoxTmpDir, Buffer.from(script))).rejects.toThrow(
      'link to previous version history',
    );
    expect(registry.getLatestVersion(originalVersionHash)).toBe(originalVersionHash);
    // force new history
    await expect(registry.save(databoxTmpDir, Buffer.from(script), true)).resolves.toBeTruthy();
    expect(registry.getLatestVersion(originalVersionHash)).toBe(originalVersionHash);
    expect(registry.getLatestVersion(manifest.versionHash)).toBe(manifest.versionHash);
  }
});

test('should throw an error with version history if current versions are unmatched', async () => {
  const registry = new PackageRegistry(storageDir, tmpDir);
  const script1 = 'function 1(){}';
  const script1VersionHash = hashScript(script1);
  const script2 = 'function 2(){}';
  const script2VersionHash = hashScript(script2);

  const scriptDetails = {
    runtimeName: '@ulixee/databox-for-hero',
    runtimeVersion: '2.0.0-alpha.1',
    scriptEntrypoint: 'unmatched.js',
  };

  const script3 = 'function 3(){}';
  const script3VersionHash = hashScript(script3);
  const versions: IVersionHistoryEntry[] = [];
  {
    const databoxTmpDir = `${storageDir}/tmp/dbx3`;
    const scriptHash = script1VersionHash;
    mkdirSync(databoxTmpDir, { recursive: true });
    const manifest = <IDataboxManifest>{
      ...scriptDetails,
      scriptHash,
      versionHash: null,
      linkedVersions: [],
    };
    manifest.versionHash = DataboxManifest.createVersionHash(manifest);
    versions.push({ versionHash: manifest.versionHash, versionTimestamp: Date.now() });
    await Fs.writeFile(`${databoxTmpDir}/databox-manifest.json`, JSON.stringify(manifest));
    await Fs.writeFile(`${databoxTmpDir}/databox.js`, script1);
    await expect(registry.save(databoxTmpDir, Buffer.from(script1))).resolves.toBeTruthy();

    expect(registry.getByVersionHash(manifest.versionHash)).toBeTruthy();
  }
  {
    const databoxTmpDir = `${storageDir}/tmp/dbx4`;
    const scriptHash = script2VersionHash;

    mkdirSync(databoxTmpDir, { recursive: true });
    const manifest = <IDataboxManifest>{
      ...scriptDetails,
      scriptHash,
      versionHash: null,
      linkedVersions: [...versions],
    };
    manifest.versionHash = DataboxManifest.createVersionHash(manifest);
    versions.unshift({ versionHash: manifest.versionHash, versionTimestamp: Date.now() });

    await Fs.writeFile(`${databoxTmpDir}/databox-manifest.json`, JSON.stringify(manifest));
    await Fs.writeFile(`${databoxTmpDir}/databox.js`, script2);
    await expect(registry.save(databoxTmpDir, Buffer.from(script2))).resolves.toBeTruthy();

    expect(registry.getByVersionHash(manifest.versionHash)).toBeTruthy();
    expect(registry.getLatestVersion(versions[1].versionHash)).toBe(manifest.versionHash);
    expect(registry.getLatestVersion(manifest.versionHash)).toBe(manifest.versionHash);
  }

  {
    const databoxTmpDir = `${storageDir}/tmp/dbx5`;
    const scriptHash = script3VersionHash;

    mkdirSync(databoxTmpDir, { recursive: true });
    const manifest = <IDataboxManifest>{
      ...scriptDetails,
      scriptHash,
      versionHash: null,
      linkedVersions: [versions[1]],
    };
    manifest.versionHash = DataboxManifest.createVersionHash(manifest);
    await Fs.writeFile(`${databoxTmpDir}/databox-manifest.json`, JSON.stringify(manifest));
    await Fs.writeFile(`${databoxTmpDir}/databox.js`, script3);
    await expect(registry.save(databoxTmpDir, Buffer.from(script3))).rejects.toThrow(
      'different version history',
    );
  }
});

test('should provide a newer version hash if old script not available', async () => {
  const registry = new PackageRegistry(storageDir, tmpDir);
  // @ts-ignore
  registry.databoxesDb.databoxVersions.save('maybe-there', Date.now(), 'not-there', null);
  try {
    registry.getByVersionHash('not-there');
  } catch (e) {
    expect(e).toBeInstanceOf(DataboxNotFoundError);
    expect(e.latestVersionHash).toBe('maybe-there');
  }
});
