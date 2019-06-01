const fsTree = require('./fs-tree.js');
const minimist = require('minimist');

const START_DIRECTORY_KEY = 'start-directory';
const DEFAULT_START_DIRECTORY = '.';

const argv = minimist(process.argv.slice(2));

const startDirectory = argv[START_DIRECTORY_KEY] || DEFAULT_START_DIRECTORY;

console.log(fsTree(startDirectory));
