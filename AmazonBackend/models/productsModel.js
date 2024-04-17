const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    title : String,
    price: Number,

})
const productModel = mongoose.model('products',productSchema);

const testProduct = new productModel({
    title: 'titan watch',
    price :1000,
})

testProduct.save().then((res)=>{
    console.log(res);
})