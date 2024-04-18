const { json } = require('express');
const productModel = require('../models/productsModel.js')

const getAllProducts = async (req , res)=>{
    const data = await productModel.find();
    console.log(data);
    console.log(req.url);
    res.json({
        status:'success',
        results:0,
        data:{
            products:data,
        }
    })
}

const addProducts = async(req,res) =>{
 try{
    const data = await productModel.create(req.body);
    console.log(data)
    res.json({
        status : 'success',
        results:1,
        data:{
            products:data,
        }
    })
 }
 catch(err){
    console.log(err)
    res.json({
        status:'fail',
        messege:JSON.stringify(err)
    })
    
 
}
}

module.exports = {
    getAllProducts,
    addProducts,
}