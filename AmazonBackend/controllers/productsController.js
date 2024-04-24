const { json } = require('express');
const productModel = require('../models/productsModel.js')

const getAllProducts = async (req , res)=>{
    const {sort = 'price',page =1, pageSize = 3,fields='-info', ...q} = req.query;
    const sortStr = sort.split(',').join(' ');
    const fieldsStr = fields.split(',').join(' ');

    let query = productModel.find(q);
    query = query.sort(sortStr);

    const skip = pageSize *(page -1); 
    query = query.skip(skip).limit(pageSize);

    query = query.select(fieldsStr);

    const products = await query;
    // const q = req.query;
    // console.log(q);
    // const data = await productModel.find(q);
    // // console.log(data);
    // console.log(req.url);
    res.json({
        status:'success',
        results:products.length,
        data:{
            // products:data,
            products,
        }
    })
}

const addProducts = async(req,res) =>{
 try{
    const {_id, ...data} = await productModel.create(req.body);
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
    // console.log(err)
    res.status(403)
    res.json({
        status:'fail',
        messege:JSON.stringify(err)
    })
    
 
}
}

const replaceProducts = async(req,res)=>{

    try{
        const reqId = req.params.id;
    const data = {...req.body, reqId};
    const result = await productModel.findOneAndReplace({_id:reqId},data)
        
        res.json({
            status : 'replaced',
            results:1,
            data:result
            
        })
     }
    
    
     catch(err){
        console.log(err.messege)
        res.status(403)
        res.json({
            status:'fail',
            messege:JSON.stringify(err)
        })
        
     
    }

}


const deleteProducts =async(req,res)=>{

    try{
        const reqId = req.params.id;
    const data = {...req.body, reqId};
    const result = await productModel.deleteOne({_id:reqId},data)
        
        res.json({
            status : 'deleted',
            results:0,
            data:result
            
        })
     }
    
    
     catch(err){
        console.log(err.messege)
        res.status(403)
        res.json({
            status:'deleted succesfully',
            messege:JSON.stringify(err)
        })
        
     
    }

}


module.exports = {
    getAllProducts,
    addProducts,
    replaceProducts,
    deleteProducts,
}