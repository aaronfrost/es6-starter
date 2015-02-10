webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	//CLASSES

	// Almost didn't make it into ES6

	// https://mail.mozilla.org/pipermail/es-discuss/2012-March/021430.html
























	////CLASSES
	//console.clear();
	//
	//// CURRENTLY these are the same
	//
	////FUNCTIONALLY SAME
	//function Foo(){
	//  //....
	//}
	//
	//class Foo{
	//  //....
	//}
	//
	//// - This could change at any time
	//// - As classes are enhanced, THIS WILL CHANGE














	////CLASSES
	//console.clear();
	//
	//// Constructor
	//
	//class Animal{
	//
	//  constructor(name){
	//    this.name = name;
	//  }
	//
	//}
	//
	//console.log(new Animal('Prophetic Narwhal'));
	//
	//// - the constructor function is called 'constructor'














	////CLASSES
	//console.clear();
	//
	//// Private-ish Properties
	//
	//const monsterHealth = Symbol();
	//
	//class Monster{
	//  constructor(name, health){
	//    this.name = name;
	//    this[monsterHealth] = health;
	//  }
	//}
	//
	//console.log(new Monster('Gozilla', 100));
	//
	//// - See the Symbols spec













	////CLASSES
	//console.clear();
	//
	//// Get Properties
	//
	//const monsterHealth = Symbol();
	//
	//class Monster{
	//  constructor(name, health){
	//    this.name = name;
	//    this[monsterHealth] = health;
	//  }
	//
	//  get isAlive(){
	//    return this[monsterHealth] > 0;
	//  }
	//}
	//
	//console.log('alive - ',new Monster('Gozilla', 100).isAlive);
	//
	//// - properties are not functions









	////CLASSES
	//console.clear();
	//
	//// Property Methods
	//
	//const monsterHealth = Symbol();
	//
	//class Monster{
	//  constructor(name, health){
	//    this.name = name;
	//    this[monsterHealth] = health;
	//  }
	//
	//  get isAlive(){
	//    return this[monsterHealth] > 0;
	//  }
	//  set health(val){
	//    if(val < 0){
	//      throw new Error('Health must be positive number');
	//    }
	//    this[monsterHealth] = val;
	//  }
	//}
	//let m = new Monster('Gozilla', 100);
	//m.health = 1000;
	//
	//console.log(m);
	//
	//// - properties are not functions































	////CLASSES
	//console.clear();
	//
	//// Class Methods
	//
	//const monsterHealth = Symbol();
	//
	//class Monster{
	//  constructor(name, health){
	//    this.name = name;
	//    this[monsterHealth] = health;
	//  }
	//
	//  get isAlive(){
	//    return this[monsterHealth] > 0;
	//  }
	//  set health(val){
	//    if(val < 0){
	//      throw new Error('Health must be positive number');
	//    }
	//    this[monsterHealth] = val;
	//  }
	//
	//  attack(target){
	//    console.log(this.name + ' attacks ' + target.name);
	//  }
	//}
	//let m = new Monster('Gozilla', 100);
	//let g = new Monster('Goku', 200);
	//
	//m.attack(g);
	//
	//
	//// - properties are not functions


























	////CLASSES
	//console.clear();
	//
	//// Class Properties
	//
	//const monsterHealth = Symbol();
	//
	//class Monster{
	//  constructor(name, health){
	//    this.name = name;
	//    this[monsterHealth] = health;
	//    Monster.allMonsters = Monster.allMonsters || [];
	//    Monster.allMonsters.push(this);
	//  }
	//
	//  get isAlive(){
	//    return this[monsterHealth] > 0;
	//  }
	//  set health(val){
	//    if(val < 0){
	//      throw new Error('Health must be positive number');
	//    }
	//    this[monsterHealth] = val;
	//  }
	//
	//  attack(target){
	//    console.log(this.name + ' attacks ' + target.name);
	//  }
	//}
	//
	//Monster.allMonsters = [];
	//
	//let m = new Monster('Gozilla', 100);
	//let g = new Monster('Goku', 200);
	//
	//console.log(Monster.allMonsters);
	//
	//// - These are like static properties on a class






















	////CLASSES
	//console.clear();
	//
	//// EXTENDING CLASSES
	//const monsterHealth = Symbol();
	//class Monster{
	//  constructor(name, health){
	//    this.name = name;
	//    this[monsterHealth] = health;
	//    Monster.allMonsters = Monster.allMonsters || [];
	//    Monster.allMonsters.push(this);
	//  }
	//
	//  get isAlive(){
	//    return this[monsterHealth] > 0;
	//  }
	//  set health(val){
	//    if(val < 0){
	//      throw new Error('Health must be positive number');
	//    }
	//    this[monsterHealth] = val;
	//  }
	//
	//  attack(target){
	//    console.log(this.name + ' attacks ' + target.name);
	//  }
	//}
	//Monster.allMonsters = [];
	//
	//class Godzilla extends Monster{
	//  constructor(){
	//    super('Godzilla', 10000);
	//  }
	//  attack(target){
	//    super(target);
	//  }
	//}
	//
	//let m = new Godzilla();
	//let g = new Monster('Goku', 200);
	//
	//m.attack(g);
	//console.log(Monster.allMonsters);
	//
	//// - super calls















	////CLASSES
	//console.clear();
	//
	//// EXTENDING CLASSES via Expression
	//class MySocket extends getClass() {
	//  //....
	//}
	//
	//function getClass(){
	//  if(isIE()){
	//    return IEWebSocketImpl;
	//  }
	//  return WebSocket;
	//
	//  function isIE(){
	//    return false;
	//  }
	//}

	// - The extension reference can be a call










	////CLASSES
	//console.clear();
	//
	//// Classes Do Not Hoist
	//new Bar(); //runtime error
	//
	//class Bar{}
	//
	//// - Can't use until evaled in order





















	////CLASSES
	//console.clear();
	//
	//// If No Constructor
	//constructor(..args){
	//  super(...args);
	//}
	//// - Can't use until evaled in order

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIiLCJmaWxlIjoiYXBwLmpzIn0=