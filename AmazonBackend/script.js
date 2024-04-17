const express = require('express');
const productsRouter = require('./routes/productsRoute.js')

const app = express();

app.use('/api/products',productsRouter)

app.listen(3000,()=>{
    console.log("server is runnig on port 3000");
})