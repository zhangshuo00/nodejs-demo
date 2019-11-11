#!/usr/bin/node

const fs = require('fs'),
      file = process.argv[2];

try{
    fs.writeFileSync(file,'');
}catch(err){
    console.error(err.message);
    process.exit(1);
}
