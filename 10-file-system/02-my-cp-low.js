#!/usr/bin/node

const fs = require('fs'),
      src = process.argv[2],
      dst = process.argv[3];

fs.open(src,'a',function(err,fd){
    if(err){
        console.error(err);
        process.exit(1);
    }else{
        var buf = new Buffer()
    }
})