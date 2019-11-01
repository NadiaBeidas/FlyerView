//jshint esversion:6

const express = require('express');
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = new express();

var posts = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get('/', function(request,response){
    response.render(__dirname + '/index');
});

app.get('/campusevents', function(request,response){
    response.render(__dirname + '/public/html/campusevents', {postList: posts});

    console.log("campusevents");
});

app.get('/currentevents', function(request,response){
    response.render(__dirname + '/public/html/currentevents');
});

app.post('/campusevents', function(request,response){
    var post = request.body.newPost;
    console.log(post);

    posts.push(post);

    response.redirect("/campusevents");
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server running on port 3000");
});
