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

app.listen(process.env.PORT || 3000, function(){
    console.log("Server running on port 3000");
});

//testing