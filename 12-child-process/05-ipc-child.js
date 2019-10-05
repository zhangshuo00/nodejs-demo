#!/usr/bin/node

console.log('i am child process. pid: ',process.pid);

process.on('message',(msg)=>{
  console.log('msg from father: ',msg);
});

process.send('hello i am child process. pid: ' + process.pid);
