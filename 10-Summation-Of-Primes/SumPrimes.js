console.time('SumPrimes');

var arr = sieveOfErathostene(2000000);
var arr2 = arr.map(function(currentValue, index) {
	return currentValue == true ? index : 0;
});
var result = arr2.reduce(function(prev, cur) {
	return prev + cur;
});

var arr3 = arr2.filter(function(currentValue, indes) {
	return currentValue > 0;
});

console.log(result - 1); // exclude first element from results as '1' is not
							// prime number

console.timeEnd('SumPrimes');

function sieveOfErathostene(n) {
	var naturalNumbers = [];

	for (var i = 0; i < n; i++) {
		naturalNumbers.push(true);
	}

	var startNum = 2;
	var sqn = Math.sqrt(n);

	for (var j = startNum; j < sqn; j++) {

		if (naturalNumbers[j]) {

			for (var i = j + j; i < n; i = i + j) {
				naturalNumbers[i] = false;
			}
		}
	}
	return naturalNumbers;
}