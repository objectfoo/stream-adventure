'use strict';

var http = require('http')
  , tr = require('through')
  ;

http.createServer(function(req, res) {

  if (req.method === 'POST') {
    req.pipe(tr(function(buf) {
        this.queue(buf.toString().toUpperCase());
      })).pipe(res);
  }
  else res.end('post required\n');
})
.listen(process.argv[2]);
