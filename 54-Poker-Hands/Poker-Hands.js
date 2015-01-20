function readData(fileName) {
	fs = require('fs');
	path = require('path');

	var filePath = path.join(__dirname, fileName);
	var encoding_ = 'utf8';
	fs.readFile(filePath, encoding_, function(err, data) {
		if (err) {
			console.log(err);
		} else {
			return x = data.split("\r\n");
			;
		}
	});
}

function readDataSync(fileName) {
	fs = require('fs');
	path = require('path');
	var filePath = path.join(__dirname, fileName);

	var contents = fs.readFileSync(filePath);
	return contents;

}

var a = readDataSync('_poker.txt');
console.log(a.toString('utf8'));
