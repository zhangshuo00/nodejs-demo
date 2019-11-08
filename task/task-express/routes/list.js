var express = require('express');
var app = express();
var router = express.Router();

/* GET users listing. */
app.get('/list', function(req, res) {
  res.sendFile(path.join(__dirname,"..","public","list.html"))
});

module.exports = app;
