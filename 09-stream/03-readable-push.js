#!/usr/bin/node

const Read = require('stream').Readable;//可读流

// 实例化 Readable 流
var r = new Read();
// 向流中 push 若干个字符串
r.push('hello\n');
r.push('world');
r.push(null);
// 将 Readable 流管道连接到标准输出流
r.pipe(process.stdout);

