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


const obj = {
    name:'ravi',
    lastName: 'singh'
}


 let x = [2,3,4]; 
//  arr[2] = 111;
//  console.log(typeof(obj))
//  console.log(typeof(arr));

function objOrNot(x){
    if(Array.isArray(x) === false){
        console.log("it is object");
    }else{
        console.log("it is array");
    }
}
objOrNot(x);