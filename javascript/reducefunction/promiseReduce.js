"use strict";

const promiseReduce = (functions, reduceFunction, initialValue) =>
    functions.reduce((chain, currentFunction) =>
            chain.then(chainResults =>
                currentFunction.then(currentResult => reduceFunction(chainResults, currentResult))
            ),
        Promise.resolve(initialValue)
    );
