#!/usr/bin/node

const fs = require('fs'),
    file = process.argv[2];

if(file === 'undefined'){
    console.error('命令行参数不正确');
    process.exit(1);
}

try {
    fs.writeFileSync(file,'');
}catch(e){
    console.error(e.message);
    process.exit(2);
}