
var express = require('express');

const app = new express();

app.use(express.static("public"));

app.get('/', function(request,response){
    response.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server running on port 3000");
});
