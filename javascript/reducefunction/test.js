"use strict";

const fn1 = () => Promise.resolve(1);
const fn2 = Promise.resolve(2);
const fn3 = Promise.resolve(3);

promiseReduce(
    [fn1, fn2, fn3],
    (a, b) => a + b,
    3
)
    .then(console.log);