'use strict';

var spawn = require('child_process').spawn
  , duplexer = require('duplexer');

function dupe(cmd, args) {
  var child = spawn(cmd, args);

  return duplexer(child.stdin, child.stdout);
}

module.exports = dupe;
