// var figlet = require("figlet");

// figlet("Ravi Singh From  Kiet ",  (err, data) =>{
//   if (err) {
//     console.log("Data not available");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });



/* fetch("https://api.github.com/users/deepak3440")
.then((res)=>{
    return res.json();
})
.then((data)=>{
    
}) */



/* //async await */

//  async function getApi(){
//   const pr = await fetch("https://api.github.com/users/deepak3440");
//   // const pr = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=ffc3755c37c147799c44793024549eec");
//   const data = await pr.json();
//   console.log(data);
//   console.log('::fetched data');
// }
// getApi();






console.log('start');
async function callAPI(){
  const pr = new Promise((res,rej)=>{
    console.log('promise1 started');
    setTimeout(()=>{
      console.log('timeout--1');
    },10000);
  })
  
  console.log('promise1 completed');
  
  
  const pr1 = new Promise((res,rej)=>{
    console.log('promise2 started');
    setTimeout(()=>{
      console.log('timeout--2');
    },10000);
  })
  console.log('promise2 completed');
}

callAPI();
