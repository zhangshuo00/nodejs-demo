#!/usr/bin/node

const Read = require('stream').Readable;

// 实例化Readable 流
var r = new Read();

var c = 'a'.charCodeAt(0);
// 定义 _read 方法，将a-z push到流中
r._read =()=>{
  r.push(String.fromCharCode(c++));
  if(c>'z'.charCodeAt(0)) r.push(null);
};
// 将流接入标准输出流
r.pipe(process.stdout);
