#!/usr/bin/node

const Radio = require('./03-radio.js'),
      log = console.log;

// station对象包括两个字段
const station = {
  freq:'106.7',
  name:'music radio'
};

// 实例化对象
var radio = new Radio(station);

// 处理radio对象的 play事件和stop 事件
radio.on('play',(station)=>{
  log('"%s" FM %s opened',station.name,station.freq);
  log('llala');
});

radio.on('stop',(station)=>{
  log('"%s"FM %s closed!',station.name,station.freq);
});
