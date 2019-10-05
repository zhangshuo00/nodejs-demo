#!/usr/bin/node

const fs = require('fs'),
      src = process.argv[2],
      dst = process.argv[3];

fs.copyFile(src,dst,function(err){
  if(err){
    console.error(err.message);
    process.exit(1);
  }else{
    console.log('拷贝成功');
  }
})
