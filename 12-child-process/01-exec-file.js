#!/usr/bin/node


const cp = require('child_process');

console.log('i am father process. pid:',process.pid);

var cmd = '';
var i =0;
if(process.argv.length == 2){
  cp.exec('cat 01-exec-file.js',(err,stdout)=>{
    if(err) console.error(err);
    console.log(stdout);
  })
}else{
  for(i =2;i<process.argv.length;i++){
    cmd += (process.argv[i] + ' ');
  }

  cp.exec(cmd,(err,stdout)=>{
    if(err) console.error(err);
    console.log(stdout);
  })
}
