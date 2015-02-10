/*
  Variable Hoisting
  LET
  CONST
  Block Functions
 */























 //BASIC LET
let a = 1;




























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
function doSomething(){
  console.log(a);  //What Here?
  let a = 1;
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


