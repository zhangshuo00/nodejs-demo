#!/usr/bin/node

const cp = require('child_process');

console.log('i am father process. pid:',process.pid);

cp.execFile('./02-child.js',(err,stdout)=>{
  if(err) console.error(err.message); 
  console.log(stdout);
})
