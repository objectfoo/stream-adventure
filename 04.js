'use strict';


var through = require('through')
  , tr = through(write, end)
  ;

process.stdin.pipe(tr).pipe(process.stdout);

function write(buffer) {
  /*jshint validthis:true*/
  this.queue(buffer.toString().toUpperCase());
}

function end() {
  /*jshint validthis:true*/
  this.queue(null);
}
