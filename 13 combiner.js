'use strict';

var combine = require('stream-combiner')
  , split   = require('split')
  , through = require('through')
  , zlib    = require('zlib');

module.exports = function() {
  var grouper = through(write, end)
    , current;

  function write(data) {
    var row;

    if (data.length === 0) return;
    row = JSON.parse(data);

    if (row.type === 'genre') {
      if (current) {
        this.queue(JSON.stringify(current) + '\n');
      }
      current = { name: row.name, books: [] };
    }
    else if (row.type === 'book') {
      current.books.push(row.name);
    }
  }

  function end() {
    if (current) {
      this.queue(JSON.stringify(current) + '\n');
    }
    this.queue(null);
  }

  return combine(
    split(),
    grouper,
    zlib.createGzip()
  );
};
