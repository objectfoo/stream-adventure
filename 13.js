'use strict';

module.exports = groupByGenre;

var Combine = require('stream-combiner')
  , split = require('split')
  , through = require('through')
  , zlib = require('zlib')
  , groupByGenre = through(write, end)
  , current;

function groupByGenre() {
  current = null;

  return new Combine(split(), groupByGenre, zlib.createGzip());
}

function write(data) {
  var row;
  /*jshint validthis: true*/

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
  /*jshint validthis: true*/

  if (current){
    this.queue(JSON.stringify(current) + '\n');
  }

  this.queue(null);
}
