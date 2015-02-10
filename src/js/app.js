/*
  DESTRUCTURING TOPICS

 - Destructuring Objects
 - Destructuring Arrays

 */

function getAddress(){
  return {
    city: "Salt Lake City",
    state: 'UT',
    zip: 84115
  };
}













//DESTRUCTURING OBJECTS

//Basics
//console.clear();
//
//let {city, state, zip} = getAddress();
//
//console.log(city);  //"Salt Lake City"
//console.log(state); //"UT"
//console.log(zip);   //84115

//Braces on the left side


















//DESTRUCTURING OBJECTS

//Alias
//console.clear();
//
//let {city:c, state:s, zip:z} = getAddress();
//
//console.log(c, s, z);  //"Salt Lake City", "UT", 84115
//console.log(city, state, zip);  //ReferenceError: City is not defined





















//DESTRUCTURING OBJECTS

//The Old Way
//console.clear();
//
//var person = {name: "Aaron", age: 35};
//displayPerson(person);
//
//function displayPerson(p){
//  var name = p.name;
//  var age = p.age;
//  console.log(name, age);
//  //do something with name and age to display them
//}
// - Doing it manually
// - First LOC, all functions















//DESTRUCTURING OBJECTS

//The New Way
//console.clear();
//
//var person = {name: "Aaron", age: 35};
//displayPerson(person);
//
//function displayPerson(p){
//  let {name, age} = p;
//  console.log(name, age);
//  //do something with name and age to display them
//}

// - One LOC
// - More Readable?















//DESTRUCTURING OBJECTS

//The New Way
//console.clear();
//
//var person = {name: "Aaron", age: 35};
//displayPerson(person);
//
//function displayPerson({name, age}){
//  console.log(name, age);
//  //do something with name and age to display them
//}

// - In the method signature
// - No LOC
// - Most Readable! (wait, there's even more)















//DESTRUCTURING OBJECTS

//In the Past
//console.clear();
//
//var person = {name: "Aaron", age: 35};
//displayPerson(person);
//
//function displayPerson(p){
//  var name = p.name || "Mr. Smith";
//  var age = p.age || 18;
//  console.log(name, age);
//  //do something with name and age to display them
//}

// - Old way was manual
// - Old way was required data-proofing














//DESTRUCTURING OBJECTS

//NEW AND IMPROVED
//console.clear();
//
//var person = {name: "Aaron", age: 35};
//displayPerson(person);
//
//function displayPerson({name = "Mr. Smith", age = 18}){
//  console.log(name, age);
//  //do something with name and age to display them
//}

// - In the method signature
// - Default values included
// - This is great!










//DESTRUCTURING OBJECTS

//Another Example
//console.clear();
//
//try{
//  throw "WorstError";
//}catch({type, message, filename, lineNumber}){
//  //do something with error
//}

// Fails in 6to5, but is legal



















//DESTRUCTURING OBJECTS

//Talk about the Pattern
//console.clear();
//
//var person = {name: "Aaron", age: 35};
//displayPerson(person);
//
//function displayPerson(p){
//  let {name, age} = p;
//  //do something with name and age to display them
//}

// - Curly braces to the left of = means destructure
// - Object on right MUST HAVE properties with names
// - IRREFUTABLE PATTERN
// - 6to5 should fail, but doesn't













//DESTRUCTURING OBJECTS

// Nested Destructuring
//console.clear();
//
//let person = {
//  name: "Aaron",
//  age: "35",
//  address: {
//    city: "Salt Lake City",
//    state: "UT",
//    zip: 84115
//  }
//};
//
//let {name, age, address: {city, state, zip}} = person;
//console.log(name, age, city, state, zip);

// - We don't have an 'address' variable
// - But we do have 'city', 'state' and 'zip'










//DESTRUCTURING OBJECTS

// Nested Destructuring w/ Alias
//console.clear();
//
//let person = {
//  name: "Aaron",
//  age: "35",
//  address: {
//    city: "Salt Lake City",
//    state: "UT",
//    zip: 84115
//  }
//};
//
//let {name, age, address: {city: c, state:s, zip: z}} = person;
//console.log(name, age, c, s, z);
// - We can alias in the nested pattern as well












//DESTRUCTURING ARRAYS

// Basic Example
//console.clear();
//
//let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
//let [first, second,,,,,,,,tenth] = nums;
//console.log(first, second, tenth);  //1, 2, 10

// - Braces on the left of the = means destructure an array
// - You can skip indexes


















//DESTRUCTURING ARRAYS

// SWAP VARIABLES
//console.clear();
//
////SWAPPING VARIABLES
//let a = 1, b = 2;
//
////The Old Way
//let temp = a, a = b, b = temp;
//
////The New Way
//[b, a] = [a, b];
//console.log(a, b);

// - No more third variable














//DESTRUCTURING ARRAYS

// SWAP VARIABLES
//console.clear();
//
//let nums = [1, 2, 3, 4];
//doSomething(nums);
//
//function doSomething([first, second, ...others]){
//  console.log(first);  //logs 1
//  console.log(second); //logs 2
//  console.log(others); //logs [3, 4]
//}

// - Do it straight in method signature















//DESTRUCTURING ARRAYS

// Nested Array Destructuring
//console.clear();
//
//let nums = [1, 2, [3, 4, [5, 6]]];
//
//let [one,,[three,,[,six]]] = nums;
//console.log(one, three, six);

// - Do it straight in method signature



















//DESTRUCTURING ARRAYS

// A A ron
console.clear();

let [x,y, ...z] = ['a', 'a', 'r', 'o', 'n']; // x='a'; y=['b', 'c']
console.log(x, y, z);

// - a a ron





















//FOR MORE INFO
//http://www.2ality.com/2015/01/es6-destructuring.html

