#!/usr/bin/node

const fs = require('fs'),
      src = process.argv[2],
      dst = process.argv[3];

if(fs.existsSync(src)){//判断文件是否存在
  fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}else{
  console.error('%s not exist',src);
  process.exit(1);
}
