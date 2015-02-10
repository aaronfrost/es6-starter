webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	//THREE NEW COLLECTION TYPES

	/*
	 - SET
	 - MAP
	 - WEAKMAP
	 */






















	//// SET
	//console.clear();
	//
	////Basic
	//let set = new Set();
	//set.add(1);
	//set.add(2);
	//set.add(3);
	//console.log(set.size); //logs 3
	//




















	//// SET
	//console.clear();
	//
	//// Unique Values
	//let set = new Set();
	//set.add(1);
	//set.add(1);
	//set.add(1);
	//console.log(set.size); //logs 1
	//
	//// - Add the same val, only one is added



















	//// SET
	//console.clear();
	//
	//// Prototype Methods
	//let set = new Set();
	//console.log(set.has(1)); //false
	//set.add(1);
	//console.log(set.has(1)); //true
	//set.clear();
	//console.log(set.has(1)); //false
	//set.add(1);
	//set.add(2);
	//console.log(set.size);   //2
	//set.delete(2);
	//console.log(set.size);   //1















	//// SET
	//console.clear();
	//
	//// No Typecasting for uniqueness
	//let set = new Set();
	//
	//set.add(1);
	//console.log(set.has(1));    //true
	//console.log(set.has("1"));  //false
	//
	//set.add("1");
	//console.log(set.has("1"));  //true


















	//// SET
	//console.clear();
	//
	//// Iterate on a set
	//let items = new Set([1, 2, 3, 4, 5]);
	//
	//for (let num of items) {
	//  console.log(num); //logs 1, 2, 3, 4, 5
	//}





















	//// MAP
	//console.clear();
	//
	//// Basic Map
	//
	//let map = new Map();
	//map.set('name', 'Aaron');
	//
	//console.log(map.get('name'));    //Aaron





















	//// MAP
	//console.clear();
	//
	//// No Typecasting on Keys
	//
	//let map = new Map();
	//
	//map.set(1, true);
	//console.log(map.has("1"));       //false
	//
	//map.set("1", true);
	//console.log(map.has("1"));       //true


















	//// MAP
	//console.clear();
	//
	//// Object as a Key
	//let user = { name: "Aaron", id: 1234 };
	//
	//let userHobbyMap = new Map();
	//
	//userHobbyMap.set(user, ['Ice Fishing', 'Family Outting']);
	//
	//console.log(userHobbyMap);



















	//// MAP
	//console.clear();
	//
	//// Must Use Same Key to Get, identical keys don't work. Must be same reference
	//let user1 = { name: "Aaron", id: 1234 };
	//let user2 = { name: "Aaron", id: 1234 };
	//
	//let userHobbyMap = new Map();
	//
	//userHobbyMap.set(user1, ['Ice Fishing', 'Family Outting']);
	//
	//console.log(userHobbyMap.get(user2)); //undefined
	//console.log(userHobbyMap.get(user1)); //['Ice Fishing', 'Family Outting']

















	//// MAP
	//console.clear();
	//
	//// Other objects
	//var elem = document.querySelector('body');
	//
	//var elemMap = new Map();
	//elemMap.set(elem, {loaded: true, opacity: 0});
	//
	//console.log(elemMap.get(elem));    //logs the element




















	//// MAP
	//console.clear();
	//
	//// Other objects
	//var elem = document.querySelector('body');
	//
	//var elemMap = new Map();
	//elemMap.set(elem, {loaded: true, opacity: 0});
	//
	//console.log(elemMap.get(elem));    //logs the element
	//
	//
	//// - Why is this bad?

















	//// WEAKMAP
	//console.clear();
	//
	//// WeapMap - A lot like a map
	//let weak = new WeakMap();
	//let key = {name: "Aaron"};
	//weak.set(key, 'boring');
	//console.log(weak.get(key)); //'boring'
	//
	//// - Can't enumerate keys, so you can't use primative key




















	//// MAP
	//console.clear();
	//
	//// WeapMap - A lot like a map
	//let weak = new WeakMap();
	//let key = {name: "Aaron"};
	//weak.set(key, 'boring');
	//console.log(weak.get(key)); //'boring'
	//
	//// - Can't enumerate keys, so you can't use primative key




















	//// WEAKMAP
	//console.clear();
	//
	//// WeapMap - weak reference
	//var elem = document.querySelector('body');
	//var weak = new WeakMap();
	//
	//weak.set(elem, { hidden: false } );
	//console.log(weak);
	//
	//
	//// - If weakmap is the only thing still pointing to your object
	//// as a key, weakmap will release the key and value from the map

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIiLCJmaWxlIjoiYXBwLmpzIn0=