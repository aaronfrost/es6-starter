



//QUICK LESSON
//let nums = [1, 2, 3];
//
//console.log(nums);    //logs [1, 2, 3], and Array
//console.log(...nums); //logs 1, 2, 3, the individual pieces, all spread out




















//Old vs New
//console.clear();
//
//function returnTwo(a,b){
//  return [b,a]; //Flips 'a' and 'b'
//}
//var a = [1, 2, 3];
//var b = returnTwo(a[0], a[1]); // [2, 1]
//var c = returnTwo(...a); // [2, 1]
//console.log(b);
//console.log(c);



















//WHAT CAN I DO w/ Spread?

//Combine Arrays
//console.clear();
//
//let nums = [1, 2, 3];
//let abcs = ['a', 'b', 'c'];
//
//let alphanum = [ ...nums, ...abcs ]; //[1, 2, 3, 'a', 'b', 'c']
//console.log(alphanum);




















//WHAT CAN I DO w/ Spread?

//Combine Arrays
//console.clear();
//
//function getNums(){
//  return [1, 2, 3];
//}
//
//var b = [0, ...getNums()];
//console.log(b); // [0, 1, 2, 3]

