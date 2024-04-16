const express = require('express')
// const fs = require('fs')
const fsPromises = require("fs/promises");

const app =express()

app.get('/api/products', async(req,res)=>{
    // res.send('this is get a index page')
    // const data = fs.readFileSync('data.json',"utf8")
    const data = await fsPromises.readFile('data.json',"utf8")
    // const arr = JSON.parse(data).products;
    const arr = JSON.parse(data);
    // res.json(obj)
    res.json({
        status:'success',
        results: arr.length,
        data:{
            products:arr
        }
    })
})
app.use(express.json())
app.post('/api/products', async(req, res)=>{
    // console.log(Object.keys(req));
    // console.log(req.body)
    const data = req.body;
    // data.id= 121;
    // console.log(data)
    const db = await fsPromises.readFile("data.json","utf8")
    const arr =JSON.parse(db)
    const len = arr.length;
    const newProduct = data;
    if(len==0){
       
        newProduct.id=1;
        // console.log(arr)
        // arr.push(newProduct);
        // console.log(arr)
        // res.send(arr)
        // fsPromises.writeFile("data.json",JSON.stringify(arr))
        
    }else{
       
       newProduct.id = (arr[len-1].id)+1;
    //    arr.push(newProduct);
    //    fsPromises.writeFile("data.json",JSON.stringify(arr))
    //    console.log(arr)
    }
    arr.push(newProduct);
    fsPromises.writeFile("data.json",JSON.stringify(arr))
    // res.send('this is post method')
    res.json({
        status:'success',
        results:1,
        data:{
            newProduct:newProduct,
        }
    })
})

app.put('/api/products/:id',async (req,res)=>{
    // console.log(req);
    // res.send("put in working mode");
    const arr = JSON.parse(await fsPromises.readFile('data.json',"utf8"))
    const reqId = parseInt(req.params.id);
    const data = req.body;
    data.id = reqId;
    // console.log(data)
    const newArr = arr.map((elem)=>{
        if(elem.id == reqId)
        return data;
        else
        return elem;
    })
    fsPromises.writeFile("data.json",JSON.stringify(newArr))
        res.json({
            status:'success',
            results:1,
            data:{
                newProduct:data,
            }
        })
})

app.delete('/api/products/:id', async (req,res)=>{
    const reqId = parseInt(req.params.id);
    const arr = JSON.parse( await fsPromises.readFile("data.json","utf8"))
    const newArr = arr.filter((elem)=>{
        if(elem.id===reqId)
        return false;
    else return true;
    })
    // console.log(newArr)
    fsPromises.writeFile("data.json",JSON.stringify(newArr));
    res.status(204);
    res.json({
        status:'success',
        data:{
            newProduct:null,
        }
    })
})
app.listen(3000,()=>{
    console.log('server is running on 3000')
})