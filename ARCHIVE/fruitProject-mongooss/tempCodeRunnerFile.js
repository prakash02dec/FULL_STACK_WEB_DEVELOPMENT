// const { MongoClient } = require("mongodb");
// // Replace the url string with your MongoDB deployment's connection string.
// const url = 'mongodb://127.0.0.1:27017';
// const client = new MongoClient(url);
// async function run() {
//   try {
//     await client.connect();
//     const database = client.db("fruitDB");
//     const collection = database.collection("fruits");
    
//     let result = await collection.insertMany([
//      {name : "apple" , score : 10},
//      { name : "mango" , score : 9},
//      { name : "banana" , score : 8}
//     ])

//     console.log(result.insertedCount);
//     console.log("connection successfull");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);