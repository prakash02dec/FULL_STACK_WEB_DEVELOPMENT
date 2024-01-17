
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// posted from html form then we will always use urlencoded
app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.get("/bmiCalculator" , function(req , res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator",function(req,res){
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);
    var result = weight/(Math.pow(height,2));
    res.send("result of the calculator is " + result )
});

app.post("/",function(req, res){
    var num1 = Number(req.body.num1) ;
    var num2 = Number(req.body.num2) ;
    var result = num1 + num2 ;
    res.send("resut of the calculator is " + result );
});

app.listen(3000, function(){
    console.log("my calculator server started");
}); 