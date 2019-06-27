var express = require('express');
var app = express();
var port = process.env.PORT || 3001;
var path = require('path');

app.use(express.static(path.join(__dirname, '..', 'client')));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/vue/#', function(req, res){
  res.sendFile(path.join(__dirname, 'views', 'indexvue.html'));
});

app.get('/vue/backward', function(req, res){
  res.sendFile(path.join(__dirname, 'views', 'indexvue.html'));
});

app.get('/vue/exhibit*', function(req, res){
  res.sendFile(path.join(__dirname, 'views', 'indexvue.html'));
});

app.get('/vue/tutorial*', function(req, res){
  res.sendFile(path.join(__dirname, 'views', 'indexvue.html'));
});


app.get('/vue/use-cases*', function(req, res){
  res.sendFile(path.join(__dirname, 'views', 'indexvue.html'));
});

app.get('/vue/', function(req, res){
  res.sendFile(path.join(__dirname, 'views', 'indexvue.html'));
});

module.exports = app;