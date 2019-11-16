#!/usr/bin/node

const fs = require('fs'),
    file = process.argv[2] || __filename;

if(!fs.existsSync(file)){
  console.error('%s not exist',file);
  process.exit(1);
}

if(!fs.statSync(file).isFile()){
  console.error('%s is not file',file);
  process.exit(2);
}
//用流的方式读取文件并将管道连接标准输出流
fs.createReadStream(file).pipe(process.stdout);