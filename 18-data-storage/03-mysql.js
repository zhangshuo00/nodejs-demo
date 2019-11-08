#!/usr/bin/node

const mysql = require('mysql'),
      con = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'zhangshuo',
        database:'test'
      });

con.connect();

//增
con.query('insert into books(book_id,title,status) values(?,?,?)',['102','zhangsan',0],(err,result)=>{
  if(err){
    console.error(err);
    process.exit(1);
  }
  console.log(result);
  process.exit();
});
//删

con.query('delete from where book_id = ?',['102'],(err,result)=>{
  if(err){
    console.error(err);
    process.exit(1);
  }
  console.log(result);
  process.exit();
});
//改

con.query('update books set title = ? where book_id = ?',['hello','102'],(err,result)=>{
  if(err){
    console.error(err);
    process.exit(1);
  }
  console.log(result);
  process.exit();
});
//查

con.query('select * from books',(err,result)=>{
  if(err){
    console.error(err);
    process.exit(1);
  }
  console.log(result);
  process.exit();
});
