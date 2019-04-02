const sum = (x) => {

    let acc = 0;

    const innerSum = (x) => {
        if (x && x !== 0) {
            acc += x;
            return innerSum;
        }
        return acc;
    };

    return innerSum(x);
};

console.log(15 === sum(1)(2)(3)(4)(5)()); // test
console.log(5 === sum(10)(8)(6)(4)(2)(0)(-1)(-3)(-5)(-7)(-9)()); // test
