//jshint esversion:6

const express = require('express');
const ejs = require("ejs");

const app = new express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get('/', function(request,response){
    response.render(__dirname + '/index');
});

app.get('/campusevents', function(request,response){
    response.render(__dirname + '/public/html/campusevents');
});

app.get('/currentevents', function(request,response){
    response.render(__dirname + '/public/html/currentevents');
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server running on port 3000");
});
