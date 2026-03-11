import mongoose from 'mongoose';
const productSchema=new mongoose.Schema({
    productname:{type:String,required:true},
    price:{type:Number,required:true},
    category:{type:String,required:true},
    description:{type:String},
    imageurl:{type:String,required:true}
},{timestamps:true});
const Product_Md=mongoose.model('product',productSchema);
export default Product_Md;