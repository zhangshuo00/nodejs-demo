#!/usr/bin/node

const fs = require('fs');
// 获取命令行参数，没有的时候打印本身内容
const file = process.argv[2] || __filename;

fs.readFile(file,function(err,buf){
  if(err) {
    console.error(err.message);
    process.exit(1);
  }else {
    console.log(buf.toString('utf-8'));
  }
})
