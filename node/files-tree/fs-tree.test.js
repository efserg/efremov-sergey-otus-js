const tree = require('./fs-tree');
const assert = require("assert");

const expected = {
    dirs: ['./test/bar', './test/baz'],
    files:
        ['./test/bar/bar1.txt',
            './test/bar/bar2.txt',
            './test/baz/baz.txt',
            './test/f1.txt',
            './test/f2.txt']
};

test('tree should return proper file system structure', () => {
    const fs = tree('./test');
    assert.deepEqual(fs, expected);
});
