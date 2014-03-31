/*jshint node: true*/
'use strict';

var through = require('through');
var split = require('split');

var cnt = 0;
var tr = through(function (buf) {
	var line = buf.toString();

	this.queue((cnt++ % 2 === 0 ?
			line.toLowerCase() :
			line.toUpperCase()) + '\n');
});

process.stdin
	.pipe(split())
	.pipe(tr)
	.pipe(process.stdout);
