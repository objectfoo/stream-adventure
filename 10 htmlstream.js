'use strict';

var trumpet = require('trumpet')
  , tr = trumpet()
  , through = require('through')
  , loud;

// create a readable/writeable stream when elem.loud is found
loud = tr.createStream('.loud');

// input pipe > transform > output pipe
loud.pipe(through(toUpperCase)).pipe(loud);

// process.stdin > trumpet.stream > process.stdout
process.stdin.pipe(tr).pipe(process.stdout);

function toUpperCase(buf) {
  /*jshint validthis: true*/
  this.queue(buf.toString().toUpperCase());
}
