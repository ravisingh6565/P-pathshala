const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    review:{
        type:String,
    },
    rating:{
        type:Number,
        required:true,
    },
    images:[String],
    createdAt:{
        type: Date,
        default : new Date(),
    },
    updatedAt:{
        type:Date,
        default: new Date(),
    }
})

const reviewModel = mongoose.model('reviews',reviewSchema);

module.exports = reviewModel;