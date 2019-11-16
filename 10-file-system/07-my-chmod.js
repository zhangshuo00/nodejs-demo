#!/usr/bin/node

const fs = require('fs'),
      mod = process.argv[2],
      dst = process.argv[3];

if(process.argv.length !== 4){
    console.error('命令行参数错误');
    process.exit(1);
}
try {
    fs.chmodSync(dst,Number(mod));
}catch(e){
    console.error(e.message);
    process.exit(2);
}
