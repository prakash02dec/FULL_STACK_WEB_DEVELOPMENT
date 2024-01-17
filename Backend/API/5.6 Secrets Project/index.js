// HINTS:
// 1. Import express and axios

// 2. Create an express app and set the port number.

// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.

import  Express  from "express";
import axios from "axios";

const app = Express() ;
const port = 3000 ;
const BearerToken = "23fca6d6-a09e-4d66-836f-59d6a2524908";

const API_URL = "https://secrets-api.appbrewery.com";

app.use(Express.static("public")) ;

const config = {
    headers : {
        Authorization: `Bearer ${BearerToken}` 
    }
}

app.get("/" , async (req , res)=>{
    try{    
        let response = await axios.get(API_URL +"/random" , config )
        let secret = response.data ;
        console.log(secret) ;
        res.render("index.ejs" , {
            secret : secret.secret ,
            user : secret.username ,
        }) ;
    }catch(error){
        console.log(error.response.data) ;
        res.status(500)
    }




}) ;


app.listen(port , () =>{
    console.log(`Server is listening on ${port}`) ;
});