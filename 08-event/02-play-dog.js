#!/usr/bin/node

// 引入Dog模块
const Dog = require('./02-dog.js');

// 实例化对象
var taidi = new Dog('taidi',4);
var zangao = new Dog('zangao',10);

// 触发bark事件，回调函数作为参数
taidi.on('bark',onBark);
zangao.on('bark',onBark);

// 定义onBark函数，作为回调函数
function onBark(){
  console.log('%s barked! energy:%s',this.name(),this.energy());
}
