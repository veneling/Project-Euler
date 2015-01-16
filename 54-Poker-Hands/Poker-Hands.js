function readDataSync(fileName) {
	fs = require('fs');
	path = require('path');
	var filePath = path.join(__dirname, fileName);

	var contents = fs.readFileSync(filePath);
	return contents;

}

var a = readDataSync('_poker.txt');
console.log(a.toString('utf8'));