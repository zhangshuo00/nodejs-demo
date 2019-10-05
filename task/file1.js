#!/usr/bin/node

const fs = require('fs'),
      dir = __dirname;

var files = fs.readdirSync(dir);
var student = [];
student[0] = new Object();
student[0].fileName = files[0];
student[0].fileSize = fs.statSync('./'+files[0]).size;
var json1 = JSON.stringify(student[0]);
console.log(json1);

student[1] = new Object();
student[1].fileName = files[1];
student[1].fileSize = fs.statSync('./'+files[1]).size;
var json = JSON.stringify(student[1]);

console.log(json);
