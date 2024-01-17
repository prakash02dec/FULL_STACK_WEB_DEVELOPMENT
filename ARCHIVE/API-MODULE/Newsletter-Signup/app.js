
const express = require("express")
const bodyParser = require("body-parser")
const https = require ("https")
const request = require("request")
const { response, json } = require("express")

const app = express()
 

app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static("public"))


app.get("/", function(req , res ){
    res.sendFile(__dirname + "/signup.html")
})

app.post("/" , function(req , res){
    const firstName = req.body.firstName;
    const lastName = req.body.lastName
    const email = req.body.email

    const data = {
        members : [
            {
            email_address : email ,
            status : "subscribed" ,
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }
        }
        ]
    }

    const jsondata = JSON.stringify(data)

    const url = "https://us20.api.mailchimp.com/3.0/lists/95f2f090ee"
    
    const options = {
        method : "POST",
        auth: "prakash:7310a3a1e82989d33ec43e48a80db822-us20"
    }

    const request = https.request(url, options , function(response){

            if(response.statusCode === 200){
                res.sendFile(__dirname+"/success.html");
            }else{
                res.sendFile(__dirname+"/failure.html");
            }

            response.on("data" , function(data){
            console.log(JSON.parse(data))
        })
    })
    request.write(jsondata)
    request.end()

    // console.log(firstName , lastName , email)

})

app.post("/failure" , function(req , res ){
    res.redirect("/");
})



app.listen(process.env.PORT || 3000, function(){
    console.log("server is running on port 3000")
})

// 7310a3a1e82989d33ec43e48a80db822-us20

//  95f2f090ee

// {
//     "email_address": "$user_email",
//     "status": "pending",
//     "merge_fields": {
//       "FNAME": "$user_fname",
//       "LNAME": "$user_lname",
//       "BIRTHDAY": "$user_birthday",
//       "ADDRESS": {
//              "addr1": "123 Freddie Ave",
//              "city": "Atlanta",
//              "state": "GA",
//              "zip": "12345",
  
//        }
//     }
//   }