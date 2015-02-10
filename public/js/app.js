webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/*
	 Splat
	 VARARGS
	 params
	 */
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//Triple dots in Method signature
	//console.clear();
	
	function myFunction(first, last) {
	  for (var _len = arguments.length, other = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    other[_key - 2] = arguments[_key];
	  }
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
	//code

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBLFVBQVMsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQVc7cUNBQU4sS0FBSztBQUFMLFVBQUs7O0VBRXhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gU3BsYXRcbiBWQVJBUkdTXG4gcGFyYW1zXG4gKi9cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vVHJpcGxlIGRvdHMgaW4gTWV0aG9kIHNpZ25hdHVyZVxuLy9jb25zb2xlLmNsZWFyKCk7XG5cbmZ1bmN0aW9uIG15RnVuY3Rpb24oZmlyc3QsIGxhc3QsIC4uLm90aGVyKXtcbiAgLy9jb2RlXG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vVGhpcyBpcyBob3cgeW91IHVzZSBpdFxuLy9jb25zb2xlLmNsZWFyKCk7XG5cbi8vZnVuY3Rpb24gZm9vKC4uLmJhcil7XG4vLyAgY29uc29sZS5sb2coYmFyLmpvaW4oJyAnKSk7IC8vTG9ncyAnSSBjYW4gaGF6IHRlaCBhcmd1bWVudHMnXG4vL31cbi8vZm9vKCdJJywgJ2NhbicsICdoYXonLCAndGVoJywgJ2FyZ3VtZW50cycpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vL1dITyBDQVJFUyEhPyBXZSBhbHJlYWR5IGhhZCAnYXJndW1lbnRzJ1xuLy9jb25zb2xlLmNsZWFyKCk7XG5cbi8vZnVuY3Rpb24gZm9vKCl7XG4vLyAgY29uc29sZS5sb2coQXJyYXkucHJvdG90eXBlLmpvaW4uY2FsbChhcmd1bWVudHMsJyAnKSk7IC8vTG9ncyAnSSBjYW4gaGF6IHRlaCBhcmd1bWVudHMnXG4vL31cbi8vZm9vKCdJJywgJ2NhbicsICdoYXonLCAndGVoJywgJ2FyZ3VtZW50cycpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vL0RJRkZFUkVOQ0VTXG4vL2NvbnNvbGUuY2xlYXIoKTtcbi8vZnVuY3Rpb24gYXJndW1lbnR5KG5hbWUpe1xuLy8gIGNvbnNvbGUubG9nKG5hbWUsIGFyZ3VtZW50cyk7IC8vYXJndW1lbnRzIGluY2x1ZGVzICduYW1lJyBhcmd1bWVudCBhcyB3ZWxsXG4vL31cbi8vZnVuY3Rpb24gcmVzdHkobmFtZSwgLi4ub3RoZXIpeyAvL290aGVyIGRvZXNuJ3QgaW5jbHVkZSAnbmFtZScsIG9ubHkgaW5jbHVkZXMgcmVtYWluaW5nIGFyZ3VtZW50c1xuLy8gIGNvbnNvbGUubG9nKG5hbWUsIG90aGVyKTtcbi8vfVxuLy9hcmd1bWVudHkoXCJBYXJvblwiLCBcIkZyb3N0XCIsIFwiU2FsdCBMYWtlIENpdHlcIiwgXCJVdGFoXCIpO1xuLy9yZXN0eShcIkFhcm9uXCIsIFwiRnJvc3RcIiwgXCJTYWx0IExha2UgQ2l0eVwiLCBcIlV0YWhcIik7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vL1JVTEVTXG4vKlxuICAtIE9uZSBwZXIgZnVuY3Rpb25cbiAgLSBNdXN0IGJlIHRoZSBsYXN0IHBhcmFtZXRlclxuICAtIENhbid0IHVzZSAnYXJndW1lbnRzJ1xuICAtIE5vIERlZmF1bHQgVmFsdWVzXG4gKi9cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vL09ORSBQRVIgRlVOQ1RJT05cbi8vY29uc29sZS5jbGVhcigpO1xuLy9cbi8vZnVuY3Rpb24gbG90c09BcmdzKC4uLmZpcnN0LCAuLi5zZWNvbmQpe1xuLy8gIGNvbnNvbGUubG9nKFwiRklSU1Q6IFwiICsgZmlyc3Quam9pbihcIiBcIikpO1xuLy8gIGNvbnNvbGUubG9nKFwiU0VDT05EOiBcIiArIHNlY29uZC5qb2luKFwiIFwiKSk7XG4vL31cbi8vbG90c09BcmdzKFwid2hlcmVcIiwgXCJkb2VzXCIsIFwiZmlyc3RcIiwgXCJzdG9wXCIsIFwiYW5kXCIsIFwic2Vjb25kXCIsIFwiYmVnaW5cIik7XG4vLyBTeW50YXhFcnJvcjogTXVsdGlwbGUgUmVzdFBhcmFtcyBEZWZpbmVkXG4vLyBJbiA2dG81LCB5b3UgZ2V0IGEgY29tcGlsZSBlcnJvclxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vTVVTVCBCRSBMQVNUIFBBUkFNXG4vL2NvbnNvbGUuY2xlYXIoKTtcbi8vXG4vL2Z1bmN0aW9uIGRvU29tZXRoaW5nKC4uLmJhciwgYml6KXtcbi8vICAvLyB5b3VyIGNvZGVcbi8vfVxuLy9kb1NvbWV0aGluZygxLCAyLCAzLCA0KTsgLy9XaGVyZSBkb2VzIGl0IGN1dG9mZiBmb3IgJ2Jpeidcbi8vZG9Tb21ldGhpbmcoMSk7ICAvL0RvZXMgMSBnbyBpbiAnYmFyJyBvciAnYml6J1xuXG4vLyBTeW50YXhFcnJvclxuLy8gNnRvNSBjb21waWxlciBlcnJvclxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vL0NBTidUIFVTRSAnYXJndW1lbnRzJ1xuLy9jb25zb2xlLmNsZWFyKCk7XG4vL1xuLy9mdW5jdGlvbiBkb1NvbWV0aGluZyguLi5iYXIpe1xuLy8gIGNvbnNvbGUubG9nKGFyZ3VtZW50cy5sZW5ndGgpOyAvLyBTeW50YXhFcnJvclxuLy99XG4vL2RvU29tZXRoaW5nKDEsIDIsIDMpO1xuXG4vL1RISVMgV09SS1MgSU4gNnRvNVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy9OTyBERUZBVUxUIFZBTFVFU1xuLy9jb25zb2xlLmNsZWFyKCk7XG4vL1xuLy9mdW5jdGlvbiBkb1NvbWV0aGluZyguLi5wYXJhbXM9WzEsMiwzXSl7IC8vU3ludGF4RXJyb3Jcbi8vICBjb25zb2xlLmxvZyhwYXJhbXMuam9pbijigJwg4oCcKSk7XG4vL31cbi8vZG9Tb21ldGhpbmcoKTtcblxuLy8gSW4gNnRvNSwgaXQgaXMgYSBjb21waWxlciBlcnJvclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvYXBwLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIiLCJmaWxlIjoiYXBwLmpzIn0=