//jshint esversion:6
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const saltRounds = 15;


const app = express()
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.render("home")
})

mongoose.connect("mongodb://127.0.0.1:27017/userDB");

const userSchema = new mongoose.Schema ({
    email: String,
    password: String
});


const User = mongoose.model("User", userSchema);


app.get("/login", function (req, res) {

    res.render("login")
})


app.get("/register", function (req, res) {
    res.render("register")
})

app.post("/register", function (req, res) {
    bcrypt.hash(req.body.password , saltRounds, function(err, hash) {
        const newUser = new User({
            email: req.body.username,
            password: hash
        });
        newUser.save(function (err) {
            if (err) {
                console.log(err);
            } else {
                res.render("secrets")
            }
        })
    });
    

})

app.post("/login", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ email: username }, function (err, founduser) {
        if (err) {
            console.log(err);
        } else {
            if (founduser) {
                bcrypt.compare(password, founduser.password, function(err, result) {
                    if(result === true){
                    res.render("secrets")
                    }
                });  
            }

        }
    });


})








app.listen(3000, function () {
    console.log("Server started on Port 3000")
})