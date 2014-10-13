var through = require('through');
var split = require('split');

process.stdin
.pipe(split())
.pipe(through(tr()))
.pipe(process.stdout);

function tr() {
	var isEven = false;

	return function evenOddTr(buf) {
		var line = buf.toString();

		this.queue(
			isEven
				? line.toUpperCase() + '\n'
				: line.toLowerCase() + '\n'
		);
		isEven = !isEven;
	}
}