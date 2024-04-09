// console.log('hello Ravi');


//  const ans = arr.map((a)=>{
    //     // console.log(a)
    //     return a;
    // })
    // console.log(ans);
    
    
//     const arr = [ 1,2,3,4 ]


//    const ans =  arr.filter((a)=>{
//         if(a>2) return true;
//         else return false ;
//     })
    
//     console.log(arr);
//     console.log(ans)



const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"
]

// for(let i=0;i<states.length;i++){
//    let state = states[i];
//     for(j=0;j<states[i].length;j++){
//         if(state[j]=='i'){
//             console.log(state)
//             break;
//         }else{
//             // console.log("not available")
//         }
        
//     }
// }



const ans = states.filter((a)=> a.toLowerCase().includes('india')
    // const ns = a.toLowerCase();

)

console.log(ans)