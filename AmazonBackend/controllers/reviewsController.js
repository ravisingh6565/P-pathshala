const {json, query} = require('express');
const reviewModel = require('../models/reviewsModel.js');

const  getAllReviews = async (req,res)=>{
    try{
        const {review,rating} = req.query;
        const reviews = await query(review,rating);

 
        res.json({
            status :'review fetched',
            results:reviews.length,

            data:{
                // reviews,
                // JSON.stringify(reviews)

            }
        })
    }
    catch(err){
        console.log(err.message)
        res.status(403)
        res.json({
            status:'fail but not show the error msg',
            messege:JSON.stringify(err.message)
        })
    }
    
}

const addReviews = async(req,res)=>{
    try{
        const{_id,...data } = await reviewModel.create(req.body);
        console.log(data)
        res.json({
            status:'review posted',
            results:1,
            data:{
                data,
            }
        })

    }

    catch(err){
            res.status(403)
            res.json({
                status:'fail',
                messege:JSON.stringify(err.message)
            })
        
    }
}

const replaceReviews = async(req,res)=>{
    
    try{
        const reqId = req.params.id;
    const data = {...req.body, reqId};
    const result = await productModel.findOneAndReplace({_id:reqId},data)
        
        res.json({
            status : 'replaced reviews',
            results:1,
            data:result
            
        })
     }

     catch(err){
        console.log(err.messege)
        res.status(403)
        res.json({
            status:'fail not replaced messege',
            messege:JSON.stringify(err.message)
        })  
    }

}


module.exports ={
    getAllReviews,
    addReviews,
    replaceReviews,
}