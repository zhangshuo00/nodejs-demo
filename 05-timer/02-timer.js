#!/usr/bin/node

//实现定时执行任务
const log = console.log;
var timer1,timer2;
var count = 1;

log('start timer1');
// 500ms定时任务
timer1 = setInterval(loop1, 500);

// 倒计时5s结束，并触发timer2
setTimeout(() => {
  log('game over');

  clearInterval(timer1);
  log('start timer2');
  timer2 = setInterval(loop2,500)
}, 5000);

function loop1 (){
  log('timer1 will exit');
}
function loop2 (){
  log('timer2 will exit...');
  if(count++ >=5){
    count = 0;
    log('over');
    global.clearInterval(timer2)
  }
}