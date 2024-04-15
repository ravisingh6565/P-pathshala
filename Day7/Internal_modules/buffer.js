// const b = new Buffer.from('Abcxya');
// console.log(b.toString());
// b.write('other');
// console.log(b.toString())


// const fs = require('fs');
// console.log('start')
// // const data = fs.writeFileSync('log.txt',"10th April",)
// const data = fs.readFileSync('log.txt',{encoding:'utf-8'})
// console.log(data)
// console.log('end')


//   Promises in File System ********************************************************************
// const fsPromises = require('fs/promises');
// console.log('start')

// const pr = fsPromises.readFile('myReadMe.txt',{encoding:'utf-8'})
// pr.then((res)=>{
//     console.log(res)
// })
//  console.log('end')




//            CallBack in file system   ***********************************


// const fs = require('fs')

// const data = fs.readFile('myReadMe.txt', { encoding: 'utf8' }, (err, data) => {
//     if (err)
//         console.log(err.message)
//     else
//         console.log(data)
// })
let data; 
 fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(json => {
     data=json;
     console.log("data fetched ");
    //  console.log(data);
    //  console.log(data.products[0].title)
  })

const http = require('http')
const port = 3000
// const page = '<h1>KIET college</h1>'

         


const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
<style>
div{
    background-color:green;
    width :60%;
}
span{
    background-color:red;
    font-size:20px;
}
.content{
    margin-top:13px;
    margin-left:270px;
}
</style>
<title>Document</title>
</head>
<body>
product__cards__
</body>
</html>
`

const cardTemplate = `
<div class='content'>
<div><span>Title </span>: title</div>
<div><span>Description : </span> description</div>
<div><span>Price : </span>price</div>
</div>
 `

// const card1 = cardTemplate.replace('title', 'I Phone 12 pro max')
//     .replace('anujsingh', 'Capitalized name is ANUJ SINGH.....')

    
// const card2 = cardTemplate.replace('title', 'I Phone 14 pro max')
// .replace('anujsingh', 'Capitalized name is RAVI SINGH.....')

// const page = htmlTemplate.replace('product__cards__', card1+card2);
// const page = htmlTemplate.replace('product__cards__',cardTemplate);

// for(let i=0;i<10;i++){
   
// }

const app = http.createServer((req, res) => {
   
    // let description = '';
    let page;
    let card='';
    for(let i=0;i<10;i++){
         card += cardTemplate.replace('title', data.products[i].title)
        //  description+= cardTemplate.replace('description', data.products[i].description)
        card=card.replace('description',data.products[i].description)
        card =card.replace('price',data.products[i].price)
        // page += htmlTemplate.replace('product__cards__', card);

        }
        // page = htmlTemplate.replace('product__cards__',description)
        page = htmlTemplate.replace('product__cards__', card);


    console.log('request received')
    console.log(req.url)
    res.writeHead(200, {
        'content-type': 'text/html',
    })
    // res.end('<h1>hello Ravi singh </h1>'+'<h3>hello Ravi singh </h3>');
//  console.log(page);
    res.end(page);
})

app.listen(3000, () =>
    console.log(`server is running on ${port}`)

);