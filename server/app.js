/**
 * Created by m3rkz0r on 9/28/15.
 */
var express = require('express');
var app = express();
var republicans = require("./public/data/republicans");
var democrats = require("./public/data/democrats");

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
   res.sendFile(__dirname + '/public/views/index.html');
});

app.get('/getRepublicans', function(req,res){
    res.send(republicans);
});

app.get('/getDemocrats', function(req,res){
    res.send(democrats);
});

var server = app.listen(3000, function(){
   var port = server.address().port;
    console.log("Listening on ",port);
});

module.exports = app;