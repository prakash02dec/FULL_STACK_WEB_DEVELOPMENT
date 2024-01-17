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



const { MongoClient } = require("mongodb");
// Replace the url string with your MongoDB deployment's connection string.
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
async function run() {
  try {
    await client.connect();
    const database = client.db("fruitDB");
    const collections = database.collection("fruits");
    // query for movies that have a runtime less than 15 minutes
    const query = {score : { $gt : 9 } };
    const options = {
      // sort returned documents in ascending order by title (A->Z)
      // sort: { title: 1 },
      // Include only the `title` and `imdb` fields in each returned document
      projection: { name: 1 }
    };
    const cursor = collections.find(query, options);
    // print a message if no documents were found
    if ((await cursor.count()) === 0) {
      console.log("No documents found!");
    }
    // replace console.dir with your callback to access individual elements
    await cursor.forEach(console.dir);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);