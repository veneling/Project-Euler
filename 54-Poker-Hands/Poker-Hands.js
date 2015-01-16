function readData(fileName) {
	fs = require('fs');
	path = require('path');

	var filePath = path.join(__dirname, fileName);
	var encoding_ = 'utf8';
	fs.readFile(filePath, encoding_, function(err, data) {
		if (err) {
			console.log(err);
		} else {
			return x = data.split("\r\n");;
		}
	});
}

var a = readData('_poker.txt');
console.log(a);