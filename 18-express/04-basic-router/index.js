const express = require('express'),
      app = express();

app.get('/',function(req,res,next){
  console.log('r1');
  res.end('ok!');
},function(req,res,next){
  console.log('r2');
});
app.get('/json',function(req,res,next){});
app.get('/download',function(req,res,next){});
app.get('/courses/:id',function(req,res,next){});
app.get('/posts/:year/:month',function(req,res,next){});


app.listen(8080);
