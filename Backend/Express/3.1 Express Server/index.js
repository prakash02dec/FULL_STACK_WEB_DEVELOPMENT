import Express from "express" ;
const app = Express() ;
const port = 3000 ;

app.listen(port , () =>{
    console.log(`server running on port ${port}`) ;
}) ;