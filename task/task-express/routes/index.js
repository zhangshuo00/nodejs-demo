var express = require('express');
var app = express();
// var path = require('path');
// var router = express.Router();

/* GET home page. */
app.get('/', function(req, res) {
    res.render('index');
});
app.post('/getList',function(req,res,next){
    console.log(req.body.username,req.body.pwd)
})
module.exports = app;
