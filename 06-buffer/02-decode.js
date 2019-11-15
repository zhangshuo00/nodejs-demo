#!/usr/bin/node

// buffer解码
// 从命令行参数获取用户名和密码信息的base64编码字符串
// 还原信息
const log = console.log;


var buf = new Buffer(process.argv[2],'base64'),
    info = buf.toString('utf8').split(':');

log('usr:%s,pwd:%s',info[0],info[1]);
