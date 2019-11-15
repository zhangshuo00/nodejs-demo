#!/usr/bin/node

const Read = require("stream").Readable;
// 自定义可读流，
// 将流和类的继承联系在一起
function MyReadable(){
  Read.call(this);
}
var c = 'a'.charCodeAt(0);

MyReadable.prototype._read =function (){
    this.push(String.fromCharCode(c++));
    if(c >"z".charCodeAt(0)) this.push(null);
}

MyReadable.prototype = Read.prototype;
module.exports = MyReadable;
