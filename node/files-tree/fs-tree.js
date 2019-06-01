const path = require('path');
const fs = require('fs');
const EventEmitter = require('events');
const minimist = require('minimist');

const START_DIRECTORY_KEY = 'start-directory';
const DEFAULT_START_DIRECTORY = '.';

const argv = minimist(process.argv.slice(2));

const startDirectory = argv[START_DIRECTORY_KEY] || DEFAULT_START_DIRECTORY;

const res = { dirs: [], files: [] };
const fileSystemTreeEmitter = new EventEmitter();

const FS_EVENT = 'onDirectoryFound';

fileSystemTreeEmitter.on(FS_EVENT, (dir, res, callback) => {
    const files = fs.readdirSync(dir);
    files.forEach((f) => {
        const fullPath = path.join(dir, f);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            res.dirs.push(fullPath);
            fileSystemTreeEmitter.emit(FS_EVENT, fullPath, res);
        } else {
            res.files.push(fullPath);
        }
    });
    callback && callback(res);
});

fileSystemTreeEmitter.emit(FS_EVENT, startDirectory, res, () => console.log(res));






