import express from "express" ;
const app = express() ;
const port = 3000 ;

app.get('/' , (req , res)=>{
    res.send("<h1>hello world</h1>") ;
}) ;

app.get('/about' , (req , res)=>{
    res.send("<h2>My name is prakash</h2>") ;
} ) ;

app.get('/contact' , (req , res )=>{
    res.send("<h1>8826288929</h1>")
}) ;

app.get('' , (req , res)=>{
    res.send("404 error") ;
})

app.listen(port , ()=>{
    console.log(`Server running on ${port}`)
})