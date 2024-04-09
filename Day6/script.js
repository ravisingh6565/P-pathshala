// console.log('start')

// setTimeout(()=>{console.log('timeout...')},2000)

// console.log('intermediate');

// console.log('end')


//////////////   js map()  ////////////////////


// function createOrder(x, fn) {
//     console.log(x)
//     setTimeout(() => { fn('322323')}, 1000);
//     setTimeout(() => { fn('322323')}, 1000);
// }

// function makePayment(orderId) {
//     console.log(orderId)
// }

// createOrder('soap', makePayment);


// ******************* js promises ****************//




//  setTimeout(()=>{console.log("firstTime out11");},0)

//  const pr  = new Promise((resolve,reject)=>{
//  if(true)
//  setTimeout(()=>{resolve('Order Completed')},5000)
// setTimeout(()=>{reject('Product is out of stock')},0)
//  resolve();
// else
// reject();
// });
// console.log(pr)

// pr.then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })








setTimeout(function abc()  {
    console.log('i am one');
}, 0);
const pr = new Promise((res,rej)=>{
    setTimeout(()=>{res("done")},0)
})

pr.then(function b(res){
    console.log("promise completed",res)
})
setTimeout(function xyz(){
    console.log('i am two')
},0)