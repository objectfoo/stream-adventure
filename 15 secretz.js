'use strict';

var crypto = require('crypto')
  , decrypt = crypto.createDecipher(process.argv[2], process.argv[3])
  , zlib = require('zlib')
  , unzip = zlib.createGunzip()
  , tar = require('tar')
  , tarParser = tar.Parse()
  , fs = require('fs');

tarParser.on('entry', function(e) {
});

