const path = require('path');
const fs = require('fs');
const EventEmitter = require('events');

const res = {dirs: [], files: []};
const fileSystemTreeEmitter = new EventEmitter();

const FS_EVENT = 'onDirectoryFound';

fileSystemTreeEmitter.on(FS_EVENT, (dir, res) => {
    const files = fs.readdirSync(dir);
    files.forEach((f) => {
        const fullPath = dir + '/' + f;
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            res.dirs.push(fullPath);
            fileSystemTreeEmitter.emit(FS_EVENT, fullPath, res);
        } else {
            res.files.push(fullPath);
        }
    });
});

function tree(dir) {
    fileSystemTreeEmitter.emit(FS_EVENT, dir, res);
    return res;
}

module.exports = tree;




