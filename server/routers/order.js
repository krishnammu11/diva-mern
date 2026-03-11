import express from "express";
import Order from "../models/order_md.js";
import User from "../models/user_md.js";
import Product_Md from "../models/product_md.js";
const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const { userid, items, subtotal, shipping, totalAmount } = req.body;
    console.log(items)

    const order = await Order.create({
      userid,
      items,
      subtotal,
      shipping,
      totalAmount,
    });
    
    res.status(201).json({
      message: "Order placed successfully",
      order,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



export default router;
