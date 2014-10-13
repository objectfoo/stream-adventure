var http = require('http');
var through = require('through');

function toStringUpper(buf) {
	this.queue(buf.toString().toUpperCase());
}

function handleRequest(req, res) {
	if (req.method === 'POST') {
		req.pipe(through(toStringUpper)).pipe(res);
	}
	else {
		res.end('send me a post\n');
	}	
}

http
	.createServer(handleRequest)
	.listen(parseInt(process.argv[2], 10));
