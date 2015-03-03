/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
16 -     720 720
18 -  12 252 240
19 -  12 252 240
20 - 232 792 560
 */

var n = 12252240;

do {
	var c = check(n);
	n++;
} while (!c)

function check(n) {
	var checked = true;
	for (var i = 1; i < 20; i++) {
		if (n % i != 0) {
			checked = false;
		}
	}
	if (checked) {
		console.log(n);
	}
	return checked;
}