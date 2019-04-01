function sum(x) {
	var acc = 0;

	function inner_sum(x) {
		if (x) {
			acc += x;
			return inner_sum;
		} else {
			return acc;
		}
	}

	return inner_sum(x);
};

console.log(15 === sum(1)(2)(3)(4)(5)()); // test
console.log(5 === sum(10)(8)(6)(4)(2)(-1)(-3)(-5)(-7)(-9)()); // test
