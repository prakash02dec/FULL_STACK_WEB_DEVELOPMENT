// jshint esversion:6

const express = require("express");

const app = express();

//this app.get defines what should happen  when someone makes a get request to the home page
app.get("/",function(req , res){
    // console.log(req);
    res.send("<h1>hello world</h1>");
});

app.get("/contact",function(req, res){
    res.send("contact me at : prakash@gmail.com");
});

app.get("/about", function(req , res){
    res.send("<p>myself prakash agarwal , i am parsuing cse graduation</p>")
});

app.get("/hobbies" , function(req,res){
    res.send("<ul><li>code</li><li>music</li></ul>");
});

app.listen(3000 , function(){
    console.log("server started on port 3000");
});


