const {json, query} = require('express');
const reviewModel = require('../models/reviewsModel.js');

const  getAllReviews = async (req,res)=>{
    try{
        const {review,rating} = req.query;
        const reviews = await query;

        res.josn({
            status :'review fetched',
            results:reviews.length,
            data:{
                reviews,
            }
        })
    }
    catch(err){
        console.log(err.messege)
        res.status(403)
        res.json({
            status:'fail',
            messege:JSON.stringify(err.messege)
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

module.exports ={
    getAllReviews,
    addReviews,
}