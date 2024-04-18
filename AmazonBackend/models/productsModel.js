const mongoose = require("mongoose");


const productSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: String,
    images: [String],
    createAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        default: new Date(),
    }

})
const productModel = mongoose.model('products', productSchema);

//******************only for test */
// const testProduct = new productModel({
//     title: 'titan watch',
//     price :1000,
// })

// testProduct.save().then((res)=>{
//     console.log(res);
// })

//***************************************************************** */
// const getAllProducts = (req,res)=>{
//     res.json({
//         status:"success";
//         result:0,
//         data:{
//             products:[]
//         },
//     })
// }
module.exports = productModel;