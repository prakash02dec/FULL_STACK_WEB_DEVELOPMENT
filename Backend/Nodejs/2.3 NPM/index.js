// const  generateName = require("sillyname") ;

import generateName from "sillyname"


var sillyName = generateName() ;
console.log(`My name is ${sillyName}`) ;


import superheroes from "superheroes"

var name = superheroes.random() ;

console.log(`I am ${name}!`)