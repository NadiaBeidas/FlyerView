//jshint esversion:6

const express = require('express');
const ejs = require("ejs");
const bodyParser = require("body-parser");
//eric
var mysql = require('mysql');

const app = new express();

//var posts = [];
var campuseventposts1 = [];
var campuseventposts2 = [];
var campuseventposts3 = [];
var currenteventposts1 = [];
var currenteventposts2 = [];
var currenteventposts3 = [];

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
    /*
    var sql = "INSERT INTO posts (textOfPost, board) VALUES ('I am confusion', 'lama');";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("it is nighttime");
    }); */
  });

  //var grab = "SELECT textOfPost FROM posts WHERE postID = 1;"
  var grabCampus1 = "SELECT textOfPost FROM campuseventposts WHERE qNum = 1;"
  con.query(grabCampus1, function(err,result,fields){
    if (err) throw err;
    console.log(result[0].textOfPost + " 1101");
    test = String(result[0].textOfPost);

    for(var i=0; i <result.length; i++)
    {
      campuseventposts1.push(result[i].textOfPost);
    }
  });

  var grabCampus2 = "SELECT textOfPost FROM campuseventposts WHERE qNum = 2;"
  con.query(grabCampus2, function(err,result,fields){
    if (err) throw err;
    console.log(result[0].textOfPost + " 1101");
    test = String(result[0].textOfPost);

    for(var i=0; i <result.length; i++)
    {
      campuseventposts2.push(result[i].textOfPost);
    }
  });

  var grabCampus3 = "SELECT textOfPost FROM campuseventposts WHERE qNum = 3;"
  con.query(grabCampus3, function(err,result,fields){
    if (err) throw err;
    console.log(result[0].textOfPost + " 1101");
    test = String(result[0].textOfPost);

    for(var i=0; i <result.length; i++)
    {
      campuseventposts3.push(result[i].textOfPost);
    }
  });

  var grabCurrent1 = "SELECT textOfPost FROM currenteventposts WHERE qNum = 1;"
  con.query(grabCurrent1, function(err,result,fields){
    if (err) throw err;
    console.log(result[0].textOfPost + " 1101");
    test = String(result[0].textOfPost);

    for(var i=0; i <result.length; i++)
    {
      currenteventposts1.push(result[i].textOfPost);
    }
  });

  var grabCurrent2 = "SELECT textOfPost FROM currenteventposts WHERE qNum = 2;"
  con.query(grabCurrent2, function(err,result,fields){
    if (err) throw err;
    console.log(result[0].textOfPost + " 1101");
    test = String(result[0].textOfPost);

    for(var i=0; i <result.length; i++)
    {
      currenteventposts2.push(result[i].textOfPost);
    }
  });

  var grabCurrent3 = "SELECT textOfPost FROM currenteventposts WHERE qNum = 3;"
  con.query(grabCurrent3, function(err,result,fields){
    if (err) throw err;
    console.log(result[0].textOfPost + " 1101");
    test = String(result[0].textOfPost);

    for(var i=0; i <result.length; i++)
    {
      currenteventposts3.push(result[i].textOfPost);
    }
  });

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get('/', function(request,response){
    response.render(__dirname + '/index');
});

app.get('/campusevents', function(request,response){
    response.render(__dirname + '/public/html/campusevents', {postList1: campuseventposts1, postList2: campuseventposts2, postList3: campuseventposts3});

    console.log("campusevents");
});

app.get('/currentevents', function(request,response){
    response.render(__dirname + '/public/html/currentevents', {postList1: currenteventposts1, postList2: currenteventposts2, postList3: currenteventposts3});
});

app.post('/campusevents1', function(request,response){
    var campusPost1 = request.body.newCampusPost1;
    //console.log(post);

    //posts = [];
    campuseventposts1 = [];

    var postTosql = "INSERT INTO campuseventposts (textOfPost, qNum) VALUES ('" + campusPost1 + "', '1');";
    con.query(postTosql, function(err,result){
      if (err) throw err;
    });

    var grab = "SELECT textOfPost FROM campuseventposts WHERE qNum = 1;"
    con.query(grab, function(err,result,fields){
      if (err) throw err;
      console.log(result[0].textOfPost + " 1101");
      test = String(result[0].textOfPost);

      for(var i=0; i <result.length; i++)
      {
        campuseventposts1.push(result[i].textOfPost);
      }
      console.log(campuseventposts1);
      response.redirect("/campusevents");
  });

     //response.redirect("/campusevents");
});

