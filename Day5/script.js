// let arr = [ 2,10,21,31];
// // function printPretty(elem){
// //  console.log(':', elem);
// // }



// // function printArray(arr){


    
// // arr.forEach(printPretty);
// // arr.forEach((a,b)=> {
// //     console.log(";"+a,b);
// // });
// // }


// // printArray(arr);


// console.log('GEC Start');
// function printPretty(elem){
// //  console.log(':', elem);
// console.log('preety start');
//  let ans = 2+3;
//  console.log(ans);
//  console.log('preetyEnd');
// }
// setTimeout(printPretty,10000);
// console.log('GEC End');




// const btn = document.getElementById('btn');
// btn.addEventListener("click",printPretty);



// console.log('start');
// const req = fetch("https://catfact.ninja/fact");
// console.log(req);
// req.then(()=>console.log('fatched'));
// console.log('end');






// fetch('https://dummyjson.com/products/1')
// // req.then(res=> res.json())
// .then(res=> console.log(res));
// console.log("end");



console.log('start');
const req = fetch('https://dummyjson.com/products/1')

const res = req.then(res=> res.json())

res.then((data)=>console.log(data))
res.catch((err)=>console.log("error : "+err));
console.log('end');
