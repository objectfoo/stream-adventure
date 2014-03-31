/*jshint node: true*/
'use strict';

var concat = require('concat-stream');

process.stdin
	.pipe(concat({encoding: 'string'}, function (str) {
		console.log(str.split('').reverse().join(''));
	}));