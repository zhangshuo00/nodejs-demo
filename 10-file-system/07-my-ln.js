#!/usr/bin/node

const fs = require('fs');
var opt,src,lnk;
switch(process.argv.length){
    // 没有-s选项，创建硬链接
    case 4:
        src = process.argv[2];
        lnk = process.argv[3];
        try {
            fs.linkSync(src,lnk);
        }catch(e) {
            console.error(e.message);
            process.exit(1);
        }
        break;
    // 有-s，创建符号链接
    case 5:
        opt = process.argv[2];
        src = process.argv[3];
        lnk = process.argv[4];

        try {
            fs.symlinkSync(src,lnk);
        }catch(e) {
            console.error(e.message);
            process.exit(2);
        }
        break;
    default:
        console.error('命令行参数不正确');
}