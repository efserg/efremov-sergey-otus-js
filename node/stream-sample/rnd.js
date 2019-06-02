const rnd = (min = 0, max = 1024) => Math.floor(Math.random() * (max - min)) + min;

module.exports = rnd;