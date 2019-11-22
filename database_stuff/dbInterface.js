var mysql = require('mysql');


let dbInterFace = {

    querry : "",

    con : 
        mysql.createConnection({
        host: "localhost",
        user: "root",
        password: ""
    }); 
    ,


    usePosts: function()
    {
        con.connect(function(err) {
            if (err) throw err;
            con.query("use posts", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            });
        }
    },

    useUsers: function()
    {
        con.connect(function(err) {
            if (err) throw err;
            con.query("use posts", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            });
        }
    },

    setQuerry: function(queery)
    {
        this.querry = queery;
    },

    makeQuery: function()
    {
        con.connect(function(err) {
            if (err) throw err;
            con.query(this.querry, function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            });
        }
    },

    storeUser: function(fName,lName,uName)
    {
        con.connect(function(err) {
            if (err) throw err;
            con.query("INSERT INTO users (fName, lName, userName) VAALUES ('${fName}','${lName}','${uName}')", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            });
        }
    },

    storePost: function (text,uID,parent)
    {
        con.connect(function(err) {
            if (err) throw err;
            con.query("INSERT INTO posts (textOfPost, uID, parentPost) VALUES ('${text}',${uID},${parent})", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            });
        }
    }
}