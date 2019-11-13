//jshint esversion:6

const express = require('express');
const ejs = require("ejs");
const bodyParser = require("body-parser");
//eric
var mysql = require('mysql');

const app = new express();

var posts = [];

//eric
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "flyerView"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO posts (textOfPost, board) VALUES ('I am confusion', 'lama');";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("it is nighttime");
    });
  });

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
