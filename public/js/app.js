webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/*
	  Variable Hoisting
	  LET
	  CONST
	  Block Functions
	 */
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//BASIC LET
	var a = 1;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// REAssign It
	//let b = 2;
	//b = 3;
	//console.log('b',b);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//IF scope
	//let c = 2;
	//if(true){
	//  let bar = 1;
	//}
	//console.log( c + bar ); //ERROR
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//Same Name, Nested Scope: OK
	//let d = 0;
	//if(true){
	//  let d = 2;
	//  console.log("here d = ",d);     //Logs 2
	//}
	//console.log("at the end d = ",d); //Logs 0
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//Same Name, Same Scope: OK
	//let d = 0;
	//let d = 2;  //Works in 6to5, but not legal in ES6 spec
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//LET SCOPES
	
	//let a = 0;      //BASIC
	//
	//if(true){       //IF
	//  let b = 1;
	//}
	//
	//let term = "js";
	//switch(term){   //SWITCH
	//  case "js":
	//    let c = 2;
	//    break;
	//}
	//
	//while(true){    //LOOP BODY
	//  let d = 0;
	//}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//TEMPORAL DEAD ZONE
	function doSomething() {
	  console.log(a); //What Here?
	  var a = 1;
	  console.log(a);
	}
	//Memory is reserved
	//But variable isn't accessible
	//6to5 allows for it, but ES6 doesn't
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//LET AS COUNTER
	
	////VAR I
	//for(var i = 0; i < 10; i++){
	//  //console.log(i); //Logs 0-9
	//}
	//
	////LET J
	//for(let j = 0; j < 10; j++){
	//  //console.log(j); //Logs 0-9
	//}
	//console.log(i); //Logs 10
	//console.log(j); //ReferenceError
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//CONST
	//const e = 0;
	//e = 1;  //SyntaxError: Assignment to constant variable
	// 6to5 won't even compile this
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//BLOCKS
	//{
	//  let something = "another thing";
	//  console.log('inblock',something);
	//}
	//console.log('outblock',something);
	
	//arbitrary block
	//Been in JS for a long time, but no one cared until LET and CONST

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThCQSxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9MVixVQUFTLFdBQVcsR0FBRTtBQUNwQixVQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2YsT0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ1YsVUFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIFZhcmlhYmxlIEhvaXN0aW5nXG4gIExFVFxuICBDT05TVFxuICBCbG9jayBGdW5jdGlvbnNcbiAqL1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAvL0JBU0lDIExFVFxubGV0IGEgPSAxO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBSRUFzc2lnbiBJdFxuLy9sZXQgYiA9IDI7XG4vL2IgPSAzO1xuLy9jb25zb2xlLmxvZygnYicsYik7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy9JRiBzY29wZVxuLy9sZXQgYyA9IDI7XG4vL2lmKHRydWUpe1xuLy8gIGxldCBiYXIgPSAxO1xuLy99XG4vL2NvbnNvbGUubG9nKCBjICsgYmFyICk7IC8vRVJST1JcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vU2FtZSBOYW1lLCBOZXN0ZWQgU2NvcGU6IE9LXG4vL2xldCBkID0gMDtcbi8vaWYodHJ1ZSl7XG4vLyAgbGV0IGQgPSAyO1xuLy8gIGNvbnNvbGUubG9nKFwiaGVyZSBkID0gXCIsZCk7ICAgICAvL0xvZ3MgMlxuLy99XG4vL2NvbnNvbGUubG9nKFwiYXQgdGhlIGVuZCBkID0gXCIsZCk7IC8vTG9ncyAwXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy9TYW1lIE5hbWUsIFNhbWUgU2NvcGU6IE9LXG4vL2xldCBkID0gMDtcbi8vbGV0IGQgPSAyOyAgLy9Xb3JrcyBpbiA2dG81LCBidXQgbm90IGxlZ2FsIGluIEVTNiBzcGVjXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vTEVUIFNDT1BFU1xuXG4vL2xldCBhID0gMDsgICAgICAvL0JBU0lDXG4vL1xuLy9pZih0cnVlKXsgICAgICAgLy9JRlxuLy8gIGxldCBiID0gMTtcbi8vfVxuLy9cbi8vbGV0IHRlcm0gPSBcImpzXCI7XG4vL3N3aXRjaCh0ZXJtKXsgICAvL1NXSVRDSFxuLy8gIGNhc2UgXCJqc1wiOlxuLy8gICAgbGV0IGMgPSAyO1xuLy8gICAgYnJlYWs7XG4vL31cbi8vXG4vL3doaWxlKHRydWUpeyAgICAvL0xPT1AgQk9EWVxuLy8gIGxldCBkID0gMDtcbi8vfVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vVEVNUE9SQUwgREVBRCBaT05FXG5mdW5jdGlvbiBkb1NvbWV0aGluZygpe1xuICBjb25zb2xlLmxvZyhhKTsgIC8vV2hhdCBIZXJlP1xuICBsZXQgYSA9IDE7XG4gIGNvbnNvbGUubG9nKGEpO1xufVxuLy9NZW1vcnkgaXMgcmVzZXJ2ZWRcbi8vQnV0IHZhcmlhYmxlIGlzbid0IGFjY2Vzc2libGVcbi8vNnRvNSBhbGxvd3MgZm9yIGl0LCBidXQgRVM2IGRvZXNuJ3RcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vTEVUIEFTIENPVU5URVJcblxuLy8vL1ZBUiBJXG4vL2Zvcih2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKXtcbi8vICAvL2NvbnNvbGUubG9nKGkpOyAvL0xvZ3MgMC05XG4vL31cbi8vXG4vLy8vTEVUIEpcbi8vZm9yKGxldCBqID0gMDsgaiA8IDEwOyBqKyspe1xuLy8gIC8vY29uc29sZS5sb2coaik7IC8vTG9ncyAwLTlcbi8vfVxuLy9jb25zb2xlLmxvZyhpKTsgLy9Mb2dzIDEwXG4vL2NvbnNvbGUubG9nKGopOyAvL1JlZmVyZW5jZUVycm9yXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy9DT05TVFxuLy9jb25zdCBlID0gMDtcbi8vZSA9IDE7ICAvL1N5bnRheEVycm9yOiBBc3NpZ25tZW50IHRvIGNvbnN0YW50IHZhcmlhYmxlXG4vLyA2dG81IHdvbid0IGV2ZW4gY29tcGlsZSB0aGlzXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy9CTE9DS1Ncbi8ve1xuLy8gIGxldCBzb21ldGhpbmcgPSBcImFub3RoZXIgdGhpbmdcIjtcbi8vICBjb25zb2xlLmxvZygnaW5ibG9jaycsc29tZXRoaW5nKTtcbi8vfVxuLy9jb25zb2xlLmxvZygnb3V0YmxvY2snLHNvbWV0aGluZyk7XG5cbi8vYXJiaXRyYXJ5IGJsb2NrXG4vL0JlZW4gaW4gSlMgZm9yIGEgbG9uZyB0aW1lLCBidXQgbm8gb25lIGNhcmVkIHVudGlsIExFVCBhbmQgQ09OU1RcblxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9hcHAuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiIsImZpbGUiOiJhcHAuanMifQ==