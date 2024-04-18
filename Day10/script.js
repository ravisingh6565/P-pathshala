const exp = require('constants');
const express = require('express')
// const fsPromises = require('fs/promises');
const productRouter = require('./routes/productRoute.js');
const userRouter = require('./routes/userRoute.js');
// Day10\routes\userRoute.js
//C:\Users\mi\OneDrive\Desktop\P pathshala\Day10\routes\userRoute.js

// const controller = require("./controllers/productsController.js")
// const userController = require("./controllers/usersControllers.js")

const app =express()

app.use(express.json());

// app.use((req,res,next)=>{
//     const time = new Date().toLocaleString();
//     fsPromises.appendFile("log.txt",req.url+"\t"+time+"\n")
//     // console.log("request received");
//     next();
// })
app.use('/api/users',userRouter);
app.use('/api/products',productRouter);

app.listen(3000,()=>{
    console.log('server is running on 3000')
})