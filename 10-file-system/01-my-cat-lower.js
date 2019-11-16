#!/usr/bin/node

const fs = require('fs'),
    file = process.argv[2] || __filename;

try{
  var len = fs.statSync(file).size,//获取文件信息
      buf = new Buffer(len),
      fid = fs.openSync(file,'r');//以读取模式打开文件

  fs.readSync(fid,buf,0,len,0);//返回一个读取的字节数
  console.log(buf.toString('utf-8'));
}catch(e){
  console.error(e.message);
  process.exit(1);
}

