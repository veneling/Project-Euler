/**
 * Work out the first ten digits of the sum of the one-hundred 50-digit numbers
 * in file Numbers.txt.
 */
function readDataSync(fileName) {
	fs = require('fs');
	path = require('path');
	var filePath = path.join(__dirname, fileName);

	var contents = fs.readFileSync(filePath);
	return contents;
}

var data = readDataSync('Numbers.txt');
var jsonData = JSON.stringify(data.toString('utf8'));
var arr = jsonData.split("\\r\\n");

arr[0] = arr[0].replace(/"/, '');
arr[arr.length - 1] = arr[arr.length - 1].replace(/"/, '');

var numLength = arr[0].length - 1;
var nums = arr.length;
var result = [];
var carry = 0;

for (var j = numLength; j >= 0; j--) {

	for (var i = 0; i < nums; i++) {

		var n = arr[i].toString().substr(j, 1);
		carry += parseInt(n);

	}

	process.stdout.write(carry.toString() + " ");
	var len = carry.toString().length;
	if (j == 0) {
		var lastDigit = carry.toString();
	} else {
		var lastDigit = carry.toString().substr(len - 1, 1);
	}
	result.push(lastDigit);
	carry = carry < 10 ? 0 : parseInt(carry.toString().substr(0, len - 1));
	console.log(carry + " " + lastDigit);
}

console.log(result.reverse().join(""));
console.log(result.join("").substr(0, 10));
