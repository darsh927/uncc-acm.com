/*
  require a node module
*/
var express = require('express');

var app = express();

app.get('/', express.static('./'));

app.get('/nickbreaton', function (req, res) {
  res.end('Hello from Nick!');
});

app.get('/michaelpedersen', function (req, res){
  res.end('Hello from Michael!');
});

app.get('/Darshesh Patel', function (req, res){
  res.end('Hello from Darshesh!');
});
app.listen(3000);
