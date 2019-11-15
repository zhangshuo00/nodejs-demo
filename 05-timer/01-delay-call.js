#!/usr/bin/node

//实现延迟执行任务
const log = console.log;

function Bomb(id){
  var _id = id,timeID;
  this.start = ()=>{
    console.log('%d will bomb after 3 second',_id);
    timeID = setTimeout(() => {
      console.log('%d bomb',_id);
    }, 3000);
  }
  this.clear = ()=>{clearTimeout(timeID)}
}


var bomb = new Bomb(1);
bomb.start();

var bomb2 = new Bomb(2);
bomb2.start();
setTimeout(bomb2.clear,1000);