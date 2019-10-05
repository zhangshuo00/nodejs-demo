#!/usr/bin/node


const cp = require('child_process');

console.log('i am father process. pid:',process.pid);

var cmd = '';

for(var i =2;i<process.argv.length;i++){
  cmd += (process.argv[i] + ' ');
}

cp.execFile(cmd,(err,stdout)=>{
  if(err) console.log(err);
  console.log(stdout);
})
