#!/usr/bin/node

const EventEmitter = require('events').EventEmitter,
    util = require('util');

function Radio (station){
  EventEmitter.call(this);

  var self = this;
  //延迟0秒发出play事件
  setTimeout(()=>{
    self.emit('play',station);
  },0);
  // 延迟 5秒发出stop事件
  setTimeout(()=>{
    self.emit('stop',station);
  },5000);
}

// Radio类用 util的 inherits方法继承EventEmitter类
util.inherits(Radio,EventEmitter);
module.exports = Radio;
