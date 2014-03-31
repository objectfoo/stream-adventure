/*jshint node: true*/
'use strict';

var through = require('through');

require('http').createServer(function (req, res) {
	if (req.method !== 'POST') return res.end('only post supported\n');

	var tr = through(function (buf) {
		this.queue(buf.toString().toUpperCase());
	});

	req.pipe(tr).pipe(res);

}).listen(process.argv[2]);