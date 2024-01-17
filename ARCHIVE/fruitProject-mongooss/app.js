const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB")
// const url = 'mongodb://127.0.0.1:27017';

const fruitSchema = new mongoose.Schema({
  name : {
    type : String ,
    required : [true , "why no name"]
  } ,
  rating : {
    type : Number,
    min : 1 ,
    max : 10

  } ,
  review : String 
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit ({
  name : "apple",
  rating : 7 , 
  review : "Pretty solid as a fruit"
});

// fruit.save();

const peopleSchema = new mongoose.Schema({
  name :String ,
  age : Number ,
  favouriteFruit : fruitSchema
});

const mango = new Fruit ({
  name : "mango" ,
  rating : 9 , 
  review : "sweetest fruits"
})
mango.save();
const Person = mongoose.model("Person", peopleSchema);
const person = new Person({
  name : "she",
  age : 39 ,
  favouriteFruit : mango
})

// person.save();

const kiwi = new Fruit ({
  name : "kiwi",
  rating : 10 , 
  review : "the best fruit"
});

const orange = new Fruit ({
  name : "orange",
  rating : 4 , 
  review : "too weird"
});

const banana = new Fruit ({
  name : "banana",
  rating : 3 , 
  review : "acne peel"
});
const peech = new Fruit ({
  rating : 3 , 
  review : "unamed food"
});

// peech.save()
// Fruit.insertMany([kiwi , orange, banana ], function(err){
//   if(err){
//   console.log(err)}
//   else{ 
//   console.log("succefully saved all fruits to fruitDB");
//   }
// })

// Fruit.find(function(err, fruits){
//   if(err)
//   console.log(err);
//   else {
//   // console.log(fruits);
//   // mongoose.disconnect();
//     fruits.forEach(function(fruit){
//       console.log(fruit.name)
//     })
// }
// })


// Fruit.find()

// Fruit.updateOne({ _id : "61a3da6ace954baf8f30a97c"} , {name : "peech"} , function(err){
//   if(err)
//   console.log(err)
//   else
//   console.log("successully updated the document")
// });

// Fruit.deleteOne({_id : "61a3db5f9a1f28078e320c05"} , function(err){
//   if(err)
//   console.log(err)
//   else
//   console.log("successully deleted from the document")
// })