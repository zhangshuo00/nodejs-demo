var express = require('express');
var app = express();
var path = require('path');
// var router = express.Router();

/* GET home page. */
app.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname,"..","public","login.html"))
});
app.get('/username/:id',function(req,res){
  console.log(req.username.id)
})
app.get('/list',function(req,res,next){
  res.sendFile(path.join(__dirname,"..","public","list.html"))
})
module.exports = app;
