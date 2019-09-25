#!/usr/bin/node
console.log("i am child process id: %d",process.pid);

const timer = setInterval(function(){
  console.log('Time is %d',Date.now());
},2000);

setTimeout(function(){
  global.clearInterval(timer);
  console.log('bye');
},16000);
