#!/usr/bin/node

const fs = require('fs');

var opt,src,lnk;

//支持 -s选项，所以需要判断命令行参数的length，是否包含-s
switch(process.argv.length){
  //不包含-s时，创建硬链接
  case 4:
    src = process.argv[2];
    lnk = process.argv[3];

    if(fs.existsSync(src)){
      fs.linkSync(src,lnk);
    }else{
      console.error('%s not exist',src);
      process.exit(1);
    }
    break;
    //包含-s，创建的符号链接
  case 5:
    opt = process.argv[2];
    src = process.argv[3];
    lnk = process.argv[4];

    if(opt === '-s'){
      if(fs.existsSync(src,lnk)){
        fs.symlinkSync(src,lnk);
      }else{  
       console.error('%s not exist',src);
       process.exit(1);
      }
    }else{
      console.error('命令行参数不正确');
    }
    break;

  default:
    console.error('命令行参数不正确');

}
