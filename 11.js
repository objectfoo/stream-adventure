'use strict';

module.exports = dup;

var spawn = require('child_process').spawn
  , duplexer = require('duplexer');

function dup(cmd, args) {
  var proc = spawn(cmd, args);

  return duplexer(proc.stdin, proc.stdout);
}
