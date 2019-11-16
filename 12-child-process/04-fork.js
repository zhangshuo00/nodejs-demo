#!/usr/bin/node

const cp = require('child_process');

console.log('当前进程的ID：',process.pid);
cp.fork('./02-child.js');
setTimeout(() => {
  console.log('5 seconds passed. father_process over');
}, 5000);
