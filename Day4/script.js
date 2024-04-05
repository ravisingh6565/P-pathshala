// let a = new String("hello");
// let b = "hello";

// if(a===b){
//     console.log("true");

// }else{
//     console.log("no");
// }

// const obj = {
//     name:'ravi',
//     lastName: 'singh'
// }

// let obj = {
//    " name":"ravi",
//     "lastName": "singh"
// }

// console.log(obj);
// const str = JSON.stringify(obj);
// document.write(str);


// const obj = {
//     name:'ravi',
//     lastName: 'singh'
// }

// obj.name = 2020;
// console.log(obj);

//  let arr = [2,3,4]; 
//  arr[20] = 'ravi';
//  console.log(arr);



//  arr[2] = 111;
//  console.log(typeof(obj))
//  console.log(typeof(arr));

// function objOrNot(x) {
//     if (Array.isArray(x) !== false) {
//         console.log("it is array");
//     } else if (typeof (x) != "object") {
//         console.log("it is " + typeof (x));
//     }
//     else {
//         console.log("it is object");
//     }

// }
// objOrNot(5);


// for( let i =0;i<2;i++){
//     console.log(x[i]);
// }

// for( let i =0;i<2;i++){
//     console.log(obj[i]);
// }

// for( let i of x){
//     console.log(i);
// }


// for( let i of obj){
//     console.log(obj);
// }



// for( let i in x){
//     console.log(i);
// }

// for( let i in obj){
//     console.log(obj);
// }




// const obj = {
//     name: 'ravi',
//     lastname: 'singh'
// }

// let arr = [2, 3, 4];







// *****************Document Object model *********************************//



// window.console.log(window);

// console.log(window.document);

//console.log(console); all information
// console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
// assert
// : 
// ƒ assert()
// clear
// : 
// ƒ clear()
// context
// : 
// ƒ context()
// count
// : 
// ƒ count()
// countReset
// : 
// ƒ countReset()
// createTask
// : 
// ƒ createTask()
// debug
// : 
// ƒ debug()
// dir
// : 
// ƒ dir()
// dirxml
// : 
// ƒ dirxml()
// error
// : 
// ƒ error()
// group
// : 
// ƒ group()
// groupCollapsed
// : 
// ƒ groupCollapsed()
// groupEnd
// : 
// ƒ groupEnd()
// info
// : 
// ƒ info()
// log
// : 
// ƒ log()
// memory
// : 
// MemoryInfo {totalJSHeapSize: 26554499, usedJSHeapSize: 24194659, jsHeapSizeLimit: 2172649472}
// profile
// : 
// ƒ profile()
// profileEnd
// : 
// ƒ profileEnd()
// table
// : 
// ƒ table()
// time
// : 
// ƒ time()
// timeEnd
// : 
// ƒ timeEnd()
// timeLog
// : 
// ƒ timeLog()
// timeStamp
// : 
// ƒ timeStamp()
// length
// : 
// 0
// name
// : 
// "timeStamp"
// arguments
// : 
// (...)
// caller
// : 
// (...)
// [[Prototype]]
// : 
// ƒ ()
// [[Scopes]]
// : 
// Scopes[0]
// trace
// : 
// ƒ trace()
// warn
// : 
// ƒ warn()
// Symbol(Symbol.toStringTag)
// : 
// "console"
// [[Prototype]]
// : 
// Object


// ???? ask question. why it is not works?********************************************************************************


// let uName = prompt("enter the your name");

// document.getElementById('heading').innerHTML = uName;
// let res = document.getElementsByTagName("div");
// res[1].innerHTML = "paragraph changed";

// const ne = document.createElement("h2");
// ne.innerText = 'new h2 is added';
// console.log(ne);
// document.body.appendChild(ne);
// const firstDiv  = document.getElementsByTagName("div");
// firstDiv[0].appendChild(ne);

// document.body.prepend(ne);
// const ele =document.getElementsByTagName("h1");
// ele.remove();

const element = document.getElementById("heading");
element.remove();

