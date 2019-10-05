#!/usr/bin/node

console.log('process id:',process.pid);

process.stdin.resume();

process.on('SIGINT',()=>{
  console.log('you process ctrl+c or kill -2');
  process.exit();
});

process.on('SIGSTP',()=>{
  console.log('you press ctrl+z');
  process.exit();
})
