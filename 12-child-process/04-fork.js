#!/usr/bin/node

const cp = require('child_process');

console.log('i am father with id:',process.pid);
cp.fork('./02-child.js');


global.setTimeout(function(){
  console.log('father bye');
  process.exit();
},5000);
