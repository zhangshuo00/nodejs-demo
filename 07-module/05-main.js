#!/usr/bin/node

const all = require('./05-export-all.js'),
      log = console.log;

log(all.pi);
log(all.circle(10).area());

var c = new all.circle(20);
log(c.diameter());
