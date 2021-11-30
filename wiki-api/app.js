const express = require("express");
const bodyParsher = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/wikiDB")

const app = express()

app.set("view engine" , "ejs");

app.use(bodyParsher.urlencoded({extended : true}))

app.use(express.static("public"));

const articleSchema = {
    title : String ,
    content : String ,
}

const Article = mongoose.model("articles", articleSchema);

app.rou

app.get("/articles",function(req , res){
    Article.find({}, function(err, foundArticle){
        if(!err)
        res.send(foundArticle);
        else
        res.send(err)
    });
})

app.delete("/articles", function(req , res){
    Article.deleteMany({},function(err){
        if(!err)
        res.send("successfully deleted all the articles");
        else
        res.send(err)
    })
})

app.post("/articles",function(req,res){
    const newArticle = new Article({
        title : req.body.title ,
        content : req.body.content
    });
    newArticle.save(function(err){
        if(err)
        res.send(err)
        else
        res.send("successfully added new article")
    });
    
})
 

app.listen(3000,function(){
    console.log("server started on port 3000");
})