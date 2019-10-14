var mysql = require('mysql');

var con = mysql.createconnection({
    host: "localhost",
    user: "root",
    password: ""
});

con.connect(function(err){
    if (err) throw err;
    console.log("[+] connected to mysql");
    con.querry("CREATE DATABASE IF NOT EXISTS flyerView", function(err, result) {
        if (err) throw err;
        console.log("[+] database flyerView created")
    });
    con.querry("CREATE TABLE IF NOT EXISTS users (uID INT PRIMARY KEY AUTO_INCREMENT, fName VARCHAR(10) NOT NULL, lName VARCHAR(20) NOT NULL, userName VARCHAR(20) NOT NULL UNIQUE)", function(err, result){
        if (err) throw err;
        console.log("[+] table users created")
    });
    con.querry("CREATE TABLE IF NOT EXISTS posts (postID INT PRIMARY KEY AUTO_INCREMENT, postTime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(), textOfPost VARCHAR(255), uID INT NOT NULL, CONSTRAINT posts_fk_users FOREIGN KEY(uID) REFERENCES users(uID) ON DELETE DELETE ON UPDATE CASCADE)", function(err, result){
        if (err) throw err;
        console.log("[+] table posts created")
    });
});

