#!/usr/bin/node

const fs = require('fs'),
    log = console.log,
    pathname = process.argv[2];
if(typeof(pathname) === 'undefined'){
    console.error('命令行参数不正确');
    process.exit(1);
}

if(!fs.existsSync(pathname)){
    console.error('not exist');
    process.exit(2);
}
//是文件的话，删除
if(fs.statSync(pathname).isFile()) fs.unlinkSync(pathname);
//是目录的话，删除该目录以及该目录下的所有文件以及子目录
if(fs.statSync(pathname).isDirectory()) deleteDir(pathname);
function deleteDir(pathname){
    var files = fs.readdirSync(pathname);

    for(var i = 0;i < files.length;i++){
        var file = join(pathname,files[i]);

        if(fs.statSync(file).isFile()){
            fs.unlinkSync(file);
            continue;
        }

        if(fs.statSync(file).isDirectory()) deleteDir(file);
    }
    fs.rmdirSync(pathname);
}