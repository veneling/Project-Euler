/*
 A palindromic number reads the same both ways. 
 The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 Find the largest palindrome made from the product of two 3-digit numbers.
 */

function reverse(s) {
	return s.toString().split("").reverse().join("");

}

var biggestPalindrome = 0;

for (var i1 = 0; i1 <= 9; i1++) {
	for (var j1 = 0; j1 <= 9; j1++) {
		for (var k1 = 0; k1 <= 9; k1++) {

			for (var i2 = 0; i2 <= 9; i2++) {
				for (var j2 = 0; j2 <= 9; j2++) {
					for (var k2 = 0; k2 <= 9; k2++) {

						var n1 = i1 + "" + j1 + "" + k1;
						var n2 = i2 + "" + j2 + "" + k2;

						var pal = parseInt(n1) * parseInt(n2);
						if (pal == reverse(pal)) {
							if (biggestPalindrome < pal)
								biggestPalindrome = pal;
							// console.log(n1 + " " + n2 + " " + pal);
						}
					}
				}
			}
		}
	}
}
console.log(biggestPalindrome);