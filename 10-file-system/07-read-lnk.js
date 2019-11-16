#!/usr/bin/node

const fs = require('fs'),
      lnk = process.argv[2];

if(process.argv.length !== 3 || typeof(lnk) === 'undefined'){
    console.error('命令行参数不正确');
    process.exit(1);
}
try{
    console.log(lnk,'->',fs.readlinkSync(lnk));
}catch(e){
    console.error(e.message);
    process.exit(2);
}