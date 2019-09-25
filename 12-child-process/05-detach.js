#!/usr/bin/node

const cp = require('child_process');

console.log('i am father process. pid: ',process.pid);

var child = cp.spawn('./02-child.js',[],{detached:true,stdio:['ignore',1,2]});

child.unref();

setTimeout(()=>{
  console.log('5s passed. father game over');
  process.exit(0);
},5000);
