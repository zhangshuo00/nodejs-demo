#!/usr/bin/node

//实现定时执行任务
const log = console.log,
      timeID = setInterval(loop,500);

log('start...');
timeID.unref();

function loop(){
  log('I will loop forever!');
}

setTimeout(() =>{
  log('Game Over!');
},5000);

