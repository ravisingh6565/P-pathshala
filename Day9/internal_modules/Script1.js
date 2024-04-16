// console.log('hello');
const fs = require("fs");
const http = require("http");
const url = require("url");

const port = 3000;
const data = fs.readFileSync("./data.json","utf8");
const dataObj = JSON.parse(data).products;

// const searchBar =`
// <form action='/product'>
// <input type="search" id="gsearch" name="i-search" for="title" />
// <input type="submit" />
// <form>`

const searchBar =`
<form action="/product">
        <input type="text" name="pname">
        <input type="submit" value="search" />
    </form>`

const cardTemplate = `
<div class='product-card'>
<h3 name ="title">$Title$</h3>
<img src="$link$">
<a href="$hlink$">read more..</a>
</div>`

let result = [];
for(let i=0;i<dataObj.length;i++){
        let temp = cardTemplate;
        temp = temp.replace('$Title$',dataObj[i].title);
        // result.push(temp)
        temp =temp.replace('$hlink$',`/product?id=${i}`)
        temp = temp.replace('$link$',dataObj[i].images[0]);
        result.push(temp)
    }
    result = searchBar+(result.join(' ')) ;
    

const app = http.createServer((req,res)=>{
    res.writeHead(200, {
        'content-type': 'text/html'
    })
    // console.log('hi')
    //  const path = url.parse(req.url);
    // let id = path.query;
    // id = id.slice(2,id.length)
    // console.log(id);
    
    // const pathname = path.pathname;
    const {pathname} =url.parse(req.url);
    console.log(pathname)
    if(pathname=='/')
    res.end(result)
else if(pathname =='/product'){
        const path = url.parse(req.url, true);
        let id = path.query.id;
        const pname = path.query.title
        // console.log(id);
        if(pname){
            
            // res.end(pname)
            const searchResult = dataObj.fiter((elem)=>{
                if(elem.title.includes(pname)){
                    return true;
                }else{
                    false
                }
            })
        
            res.end(JSON.stringify(searchResult))
        }
        // res.end('product')
        let cTemplate = cardTemplate;
        let result = [];

                cTemplate = cTemplate.replace('$Title$',dataObj[id].title);
                cTemplate =cTemplate.replace('$hlink$',`/product?id${id}`)
                cTemplate = cTemplate.replace('$link$',dataObj[id].images[0]);
                result.push(cTemplate)
            result = result.join(' ');
            res.end(cTemplate)

    }
  
    else{
        res.end('page not found')
    }
    // console.log(pathname)
   // res.end(result);
})
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})
