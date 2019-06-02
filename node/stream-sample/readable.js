const rnd = require('./rnd');
const {Readable} = require('stream');

class RndEmitter extends Readable {
    constructor(options) {
        super(options)
    };

    _read() {
        const number = rnd();
        console.log(`Emit ${number}`);
        this.push(number.toString());
    };
}

module.exports = RndEmitter;
