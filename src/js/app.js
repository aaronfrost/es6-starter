//ARROW FUNCTIONS
//console.clear();
//
////Basics
//let fn1 = function(){return 2;};
//let fn2 = () => 2;
//
//console.log(fn1, fn2);

// - No 'function'
// - No 'return'
// - No curly braces

















//ARROW FUNCTIONS
//console.clear();

////Basics
//let fn1 = function(){return 2;};
//let fn2 = () => 2;
//
//console.log(fn1, fn2);

// - No 'function'
// - No 'return' (sometimes)
// - No curly braces
// - Parens for parameters

















//ARROW FUNCTIONS
//console.clear();
//
////Parameters
//let x;
//x = () => {};     //No parameters, MUST HAVE PARENS
//x = (val) => {};  //One parameter w/ parens, OPTIONAL
//x = val => {};    //One parameter w/o parens, OPTIONAL
//x = (y, z) => {}; //Two or more parameters, MUST HAVE PARENS
//x = y, z => {};   //Syntax Error: must wrap with parens when using multiple params
//console.log(x);

// - Questions?

















//ARROW FUNCTIONS
//console.clear();
//
////Method body declaration
//let square;
//square = (x) => x * x; //Body w/o braces
//square = x => { return x * x}; //Body w/ braces
//console.log(square);
//
//// - Questions?




















//ARROW FUNCTIONS
//console.clear();
//
////Instead of anonymous functions
//let nums = [1, 2, 3];
//let res = nums.map( n => n * n );
//console.log(res); //Logs [1, 4, 9]
//
//// - Questions?





















//ARROW FUNCTIONS
//console.clear();
//
////The REAL benefit
//var Widget = {
//  init: function() {
//    document.addEventListener("click", function(event) {
//      this.doSomething(event.type); // Why does this error?
//    }, false);
//  },
//
//  doSomething: function(type) {
//    console.log("Handling " + type  + " event");
//  }
//};
//Widget.init();
//// - Why does that error?
//// - What if we change the click handler to an arrow function
//// - Or use 'let me = this'











//ARROW FUNCTIONS
//console.clear();
//
////The REAL benefit
//var Widget = {
//  init: function() {
//    document.addEventListener("click", function(event) {
//      this.doSomething(event.type); // Why does this error?
//    }, false);
//  },
//
//  doSomething: function(type) {
//    console.log("Handling " + type  + " event");
//  }
//};
//Widget.init();
//// - Why does that error?
//// - What if we change the click handler to an arrow function
//// - Or use 'let me = this'
//// - arrow functions bind to the 'this' that existed when they were declared, not executed










//ARROW FUNCTIONS
//console.clear();
//
////Other things to note
//console.log( typeof ()=>{} );  //'function', weird
//
////Not a class function
//var Foo = function(){};
//var Bar = () => {};
//new Foo();
//new Bar(); //Bar is not a contructor
//
//// - It doesn't have the prototype, so it can't be used as a constructor function
//// - 6to5 allows this, but it shouldn't
















//ARROW FUNCTIONS
//console.clear();
//
////Can't alter 'this', so no .call or .apply
//
//let x = () => { console.log(this)};
//x.call({a: 1});
//
//// - It doesn't have the prototype, so it can't be used as a constructor function
//// - 6to5 allows this, but it shouldn't











































