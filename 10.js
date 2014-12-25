'use strict';

var trumpet = require('trumpet')
  , tr = trumpet()
  , through = require('through')
  , loud = tr.createStream('.loud');

loud.pipe(through(function(buf) {
  this.queue(buf.toString().toUpperCase());
})).pipe(loud);

process.stdin.pipe(tr).pipe(process.stdout);
