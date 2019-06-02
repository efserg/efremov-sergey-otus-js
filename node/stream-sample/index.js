const Emitter = require('./readable');
const Transformer = require('./transform');
const Writer = require('./writable');

const emitter = new Emitter({objectMode: false, highWaterMark: 1});
const transformer = new Transformer;
const writer = new Writer;

emitter.pipe(transformer).pipe(writer);
