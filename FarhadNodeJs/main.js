//var http = require('http');
//var fs = require('fs');
var express = require('express');
var app = express();

//app.use(express.static(__dirname + '/public'));
app.use(express.static('public'));
app.get('/', function(req, res){

  res.sendFile(__dirname + "/index.html");
});
app.get('/jsTask', function(req, res){

  res.sendFile(__dirname + "/jsTask.html");
});
app.listen(3000,'localhost');
