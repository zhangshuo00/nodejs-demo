#!/usr/bin/node

const Num = require('./04-share.js'),
      log = console.log;

//用num实例化两个对象
var n1 = new Num();
var n2 = new Num();

n1.add();
n1.add();

log(n1.getCount());
log(n2.getCount());

n2.add();
n2.add();

log(n1.getCount());
log(n2.getCount());
