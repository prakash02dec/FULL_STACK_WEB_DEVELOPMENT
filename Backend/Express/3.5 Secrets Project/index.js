//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express  from "express";
import { dirname } from "path" ;
import { fileURLToPath } from "url";

import bodyParser from "body-parser";
import morgan from "morgan";

const app = express() ;
const port = 3000 ;
const __dirname = dirname(fileURLToPath(import.meta.url)) ;

app.use(morgan("combined")) ;
app.use(bodyParser.urlencoded({extended : true})) ;

var isAuthenticated = false ;

function passwordCheck(req , res , next){
    if(req.body["password"] === "ILoveProgramming")
        isAuthenticated = true ;
    else 
        isAuthenticated = false ;

    next() ;
}


app.use(passwordCheck) ;

app.post("/check" , (req , res)=>{
    if(isAuthenticated)
    res.sendFile(__dirname + "/public/secret.html") ;
    else 
    res.sendFile(__dirname + "/public/index.html" ) ;
});

app.get("/" , (req , res)=>{
    res.sendFile(__dirname + "/public/index.html") ;
});

app.listen(port , ()=>{
    console.log(`Server is running on ${port}`) ;
});