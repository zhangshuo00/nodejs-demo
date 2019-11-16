#!/usr/bin/node

const fs = require('fs'),
    file = process.argv[2] || __filename;

try{
  console.log(fs.readFileSync(file).toString('utf-8'));
}catch(e){
  console.error(e.message);
  process.exit(1);
}