#!/usr/bin/node

const Read = require('stream').Readable;//可读流

var r = new Read();
r.push('hello\n');
r.push('world');
r.push(null);

r.pipe(process.stdout);

