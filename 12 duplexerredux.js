'use strict';

var duplexer = require('duplexer')
  , through = require('through');

function duplexerRedux(counter) {
  var cnt = {}
    , input = through(write, end);

  return duplexer(input, counter);

  function write(d) {
    cnt[d.country] = (cnt[d.country] || 0) + 1;
  }

  function end() {
    counter.setCounts(cnt);
  }
}

module.exports = duplexerRedux;
