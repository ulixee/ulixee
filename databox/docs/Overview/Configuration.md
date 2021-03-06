# Configuration

Databoxes are dynamically configurable via a command line, and each Databox allows you to define [default configurations](#defaults) if none are provided.

Command line variables are parsed using [yargs-parser](https://github.com/yargs/yargs-parser). Variables containing a '.' will be converted into objects, and dashes are camel-cased.

```shell
  node ./script.js --input.foo=99 --input.bar=9987930 --connection-to-core.host=ws://localhost:1228
```

Options will be read as:

```js
const options = {
  input: {
    foo: 99,
    bar: 9987930,
  },
  connectionToCore: {
    host: 'ws://localhost:1228',
  },
};
```

### Ulixee Config

If no connectionToCore is provided to a Databox:

1. a local Server connection will attempt to be automatically discovered.
2. if none is found, it will look for a Ulixee Configuration file.

This process starts in the directory of your script and looks upwards to the root for a folder called '.ulixee'. The configuration file inside this folder is expected to be called 'config.json';

```shell
 - root
   - user
     - project
       - .ulixee <-- Closest folder.
       - script
         - runningScript.js
```

Current supported configurations are:

- serverHost `string`. A "host:port" combination to access your default [Server](/docs/server)

### Input

You can pass dynamic Input to Hero via the command line. Variables are parsed and passed into the Databox.

### Defer Running Databox

A Databox can be configured to defer running until the `run()` function is explicitly called. This can be good for unit testing, or used in tools which wish to run a Databox multiple times.

#### Environment Variable

- ULX_DATABOX_DISABLE_AUTORUN `string`. Set this to `true` to explicitly disable autorunning Databoxes when a script is directly executed from the command line.

### Databox Core Storage {#storage}

Databox Core stores and retrieves [packaged Databoxes](/docs/databox/overview/deployment) from a configurable location on a machine. This directory will contain:

1. `dbx*`. Packaged databoxes organized into folders by their Bech32m encoded hashes.
2. `index.db`. A sqlite3 file containing an index of all Databoxes installed locally. This index will be automatically updated if new files are added to the folder and requested in a query.

During bootup, any Packaged Databox files (`.dbx`) in this directory will be automatically unpacked and loaded.

#### Environment Variable

- ULX_DATABOX_DIR `string`. Absolute path to a directory containing Databoxes. Defaults to `<CACHE>/ulixee/databoxes`.

#### Cache Directory {#cache}

CACHE is determined as:

- Mac: ~/Library/Cache
- Linux: ~/.cache (environment variable XDG_CACHE_HOME)
- Windows: ~/AppData/Local (environment variable LOCALAPPDATA)
