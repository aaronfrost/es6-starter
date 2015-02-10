webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(to5Runtime) {"use strict";
	
	/*
	  DESTRUCTURING TOPICS
	
	 - Destructuring Objects
	 - Destructuring Arrays
	
	 */
	
	function getAddress() {
	  return {
	    city: "Salt Lake City",
	    state: "UT",
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
	
	var _ref = ["a", "a", "r", "o", "n"];
	
	var x = _ref[0];
	var y = _ref[1];
	var z = to5Runtime.toArray(_ref).slice(2);
	
	// x='a'; y=['b', 'c']
	console.log(x, y, z);
	
	// - a a ron





















	//FOR MORE INFO
	//http://www.2ality.com/2015/01/es6-destructuring.html
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var global = {};
	
	(function(global){var to5Runtime=global.to5Runtime={};to5Runtime.inherits=function(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)subClass.__proto__=superClass};to5Runtime.defaults=function(obj,defaults){for(var key in defaults){if(obj[key]===undefined){obj[key]=defaults[key]}}return obj};to5Runtime.prototypeProperties=function(child,staticProps,instanceProps){if(staticProps)Object.defineProperties(child,staticProps);if(instanceProps)Object.defineProperties(child.prototype,instanceProps)};to5Runtime.applyConstructor=function(Constructor,args){var instance=Object.create(Constructor.prototype);var result=Constructor.apply(instance,args);return result!=null&&(typeof result=="object"||typeof result=="function")?result:instance};to5Runtime.taggedTemplateLiteral=function(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))};to5Runtime.interopRequire=function(obj){return obj&&(obj["default"]||obj)};to5Runtime.toArray=function(arr){return Array.isArray(arr)?arr:Array.from(arr)};to5Runtime.slicedToArray=function(arr,i){if(Array.isArray(arr)){return arr}else{var _arr=[];for(var _iterator=arr[Symbol.iterator](),_step;!(_step=_iterator.next()).done;){_arr.push(_step.value);if(i&&_arr.length===i)break}return _arr}};to5Runtime.objectWithoutProperties=function(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i]}return target};to5Runtime.hasOwn=Object.prototype.hasOwnProperty;to5Runtime.slice=Array.prototype.slice;to5Runtime.bind=Function.prototype.bind;to5Runtime.defineProperty=function(obj,key,value){return Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})};to5Runtime.interopRequireWildcard=function(obj){return obj&&obj.constructor===Object?obj:{"default":obj}};to5Runtime._extends=function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){target[key]=source[key]}}return target};to5Runtime.get=function get(object,property,receiver){var desc=Object.getOwnPropertyDescriptor(object,property);if(desc===undefined){var parent=Object.getPrototypeOf(object);if(parent===null){return undefined}else{return get(parent,property,receiver)}}else if("value"in desc&&desc.writable){return desc.value}else{var getter=desc.get;if(getter===undefined){return undefined}return getter.call(receiver)}}})(typeof global==="undefined"?self:global);
	
	/*** EXPORTS FROM exports-loader ***/
	module.exports = global.to5Runtime

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL34vNnRvNS9ydW50aW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBUUEsVUFBUyxVQUFVLEdBQUU7QUFDbkIsVUFBTztBQUNMLFNBQUksRUFBRSxnQkFBZ0I7QUFDdEIsVUFBSyxFQUFFLElBQUk7QUFDWCxRQUFHLEVBQUUsS0FBSztJQUNYLENBQUM7RUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb2RELFFBQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7WUFFRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7O0tBQXRDLENBQUM7S0FBQyxDQUFDO0tBQUssQ0FBQzs7O0FBQ2QsUUFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JlckI7QUFDQTs7QUFFQSxtQkFBa0Isb0NBQW9DLGtEQUFrRCxzREFBc0Qsa0dBQWtHLG1FQUFtRSxhQUFhLGlFQUFpRSxFQUFFLDZDQUE2QywyQ0FBMkMseUJBQXlCLHlCQUF5Qix3QkFBd0IsWUFBWSx5RUFBeUUsMERBQTBELHlFQUF5RSx1REFBdUQsa0RBQWtELDRDQUE0QywyRkFBMkYsdURBQXVELHNEQUFzRCxLQUFLLDBCQUEwQixJQUFJLHdDQUF3QyxtQ0FBbUMsaUNBQWlDLCtDQUErQyx5Q0FBeUMsdUJBQXVCLFdBQVcsS0FBSyxZQUFZLCtDQUErQywrQkFBK0IsRUFBRSx1QkFBdUIsNEJBQTRCLGNBQWMsc0RBQXNELGNBQWMsa0JBQWtCLCtCQUErQix5REFBeUQsaUJBQWlCLGVBQWUsa0RBQWtELHVDQUF1Qyx3Q0FBd0Msa0RBQWtELHNDQUFzQyw0REFBNEQsR0FBRyxnREFBZ0QsMENBQTBDLGdCQUFnQixxQ0FBcUMsWUFBWSxtQkFBbUIsS0FBSyx3QkFBd0IsdUJBQXVCLHlCQUF5QixlQUFlLHNEQUFzRCwwREFBMEQscUJBQXFCLHlDQUF5QyxrQkFBa0IsaUJBQWlCLEtBQUssc0NBQXNDLHVDQUF1QyxrQkFBa0IsS0FBSyxvQkFBb0IsdUJBQXVCLGlCQUFpQiwrQkFBK0I7O0FBRTFwRjtBQUNBLG1DIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgREVTVFJVQ1RVUklORyBUT1BJQ1NcblxuIC0gRGVzdHJ1Y3R1cmluZyBPYmplY3RzXG4gLSBEZXN0cnVjdHVyaW5nIEFycmF5c1xuXG4gKi9cblxuZnVuY3Rpb24gZ2V0QWRkcmVzcygpe1xuICByZXR1cm4ge1xuICAgIGNpdHk6IFwiU2FsdCBMYWtlIENpdHlcIixcbiAgICBzdGF0ZTogJ1VUJyxcbiAgICB6aXA6IDg0MTE1XG4gIH07XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vREVTVFJVQ1RVUklORyBPQkpFQ1RTXG5cbi8vQmFzaWNzXG4vL2NvbnNvbGUuY2xlYXIoKTtcbi8vXG4vL2xldCB7Y2l0eSwgc3RhdGUsIHppcH0gPSBnZXRBZGRyZXNzKCk7XG4vL1xuLy9jb25zb2xlLmxvZyhjaXR5KTsgIC8vXCJTYWx0IExha2UgQ2l0eVwiXG4vL2NvbnNvbGUubG9nKHN0YXRlKTsgLy9cIlVUXCJcbi8vY29uc29sZS5sb2coemlwKTsgICAvLzg0MTE1XG5cbi8vQnJhY2VzIG9uIHRoZSBsZWZ0IHNpZGVcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vREVTVFJVQ1RVUklORyBPQkpFQ1RTXG5cbi8vQWxpYXNcbi8vY29uc29sZS5jbGVhcigpO1xuLy9cbi8vbGV0IHtjaXR5OmMsIHN0YXRlOnMsIHppcDp6fSA9IGdldEFkZHJlc3MoKTtcbi8vXG4vL2NvbnNvbGUubG9nKGMsIHMsIHopOyAgLy9cIlNhbHQgTGFrZSBDaXR5XCIsIFwiVVRcIiwgODQxMTVcbi8vY29uc29sZS5sb2coY2l0eSwgc3RhdGUsIHppcCk7ICAvL1JlZmVyZW5jZUVycm9yOiBDaXR5IGlzIG5vdCBkZWZpbmVkXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vL0RFU1RSVUNUVVJJTkcgT0JKRUNUU1xuXG4vL1RoZSBPbGQgV2F5XG4vL2NvbnNvbGUuY2xlYXIoKTtcbi8vXG4vL3ZhciBwZXJzb24gPSB7bmFtZTogXCJBYXJvblwiLCBhZ2U6IDM1fTtcbi8vZGlzcGxheVBlcnNvbihwZXJzb24pO1xuLy9cbi8vZnVuY3Rpb24gZGlzcGxheVBlcnNvbihwKXtcbi8vICB2YXIgbmFtZSA9IHAubmFtZTtcbi8vICB2YXIgYWdlID0gcC5hZ2U7XG4vLyAgY29uc29sZS5sb2cobmFtZSwgYWdlKTtcbi8vICAvL2RvIHNvbWV0aGluZyB3aXRoIG5hbWUgYW5kIGFnZSB0byBkaXNwbGF5IHRoZW1cbi8vfVxuLy8gLSBEb2luZyBpdCBtYW51YWxseVxuLy8gLSBGaXJzdCBMT0MsIGFsbCBmdW5jdGlvbnNcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vREVTVFJVQ1RVUklORyBPQkpFQ1RTXG5cbi8vVGhlIE5ldyBXYXlcbi8vY29uc29sZS5jbGVhcigpO1xuLy9cbi8vdmFyIHBlcnNvbiA9IHtuYW1lOiBcIkFhcm9uXCIsIGFnZTogMzV9O1xuLy9kaXNwbGF5UGVyc29uKHBlcnNvbik7XG4vL1xuLy9mdW5jdGlvbiBkaXNwbGF5UGVyc29uKHApe1xuLy8gIGxldCB7bmFtZSwgYWdlfSA9IHA7XG4vLyAgY29uc29sZS5sb2cobmFtZSwgYWdlKTtcbi8vICAvL2RvIHNvbWV0aGluZyB3aXRoIG5hbWUgYW5kIGFnZSB0byBkaXNwbGF5IHRoZW1cbi8vfVxuXG4vLyAtIE9uZSBMT0Ncbi8vIC0gTW9yZSBSZWFkYWJsZT9cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vREVTVFJVQ1RVUklORyBPQkpFQ1RTXG5cbi8vVGhlIE5ldyBXYXlcbi8vY29uc29sZS5jbGVhcigpO1xuLy9cbi8vdmFyIHBlcnNvbiA9IHtuYW1lOiBcIkFhcm9uXCIsIGFnZTogMzV9O1xuLy9kaXNwbGF5UGVyc29uKHBlcnNvbik7XG4vL1xuLy9mdW5jdGlvbiBkaXNwbGF5UGVyc29uKHtuYW1lLCBhZ2V9KXtcbi8vICBjb25zb2xlLmxvZyhuYW1lLCBhZ2UpO1xuLy8gIC8vZG8gc29tZXRoaW5nIHdpdGggbmFtZSBhbmQgYWdlIHRvIGRpc3BsYXkgdGhlbVxuLy99XG5cbi8vIC0gSW4gdGhlIG1ldGhvZCBzaWduYXR1cmVcbi8vIC0gTm8gTE9DXG4vLyAtIE1vc3QgUmVhZGFibGUhICh3YWl0LCB0aGVyZSdzIGV2ZW4gbW9yZSlcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vREVTVFJVQ1RVUklORyBPQkpFQ1RTXG5cbi8vSW4gdGhlIFBhc3Rcbi8vY29uc29sZS5jbGVhcigpO1xuLy9cbi8vdmFyIHBlcnNvbiA9IHtuYW1lOiBcIkFhcm9uXCIsIGFnZTogMzV9O1xuLy9kaXNwbGF5UGVyc29uKHBlcnNvbik7XG4vL1xuLy9mdW5jdGlvbiBkaXNwbGF5UGVyc29uKHApe1xuLy8gIHZhciBuYW1lID0gcC5uYW1lIHx8IFwiTXIuIFNtaXRoXCI7XG4vLyAgdmFyIGFnZSA9IHAuYWdlIHx8IDE4O1xuLy8gIGNvbnNvbGUubG9nKG5hbWUsIGFnZSk7XG4vLyAgLy9kbyBzb21ldGhpbmcgd2l0aCBuYW1lIGFuZCBhZ2UgdG8gZGlzcGxheSB0aGVtXG4vL31cblxuLy8gLSBPbGQgd2F5IHdhcyBtYW51YWxcbi8vIC0gT2xkIHdheSB3YXMgcmVxdWlyZWQgZGF0YS1wcm9vZmluZ1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vREVTVFJVQ1RVUklORyBPQkpFQ1RTXG5cbi8vTkVXIEFORCBJTVBST1ZFRFxuLy9jb25zb2xlLmNsZWFyKCk7XG4vL1xuLy92YXIgcGVyc29uID0ge25hbWU6IFwiQWFyb25cIiwgYWdlOiAzNX07XG4vL2Rpc3BsYXlQZXJzb24ocGVyc29uKTtcbi8vXG4vL2Z1bmN0aW9uIGRpc3BsYXlQZXJzb24oe25hbWUgPSBcIk1yLiBTbWl0aFwiLCBhZ2UgPSAxOH0pe1xuLy8gIGNvbnNvbGUubG9nKG5hbWUsIGFnZSk7XG4vLyAgLy9kbyBzb21ldGhpbmcgd2l0aCBuYW1lIGFuZCBhZ2UgdG8gZGlzcGxheSB0aGVtXG4vL31cblxuLy8gLSBJbiB0aGUgbWV0aG9kIHNpZ25hdHVyZVxuLy8gLSBEZWZhdWx0IHZhbHVlcyBpbmNsdWRlZFxuLy8gLSBUaGlzIGlzIGdyZWF0IVxuXG5cblxuXG5cblxuXG5cblxuXG4vL0RFU1RSVUNUVVJJTkcgT0JKRUNUU1xuXG4vL0Fub3RoZXIgRXhhbXBsZVxuLy9jb25zb2xlLmNsZWFyKCk7XG4vL1xuLy90cnl7XG4vLyAgdGhyb3cgXCJXb3JzdEVycm9yXCI7XG4vL31jYXRjaCh7dHlwZSwgbWVzc2FnZSwgZmlsZW5hbWUsIGxpbmVOdW1iZXJ9KXtcbi8vICAvL2RvIHNvbWV0aGluZyB3aXRoIGVycm9yXG4vL31cblxuLy8gRmFpbHMgaW4gNnRvNSwgYnV0IGlzIGxlZ2FsXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vREVTVFJVQ1RVUklORyBPQkpFQ1RTXG5cbi8vVGFsayBhYm91dCB0aGUgUGF0dGVyblxuLy9jb25zb2xlLmNsZWFyKCk7XG4vL1xuLy92YXIgcGVyc29uID0ge25hbWU6IFwiQWFyb25cIiwgYWdlOiAzNX07XG4vL2Rpc3BsYXlQZXJzb24ocGVyc29uKTtcbi8vXG4vL2Z1bmN0aW9uIGRpc3BsYXlQZXJzb24ocCl7XG4vLyAgbGV0IHtuYW1lLCBhZ2V9ID0gcDtcbi8vICAvL2RvIHNvbWV0aGluZyB3aXRoIG5hbWUgYW5kIGFnZSB0byBkaXNwbGF5IHRoZW1cbi8vfVxuXG4vLyAtIEN1cmx5IGJyYWNlcyB0byB0aGUgbGVmdCBvZiA9IG1lYW5zIGRlc3RydWN0dXJlXG4vLyAtIE9iamVjdCBvbiByaWdodCBNVVNUIEhBVkUgcHJvcGVydGllcyB3aXRoIG5hbWVzXG4vLyAtIElSUkVGVVRBQkxFIFBBVFRFUk5cbi8vIC0gNnRvNSBzaG91bGQgZmFpbCwgYnV0IGRvZXNuJ3RcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy9ERVNUUlVDVFVSSU5HIE9CSkVDVFNcblxuLy8gTmVzdGVkIERlc3RydWN0dXJpbmdcbi8vY29uc29sZS5jbGVhcigpO1xuLy9cbi8vbGV0IHBlcnNvbiA9IHtcbi8vICBuYW1lOiBcIkFhcm9uXCIsXG4vLyAgYWdlOiBcIjM1XCIsXG4vLyAgYWRkcmVzczoge1xuLy8gICAgY2l0eTogXCJTYWx0IExha2UgQ2l0eVwiLFxuLy8gICAgc3RhdGU6IFwiVVRcIixcbi8vICAgIHppcDogODQxMTVcbi8vICB9XG4vL307XG4vL1xuLy9sZXQge25hbWUsIGFnZSwgYWRkcmVzczoge2NpdHksIHN0YXRlLCB6aXB9fSA9IHBlcnNvbjtcbi8vY29uc29sZS5sb2cobmFtZSwgYWdlLCBjaXR5LCBzdGF0ZSwgemlwKTtcblxuLy8gLSBXZSBkb24ndCBoYXZlIGFuICdhZGRyZXNzJyB2YXJpYWJsZVxuLy8gLSBCdXQgd2UgZG8gaGF2ZSAnY2l0eScsICdzdGF0ZScgYW5kICd6aXAnXG5cblxuXG5cblxuXG5cblxuXG5cbi8vREVTVFJVQ1RVUklORyBPQkpFQ1RTXG5cbi8vIE5lc3RlZCBEZXN0cnVjdHVyaW5nIHcvIEFsaWFzXG4vL2NvbnNvbGUuY2xlYXIoKTtcbi8vXG4vL2xldCBwZXJzb24gPSB7XG4vLyAgbmFtZTogXCJBYXJvblwiLFxuLy8gIGFnZTogXCIzNVwiLFxuLy8gIGFkZHJlc3M6IHtcbi8vICAgIGNpdHk6IFwiU2FsdCBMYWtlIENpdHlcIixcbi8vICAgIHN0YXRlOiBcIlVUXCIsXG4vLyAgICB6aXA6IDg0MTE1XG4vLyAgfVxuLy99O1xuLy9cbi8vbGV0IHtuYW1lLCBhZ2UsIGFkZHJlc3M6IHtjaXR5OiBjLCBzdGF0ZTpzLCB6aXA6IHp9fSA9IHBlcnNvbjtcbi8vY29uc29sZS5sb2cobmFtZSwgYWdlLCBjLCBzLCB6KTtcbi8vIC0gV2UgY2FuIGFsaWFzIGluIHRoZSBuZXN0ZWQgcGF0dGVybiBhcyB3ZWxsXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vL0RFU1RSVUNUVVJJTkcgQVJSQVlTXG5cbi8vIEJhc2ljIEV4YW1wbGVcbi8vY29uc29sZS5jbGVhcigpO1xuLy9cbi8vbGV0IG51bXMgPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTBdO1xuLy9cbi8vbGV0IFtmaXJzdCwgc2Vjb25kLCwsLCwsLCx0ZW50aF0gPSBudW1zO1xuLy9jb25zb2xlLmxvZyhmaXJzdCwgc2Vjb25kLCB0ZW50aCk7ICAvLzEsIDIsIDEwXG5cbi8vIC0gQnJhY2VzIG9uIHRoZSBsZWZ0IG9mIHRoZSA9IG1lYW5zIGRlc3RydWN0dXJlIGFuIGFycmF5XG4vLyAtIFlvdSBjYW4gc2tpcCBpbmRleGVzXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vL0RFU1RSVUNUVVJJTkcgQVJSQVlTXG5cbi8vIFNXQVAgVkFSSUFCTEVTXG4vL2NvbnNvbGUuY2xlYXIoKTtcbi8vXG4vLy8vU1dBUFBJTkcgVkFSSUFCTEVTXG4vL2xldCBhID0gMSwgYiA9IDI7XG4vL1xuLy8vL1RoZSBPbGQgV2F5XG4vL2xldCB0ZW1wID0gYSwgYSA9IGIsIGIgPSB0ZW1wO1xuLy9cbi8vLy9UaGUgTmV3IFdheVxuLy9bYiwgYV0gPSBbYSwgYl07XG4vL2NvbnNvbGUubG9nKGEsIGIpO1xuXG4vLyAtIE5vIG1vcmUgdGhpcmQgdmFyaWFibGVcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vL0RFU1RSVUNUVVJJTkcgQVJSQVlTXG5cbi8vIFNXQVAgVkFSSUFCTEVTXG4vL2NvbnNvbGUuY2xlYXIoKTtcbi8vXG4vL2xldCBudW1zID0gWzEsIDIsIDMsIDRdO1xuLy9kb1NvbWV0aGluZyhudW1zKTtcbi8vXG4vL2Z1bmN0aW9uIGRvU29tZXRoaW5nKFtmaXJzdCwgc2Vjb25kLCAuLi5vdGhlcnNdKXtcbi8vICBjb25zb2xlLmxvZyhmaXJzdCk7ICAvL2xvZ3MgMVxuLy8gIGNvbnNvbGUubG9nKHNlY29uZCk7IC8vbG9ncyAyXG4vLyAgY29uc29sZS5sb2cob3RoZXJzKTsgLy9sb2dzIFszLCA0XVxuLy99XG5cbi8vIC0gRG8gaXQgc3RyYWlnaHQgaW4gbWV0aG9kIHNpZ25hdHVyZVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy9ERVNUUlVDVFVSSU5HIEFSUkFZU1xuXG4vLyBOZXN0ZWQgQXJyYXkgRGVzdHJ1Y3R1cmluZ1xuLy9jb25zb2xlLmNsZWFyKCk7XG4vL1xuLy9sZXQgbnVtcyA9IFsxLCAyLCBbMywgNCwgWzUsIDZdXV07XG4vL1xuLy9sZXQgW29uZSwsW3RocmVlLCxbLHNpeF1dXSA9IG51bXM7XG4vL2NvbnNvbGUubG9nKG9uZSwgdGhyZWUsIHNpeCk7XG5cbi8vIC0gRG8gaXQgc3RyYWlnaHQgaW4gbWV0aG9kIHNpZ25hdHVyZVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vL0RFU1RSVUNUVVJJTkcgQVJSQVlTXG5cbi8vIEEgQSByb25cbmNvbnNvbGUuY2xlYXIoKTtcblxubGV0IFt4LHksIC4uLnpdID0gWydhJywgJ2EnLCAncicsICdvJywgJ24nXTsgLy8geD0nYSc7IHk9WydiJywgJ2MnXVxuY29uc29sZS5sb2coeCwgeSwgeik7XG5cbi8vIC0gYSBhIHJvblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy9GT1IgTU9SRSBJTkZPXG4vL2h0dHA6Ly93d3cuMmFsaXR5LmNvbS8yMDE1LzAxL2VzNi1kZXN0cnVjdHVyaW5nLmh0bWxcblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvYXBwLmpzXG4gKiovIiwiLyoqKiBJTVBPUlRTIEZST00gaW1wb3J0cy1sb2FkZXIgKioqL1xudmFyIGdsb2JhbCA9IHt9O1xuXG4oZnVuY3Rpb24oZ2xvYmFsKXt2YXIgdG81UnVudGltZT1nbG9iYWwudG81UnVudGltZT17fTt0bzVSdW50aW1lLmluaGVyaXRzPWZ1bmN0aW9uKHN1YkNsYXNzLHN1cGVyQ2xhc3Mpe2lmKHR5cGVvZiBzdXBlckNsYXNzIT09XCJmdW5jdGlvblwiJiZzdXBlckNsYXNzIT09bnVsbCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIrdHlwZW9mIHN1cGVyQ2xhc3MpfXN1YkNsYXNzLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MmJnN1cGVyQ2xhc3MucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6c3ViQ2xhc3MsZW51bWVyYWJsZTpmYWxzZSx3cml0YWJsZTp0cnVlLGNvbmZpZ3VyYWJsZTp0cnVlfX0pO2lmKHN1cGVyQ2xhc3Mpc3ViQ2xhc3MuX19wcm90b19fPXN1cGVyQ2xhc3N9O3RvNVJ1bnRpbWUuZGVmYXVsdHM9ZnVuY3Rpb24ob2JqLGRlZmF1bHRzKXtmb3IodmFyIGtleSBpbiBkZWZhdWx0cyl7aWYob2JqW2tleV09PT11bmRlZmluZWQpe29ialtrZXldPWRlZmF1bHRzW2tleV19fXJldHVybiBvYmp9O3RvNVJ1bnRpbWUucHJvdG90eXBlUHJvcGVydGllcz1mdW5jdGlvbihjaGlsZCxzdGF0aWNQcm9wcyxpbnN0YW5jZVByb3BzKXtpZihzdGF0aWNQcm9wcylPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjaGlsZCxzdGF0aWNQcm9wcyk7aWYoaW5zdGFuY2VQcm9wcylPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjaGlsZC5wcm90b3R5cGUsaW5zdGFuY2VQcm9wcyl9O3RvNVJ1bnRpbWUuYXBwbHlDb25zdHJ1Y3Rvcj1mdW5jdGlvbihDb25zdHJ1Y3RvcixhcmdzKXt2YXIgaW5zdGFuY2U9T2JqZWN0LmNyZWF0ZShDb25zdHJ1Y3Rvci5wcm90b3R5cGUpO3ZhciByZXN1bHQ9Q29uc3RydWN0b3IuYXBwbHkoaW5zdGFuY2UsYXJncyk7cmV0dXJuIHJlc3VsdCE9bnVsbCYmKHR5cGVvZiByZXN1bHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiByZXN1bHQ9PVwiZnVuY3Rpb25cIik/cmVzdWx0Omluc3RhbmNlfTt0bzVSdW50aW1lLnRhZ2dlZFRlbXBsYXRlTGl0ZXJhbD1mdW5jdGlvbihzdHJpbmdzLHJhdyl7cmV0dXJuIE9iamVjdC5mcmVlemUoT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoc3RyaW5ncyx7cmF3Ont2YWx1ZTpPYmplY3QuZnJlZXplKHJhdyl9fSkpfTt0bzVSdW50aW1lLmludGVyb3BSZXF1aXJlPWZ1bmN0aW9uKG9iail7cmV0dXJuIG9iaiYmKG9ialtcImRlZmF1bHRcIl18fG9iail9O3RvNVJ1bnRpbWUudG9BcnJheT1mdW5jdGlvbihhcnIpe3JldHVybiBBcnJheS5pc0FycmF5KGFycik/YXJyOkFycmF5LmZyb20oYXJyKX07dG81UnVudGltZS5zbGljZWRUb0FycmF5PWZ1bmN0aW9uKGFycixpKXtpZihBcnJheS5pc0FycmF5KGFycikpe3JldHVybiBhcnJ9ZWxzZXt2YXIgX2Fycj1bXTtmb3IodmFyIF9pdGVyYXRvcj1hcnJbU3ltYm9sLml0ZXJhdG9yXSgpLF9zdGVwOyEoX3N0ZXA9X2l0ZXJhdG9yLm5leHQoKSkuZG9uZTspe19hcnIucHVzaChfc3RlcC52YWx1ZSk7aWYoaSYmX2Fyci5sZW5ndGg9PT1pKWJyZWFrfXJldHVybiBfYXJyfX07dG81UnVudGltZS5vYmplY3RXaXRob3V0UHJvcGVydGllcz1mdW5jdGlvbihvYmosa2V5cyl7dmFyIHRhcmdldD17fTtmb3IodmFyIGkgaW4gb2JqKXtpZihrZXlzLmluZGV4T2YoaSk+PTApY29udGludWU7aWYoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosaSkpY29udGludWU7dGFyZ2V0W2ldPW9ialtpXX1yZXR1cm4gdGFyZ2V0fTt0bzVSdW50aW1lLmhhc093bj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3RvNVJ1bnRpbWUuc2xpY2U9QXJyYXkucHJvdG90eXBlLnNsaWNlO3RvNVJ1bnRpbWUuYmluZD1GdW5jdGlvbi5wcm90b3R5cGUuYmluZDt0bzVSdW50aW1lLmRlZmluZVByb3BlcnR5PWZ1bmN0aW9uKG9iaixrZXksdmFsdWUpe3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLGtleSx7dmFsdWU6dmFsdWUsZW51bWVyYWJsZTp0cnVlLGNvbmZpZ3VyYWJsZTp0cnVlLHdyaXRhYmxlOnRydWV9KX07dG81UnVudGltZS5pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPWZ1bmN0aW9uKG9iail7cmV0dXJuIG9iaiYmb2JqLmNvbnN0cnVjdG9yPT09T2JqZWN0P29iajp7XCJkZWZhdWx0XCI6b2JqfX07dG81UnVudGltZS5fZXh0ZW5kcz1mdW5jdGlvbih0YXJnZXQpe2Zvcih2YXIgaT0xO2k8YXJndW1lbnRzLmxlbmd0aDtpKyspe3ZhciBzb3VyY2U9YXJndW1lbnRzW2ldO2Zvcih2YXIga2V5IGluIHNvdXJjZSl7dGFyZ2V0W2tleV09c291cmNlW2tleV19fXJldHVybiB0YXJnZXR9O3RvNVJ1bnRpbWUuZ2V0PWZ1bmN0aW9uIGdldChvYmplY3QscHJvcGVydHkscmVjZWl2ZXIpe3ZhciBkZXNjPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LHByb3BlcnR5KTtpZihkZXNjPT09dW5kZWZpbmVkKXt2YXIgcGFyZW50PU9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpO2lmKHBhcmVudD09PW51bGwpe3JldHVybiB1bmRlZmluZWR9ZWxzZXtyZXR1cm4gZ2V0KHBhcmVudCxwcm9wZXJ0eSxyZWNlaXZlcil9fWVsc2UgaWYoXCJ2YWx1ZVwiaW4gZGVzYyYmZGVzYy53cml0YWJsZSl7cmV0dXJuIGRlc2MudmFsdWV9ZWxzZXt2YXIgZ2V0dGVyPWRlc2MuZ2V0O2lmKGdldHRlcj09PXVuZGVmaW5lZCl7cmV0dXJuIHVuZGVmaW5lZH1yZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpfX19KSh0eXBlb2YgZ2xvYmFsPT09XCJ1bmRlZmluZWRcIj9zZWxmOmdsb2JhbCk7XG5cbi8qKiogRVhQT1JUUyBGUk9NIGV4cG9ydHMtbG9hZGVyICoqKi9cbm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsLnRvNVJ1bnRpbWVcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pbXBvcnRzLWxvYWRlcj9nbG9iYWw9Pnt9IS4vfi9leHBvcnRzLWxvYWRlcj9nbG9iYWwudG81UnVudGltZSEuL34vNnRvNS9ydW50aW1lLmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIiLCJmaWxlIjoiYXBwLmpzIn0=