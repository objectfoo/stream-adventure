/*jshint node: true*/
'use strict';

var through = require('through');


var tr = through(
	function (d) {
		this.queue(d.toString().toUpperCase());
	},
	function () {
		this.queue(null);
	}
);

process.stdin.pipe(tr).pipe(process.stdout);
