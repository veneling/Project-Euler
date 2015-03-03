/**
 * New node file
 */
sieveOfErathostene(106000);

function sieveOfErathostene(n) {
	var naturalNumbers = Array.apply(null, Array(n)).map(function() {
		return true;
	});
	var startNum = 2;
	var sqn = Math.sqrt(n);

	for (var j = startNum; j < sqn; j++) {

		if (naturalNumbers[j]) {
			
			for (var i = j + j; i < n; i = i + j) {
				naturalNumbers[i] = false;
			}
		}
	}

	var counter = 1;
	console.log(2 + " " + naturalNumbers[2]);
	for (var x = 3; x < naturalNumbers.length; x += 2) {
		if (naturalNumbers[x]) {
			counter++;
			//if (counter == 10001) {
				console.log(counter + " -> " + x);
			//	return;
			//}
		}
	}

	console.log(counter);
}