'use strict';

var ws = require('websockets-stream')
  , stream = ws('ws://localhost:8000');

stream.end('hello\n');
