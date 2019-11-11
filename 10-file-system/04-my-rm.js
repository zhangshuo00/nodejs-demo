#!/usr/bin/node

const fs = require('fs'),
      file = process.argv[2];

if(fs.existsSync(file)){
    if(fs.statSync(file).isFile()) fs.unlinkSync(file);
}else{
    console.error('not exist');
    process.exit(1);
}

