/*
 Splat
 VARARGS
 params
 */
























//Triple dots in Method signature
//console.clear();

function myFunction(first, last, ...other){
  //code
}

























//This is how you use it
//console.clear();

//function foo(...bar){
//  console.log(bar.join(' ')); //Logs 'I can haz teh arguments'
//}
//foo('I', 'can', 'haz', 'teh', 'arguments');

























//WHO CARES!!? We already had 'arguments'
//console.clear();

//function foo(){
//  console.log(Array.prototype.join.call(arguments,' ')); //Logs 'I can haz teh arguments'
//}
//foo('I', 'can', 'haz', 'teh', 'arguments');

























//DIFFERENCES
//console.clear();
//function argumenty(name){
//  console.log(name, arguments); //arguments includes 'name' argument as well
//}
//function resty(name, ...other){ //other doesn't include 'name', only includes remaining arguments
//  console.log(name, other);
//}
//argumenty("Aaron", "Frost", "Salt Lake City", "Utah");
//resty("Aaron", "Frost", "Salt Lake City", "Utah");















//RULES
/*
  - One per function
  - Must be the last parameter
  - Can't use 'arguments'
  - No Default Values
 */























//ONE PER FUNCTION
//console.clear();
//
//function lotsOArgs(...first, ...second){
//  console.log("FIRST: " + first.join(" "));
//  console.log("SECOND: " + second.join(" "));
//}
//lotsOArgs("where", "does", "first", "stop", "and", "second", "begin");
// SyntaxError: Multiple RestParams Defined
// In 6to5, you get a compile error




















//MUST BE LAST PARAM
//console.clear();
//
//function doSomething(...bar, biz){
//  // your code
//}
//doSomething(1, 2, 3, 4); //Where does it cutoff for 'biz'
//doSomething(1);  //Does 1 go in 'bar' or 'biz'

// SyntaxError
// 6to5 compiler error



















//CAN'T USE 'arguments'
//console.clear();
//
//function doSomething(...bar){
//  console.log(arguments.length); // SyntaxError
//}
//doSomething(1, 2, 3);

//THIS WORKS IN 6to5





















//NO DEFAULT VALUES
//console.clear();
//
//function doSomething(...params=[1,2,3]){ //SyntaxError
//  console.log(params.join(“ “));
//}
//doSomething();

// In 6to5, it is a compiler error
