import express from "express";
import { dirname } from "path" ;
import { fileURLToPath } from "url";

import bodyParser from "body-parser";
import morgan from "morgan";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(morgan("combined")) ;
app.use(bodyParser.urlencoded({extended : true})) ;

app.get('/' , (req , res) =>{
  res.sendFile(__dirname +"/public/index.html") ;
});

var bandname= "" ;

function brandnamegenerator(req , res , next){
  bandname = req.body["street"] + req.body["pet"] ;
  next() ;
} 


app.use(brandnamegenerator) ; 

app.post("/submit", (req , res) =>{
  res.send(`<h1>Your brand name is :</h1> <h2>${bandname} 👌</h2>`) ;

});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
