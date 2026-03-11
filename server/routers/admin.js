import express from "express"
import bcrypt from "bcrypt";
const router = express.Router();

import Admin from "../models/admin.js";
import Product_Md from "../models/product_md.js";
import Order from "../models/order_md.js";
import User from "../models/user_md.js";

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    await Admin.create({
      username,
      password: passwordHash,
    });

    res.status(201).json({ message: "Admin registered successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    const passwordMatch = await bcrypt.compare(password, admin.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({
      message: "Login successful",
      admin_id: admin._id,
    });
  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
});

// Update product
router.put('/product/:id', async (req, res) => {
  try {
    const updated = await Product_Md.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete product
router.delete('/product/:id', async (req, res) => {
  try {
    await Product_Md.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//order
router.get("/orders", async (req, res) => {
  const orders = await Order.find()
    .populate("userid", "username email")
    .populate("items.productid","productname");
  console.log(orders)
  res.json(orders);
});


router.put("/order/:id/status", async (req, res) => {
  const { status } = req.body;

  if(!status) {
    return res.status(400).json({ message: "Status is required" });
  }
  await Order.findByIdAndUpdate(req.params.id, { status });
  res.json({ message: "Order status updated" });
});

//user

router.get("/usersList", async (req, res) => {
  try {
    console.log("user list");
    const users = await User.find();
    console.log(users);
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch users" });
  }
});

router.get("/analyis", async (req, res) => {
  try {
    console.log("analyis");
    const data = await Order.aggregate([
      {
        $group: {
          _id:"null",
          revenue: { $sum: "$totalAmount" },
          
        },
      },
    ]);
    const ordercount = await Order.countDocuments();
    const productcount = await Product_Md.countDocuments();
    const usercount = await User.countDocuments();
    console.log(data[0].revenue)
    res.json({"revenue":data[0].revenue,"ordercount":ordercount,"productcount":productcount,"usercount":usercount});
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch data" });
  }
});

export default router