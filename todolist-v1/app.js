const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname+ "/date.js" );

console.log(date)

let Items = [ "Buy Food" ,"Cook Food" , "Eat Food"]
let workItems = []

app.use(bodyParser.urlencoded({extended :true }))
app.use(express.static("public"))
app.set("view engine", "ejs")

app.get("/", function (req, res) {
    let day = date.getDate();
    res.render("list", { ListTitle: day , newListItems: Items })
})

app.post("/", function(req , res){
    console.log(req.body)
    let Item = req.body.newItem;
    if(req.body.list === "work"){
        workItems.push(Item);
        res.redirect("/work");
    }else{
    Items.push(Item)
    res.redirect("/")
    }
})
app.get("/work", function(req , res){
    res.render("list",{ListTitle:"work List" , newListItems: workItems})
})

app.get("/about", function(req , res){
   res.render("about");   
})

app.listen(3000, function () {
    console.log("server started on port 3000")
})

