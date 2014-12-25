'use strict';

module.exports = dup2;

var duplexer = require('duplexer')
  , through = require('through');

function dup2(counter) {
  var counts = {}
    , input;

  input = through(
    function(row) {
      counts[row.country] = (counts[row.country] || 0) + 1;
    },
    function() {
      counter.setCounts(counts);
    }
  );

  return duplexer(input, counter);
}
