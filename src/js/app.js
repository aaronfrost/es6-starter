////PROMISES
//console.clear()
//
//// A basic Promise
//function getDataFromServer(){
//  let promise = new Promise(function(resolve, reject) {
//    // do a thing, possibly async, then…
//
//    setTimeout(function(){
//      if (false) {
//        resolve("Stuff worked!");
//      }
//      else {
//        reject(Error("It broke"));
//      }
//    }, 3000);
//
//  });
//
//  return promise; //Give This To Someone
//}
//getDataFromServer();
//






////PROMISES
//console.clear()
//
//// Using the promise
//function getDataFromServer(){
//  let promise = new Promise(function(resolve, reject) {
//    // do a thing, possibly async, then…
//
//    setTimeout(function(){
//      if (false) {
//        resolve("Stuff worked!");
//      }
//      else {
//        reject(Error("It broke"));
//      }
//    }, 3000);
//
//  });
//
//  return promise; //Give This To Someone
//}
//
//getDataFromServer().then(function(r){
//  console.log("WORKED", r);
//}, function(e){
//  console.error("FAILED", e);
//})
//
//// - What could we do besides setTimeout?































////PROMISES
//console.clear()
//
//// MADE MY OWN 'get' METHOD
//function get(url){
//  return new Promise(function(resolve, reject){
//    $.get(url, function(data){
//      resolve(data);
//    })
//      .fail(function(){
//        reject();
//      });
//  });
//}
//
//get('users.all').then(function(users){
//  myController.users = users;
//}, function(){
//  delete myController.users;
//});










////PROMISES
//console.clear()
//
//// MADE MY OWN 'get' METHOD
//var usersPromise = get('users.all');
//var postsPromise = get('posts.everyone');
//
////Wait until BOTH are settled
//Promise.all([usersPromise, postsPromise])
//  .then(function(results){
//    myController.users = results[0];
//    myController.posts = results[1];
//  }, function(){
//    delete myController.users;
//    delete myController.posts;
//  });














////PROMISES
//console.clear()
//
//// STATIC Promise METHODS
//Promise.all(iterable);  //Wait Until All Settle
//Promise.race(iterable); //Wait Until 1 Settles
//Promise.reject(reason); //Create a promise that is already rejected
//Promise.resolve(value); //Create a promise that is already resolved



























