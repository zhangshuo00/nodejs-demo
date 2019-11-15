#!/usr/bin/node

const fs = require('fs'),
      log = console.log,
      file = process.argv[2];
if(process.argv.length !== 3){
  console.error('命令行参数格式：cmd fileName');
  process.exit(1);
}
try{
  var buf = fs.readFileSync(file);
}catch(e){
  console.error(e.message);
  process.exit(2);
}
if(buf.toString('ascii',0,2) === 'BM'){

log('width:',buf.readInt32LE(0x12));//获取图片的宽度
log('height:',buf.readInt32LE(0x16));//图片的高度
log('deepth:',buf.readUInt16LE(0x1c));//图片的颜色深度
}
