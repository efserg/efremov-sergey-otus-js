const {Writable} = require('stream');

class ConsoleWriter extends Writable {
    _write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    }
}

module.exports = ConsoleWriter;
