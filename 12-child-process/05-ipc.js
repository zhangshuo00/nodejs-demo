#!/usr/bin/node

const cp = require('child_process');

console.log('i am father process. pid: ',process.pid);

var child = cp.fork('./05-ipc-child.js');

child.on('message',(msg)=>{
  console.log('msg from child: ',msg);
});

setTimeout(()=>{
  child.send('i am father process. pid: ' + process.pid);
},2000);
