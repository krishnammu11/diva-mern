import mongoose from "mongoose";
import User from "./user_md.js";
import Product_Md from "./product_md.js";
const cartSchema = new mongoose.Schema(
  {
    userid: { type: mongoose.Schema.Types.ObjectId,ref:"User", required: true },
    productid: { type:mongoose.Schema.Types.ObjectId,ref:"product", required: true },
    quantity: { type: Number, required: true },
    color: { type: String, required: true },
    size: { type: String, required: true },
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);
export default Cart; 