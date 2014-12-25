'use strict';

var through = require('through')
  , split = require('split')
  , tr = through(write());

process.stdin
  .pipe(split())
  .pipe(tr)
  .pipe(process.stdout);

function write() {
  /*jshint validthis: true*/
  var cnt = 0;
  return function (line) {
    this.queue((++cnt % 2 === 0
      ? line.toUpperCase()
      : line.toLowerCase()) + '\n');
  };
}
