import mongoose from "mongoose";
import Product_Md from "./product_md.js";
const orderSchema = new mongoose.Schema(
  {
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        productid: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "product",
          required: true,
        },
        quantity: Number,
        color: String,
        size: String,
        price: Number,
      },
    ],
    subtotal: Number,
    shipping: Number,
    totalAmount: Number,
    status: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);
const Order=mongoose.model("Order",orderSchema);
export default Order;
