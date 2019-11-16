#!/usr/bin/node
console.log("i am child process id: %d",process.pid);
// 每 2秒打印当前时间
const timer = setInterval(function(){
  console.log('Time is %d',Date.now());
},2000);
// 16秒后关闭定时器
setTimeout(function(){
  global.clearInterval(timer);
  console.log('bye');
},16000);
