const express = require("express");
const bodyParsher = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/wikiDB")

const app = express()

app.set("view engine", "ejs");

app.use(bodyParsher.urlencoded({ extended: true }))

app.use(express.static("public"));

const articleSchema = {
    title: String,
    content: String,
}

const Article = mongoose.model("articles", articleSchema);

app.route("/articles")
    .get(function (req, res) {
        Article.find({}, function (err, foundArticles) {
            if (!err)
                res.send(foundArticles);
            else
                res.send(err)
        });
    })
    .post(function (req, res) {
        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        });
        newArticle.save(function (err) {
            if (err)
                res.send(err)
            else
                res.send("successfully added new article")
        });

    })
    .delete(function (req, res) {
        Article.deleteMany({}, function (err) {
            if (!err)
                res.send("successfully deleted all the articles");
            else
                res.send(err)
        })
    });

app.route("/articles/:title")
    .get(function (req, res) {
        const articleTitle = req.params.title;
        Article.findOne({ title: articleTitle }, function (err, foundArticle) {
            if (!err)
                res.send(foundArticle)
            else
                res.send(err)
        })
    })

    .put(function (req, res) {
        const articleTitle = req.params.title;
        Article.updateOne(
            { title: articleTitle },
            {
                title: req.body.title,
                content: req.body.content
            }, function (err) {
                if (err)
                    res.send(err)
                else
                    res.send("successfully updated article")
            })
    })

    .patch(function (req, res) {
        const articleTitle = req.params.title;
        Article.updateOne(
            { title: articleTitle },
            { $set: req.body },
            function (err) {
                if (err)
                    res.send(err)
                else
                    res.send("successfully updated article")
            });
    })

    .delete(function(req , res){
        const articleTitle = req.params.title;
        Article.deleteOne({title : articleTitle}, function (err) {
            if (!err)
                res.send("successfully deleted the articles");
            else
                res.send(err)
        })
    })

app.listen(3000, function () {
    console.log("server started on port 3000");
})