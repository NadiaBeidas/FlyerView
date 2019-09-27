//var http = require('http');
//
//http.createServer(function (req, res) {
//  res.writeHead(200, {'Content-Type': 'text/html'});
//  res.end('Hello World!');
//}).listen(8080);
var express = require('express');

const app = new express();

app.get('/', function(request,response){
    response.sendFile('index.html');
});