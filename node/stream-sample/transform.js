const rnd = require('./rnd');
const {Transform} = require('stream');

class RndAdder extends Transform {
    _transform(chunk, encoding, callback) {
        const number = rnd();
        console.log(`Add ${number} to ${chunk}`);
        this.push((parseInt(chunk) + number).toString());
        callback();
    }
}

module.exports = RndAdder;
