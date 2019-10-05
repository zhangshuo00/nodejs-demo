#!/usr/bin/node

const fs = require('fs'),
      args = process.argv[2],
      dir = process.argv[3];
<<<<<<< HEAD
var arr = new Array();
=======

>>>>>>> 471f9a5998d801ff4c8787d1d424662ad68862e8
try{
  switch(args){

    case 'ls':
      var files = fs.readdirSync(__dirname),
            i =0;
<<<<<<< HEAD
      var array = [];
      for(i;i<files.length;i++){
        array[i] = new Object();
        array[i].fileName = files[i];
        array[i].fileSize = fs.statSync('./'+files[i]).size;
       // const json = JSON.stringify(array[i]);
        //console.log(json);
      }

     const json = JSON.stringify(array);
      console.log(json);
=======
      for(i;i<files.length;i++){
        console.log('fileName: '+ files[i] + ', fileSize: ' + fs.statSync('./'+files[i]).size);
      }
>>>>>>> 471f9a5998d801ff4c8787d1d424662ad68862e8
      break;
    case 'mkdir':
      fs.mkdir(dir,function(err){
        if(err){
          console.error(err.message);
          process.exit(1);
        }
      });
      break;
    default:
      console.error('请输入正确的参数');
      process.exit(1);
      break;
  }
}catch(err){
  console.error('请输入正确的参数');
  process.exit(1);
}
