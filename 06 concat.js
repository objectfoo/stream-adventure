var concat = require('concat-stream');

var reverseStr = concat(function (src) {
	var s = src.toString().split('').reverse().join('');
	console.log(s);
});

process.stdin.pipe(reverseStr);