app.post('/campusevents2', function(request,response){
  var campusPost2 = request.body.newCampusPost2;
  //console.log(post);

  //posts = [];
  campuseventposts2 = [];

  var postTosql = "INSERT INTO campuseventposts (textOfPost, qNum) VALUES ('" + campusPost2 + "', '2');";
  con.query(postTosql, function(err,result){
    if (err) throw err;
  });

  var grab = "SELECT textOfPost FROM campuseventposts WHERE qNum = 2;"
  con.query(grab, function(err,result,fields){
    if (err) throw err;
    console.log(result[0].textOfPost + " 1101");
    test = String(result[0].textOfPost);

    for(var i=0; i <result.length; i++)
    {
      campuseventposts2.push(result[i].textOfPost);
    }
    console.log(campuseventposts2);
    response.redirect("/campusevents");
});

   //response.redirect("/campusevents");
});

app.post('/campusevents3', function(request,response){
  var campusPost3 = request.body.newCampusPost3;
  //console.log(post);

  //posts = [];
  campuseventposts3 = [];

  var postTosql = "INSERT INTO campuseventposts (textOfPost, qNum) VALUES ('" + campusPost3 + "', '3');";
  con.query(postTosql, function(err,result){
    if (err) throw err;
  });

  var grab = "SELECT textOfPost FROM campuseventposts WHERE qNum = 3;"
  con.query(grab, function(err,result,fields){
    if (err) throw err;
    console.log(result[0].textOfPost + " 1101");
    test = String(result[0].textOfPost);

    for(var i=0; i <result.length; i++)
    {
      campuseventposts3.push(result[i].textOfPost);
    }
    console.log(campuseventposts3);
    response.redirect("/campusevents");
});

   //response.redirect("/campusevents");
});

app.post('/currentevents1', function(request,response){
  var currentPost1 = request.body.newCurrentPost1;
  //console.log(post);

  //posts = [];
  currenteventposts1 = [];

  var postTosql = "INSERT INTO currenteventposts (textOfPost, qNum) VALUES ('" + currentPost1 + "', '1');";
  con.query(postTosql, function(err,result){
    if (err) throw err;
  });

  var grab = "SELECT textOfPost FROM currenteventposts WHERE qNum = 1;"
  con.query(grab, function(err,result,fields){
    if (err) throw err;
    console.log(result[0].textOfPost + " 1101");
    test = String(result[0].textOfPost);

    for(var i=0; i <result.length; i++)
    {
      currenteventposts1.push(result[i].textOfPost);
    }
    console.log(currenteventposts1);
    response.redirect("/currentevents");
});

   //response.redirect("/currentevents");
});

app.post('/currentevents2', function(request,response){
  var currentPost2 = request.body.newCurrentPost2;
  //console.log(post);

  //posts = [];
  currenteventposts2 = [];

  var postTosql = "INSERT INTO currenteventposts (textOfPost, qNum) VALUES ('" + currentPost2 + "', '2');";
  con.query(postTosql, function(err,result){
    if (err) throw err;
  });

  var grab = "SELECT textOfPost FROM currenteventposts WHERE qNum = 2;"
  con.query(grab, function(err,result,fields){
    if (err) throw err;
    console.log(result[0].textOfPost + " 1101");
    test = String(result[0].textOfPost);

    for(var i=0; i <result.length; i++)
    {
      currenteventposts2.push(result[i].textOfPost);
    }
    console.log(currenteventposts2);
    response.redirect("/currentevents");
});

   //response.redirect("/currentevents");
});

app.post('/currentevents3', function(request,response){
  var currentPost3 = request.body.newCurrentPost3;
  //console.log(post);

  //posts = [];
  currenteventposts3 = [];

  var postTosql = "INSERT INTO currenteventposts (textOfPost, qNum) VALUES ('" + currentPost3 + "', '3');";
  con.query(postTosql, function(err,result){
    if (err) throw err;
  });

  var grab = "SELECT textOfPost FROM currenteventposts WHERE qNum = 3;"
  con.query(grab, function(err,result,fields){
    if (err) throw err;
    console.log(result[0].textOfPost + " 1101");
    test = String(result[0].textOfPost);

    for(var i=0; i <result.length; i++)
    {
      currenteventposts3.push(result[i].textOfPost);
    }
    console.log(currenteventposts3);
    response.redirect("/currentevents");
});

   //response.redirect("/currentevents");
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server running on port 3000");
});
