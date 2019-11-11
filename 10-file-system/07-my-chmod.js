#!/usr/bin/node

const fs = require('fs'),
      mod = process.argv[2],
      dst = process.argv[3];

if(process.argv.length != 4){
    console.error('命令行参数不正确');
    process.exit(1);
}
try{
    fs.chmodSync(dst,Number(mod));
}catch(err){
    console.error(err.message);
    process.exit(2);
}


