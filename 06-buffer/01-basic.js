#!/usr/bin/node

const log = console.log;
// 实例化buf1，缓冲区256字节
var buf1 = new Buffer(256);

buf1[0] = 0x11;//初始化第一个字节为零
//打印长度及内容
log("buf1 length:",buf1.length);//buf1 length: 256
log("buf1:",buf1);//buf1: <Buffer 11 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
//00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ... >

// 通过循环，初始化 buffer中的每个字节
for(var i = 0;i < buf1.length;i++) buf1[i] = i;
log('buf1: ',buf1);
// buf1:  <Buffer 00 01 02 03 04 05 06 07 08 09 0a 0b 0c 0d 0e 0f 10 11 12 13 14 15 16 17 18
// 19 1a 1b 1c 1d 1e 1f 20 21 22 23 24 25 26 27 28 29 2a 2b 2c 2d 2e 2f 30 31 ... >

// 对buf1做切片操作，取出后10个字节放到buf2中
var buf2 = buf1.slice(250,256);
log('buf2: ',buf2);// buf2:  <Buffer fa fb fc fd fe ff>

// 将buf2中所有字节填充为零，buffer数据转化成 JSON数据
buf2.fill(0);
log('buf2: ',buf2);
log('buf2\'s JSON:',buf2.toJSON());//buf2's JSON: { type: 'Buffer', data: [ 0, 0, 0, 0, 0, 0 ] }
log('buf2\'s JSON:',JSON.stringify(buf2));//buf2's JSON: {"type":"Buffer","data":[0,0,0,0,0,0]}

// 用数组初始化 buffer
var array = ['a',0xba,0xdf,0x00,255,10];
var buf3 = new Buffer(array);
log('buf3: ',buf3.length,buf3);//buf3:  6 <Buffer 00 ba df 00 ff 0a>

// 用字符串初始化 buffer
var buf4 = new Buffer('hello world','utf-8');
log('buf4: ',buf4.length,buf4);//buf4:  11 <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>

// 将buf4内容复制到buf3中，打印复制后的buf3的内容和长度，打印buf3字符串
buf4.copy(buf3,0,0,buf3.length);
log('buf3: ',buf3.length,buf3);//buf3:  6 <Buffer 68 65 6c 6c 6f 20>
