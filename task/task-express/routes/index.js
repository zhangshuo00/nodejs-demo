var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

/* GET home page. */
app.get('/', function(req, res) {
    res.render('index');
});
app.post('/list',function(req,res,next){
    // console.log(req.body.username,req.body.pwd)
    //读取data.json中的用户信息判断
    var username = req.body.username;
    var pwd = req.body.pwd;
    var dataJSON = fs.readFileSync('./public/data.json','utf-8');
    // console.log(JSON.parse(dataJSON).users);
    var userInfo = JSON.parse(dataJSON).users;
    for(var i = 0;i<userInfo.length;i++){
        //判断成功后渲染list.ejs
        if(userInfo[i].username === username && userInfo[i].password === pwd){
            // console.log('登录成功');
            res.render('list',{list : JSON.parse(dataJSON).chapterList});
            break;
        }else{
            res.send('用户信息有误！');
        }
    }

    //否则提示用户错误，登录失败
})
module.exports = app;
