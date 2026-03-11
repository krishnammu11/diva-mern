import express from "express";
import bcrypt from "bcrypt";
import multer from "multer";
const storages = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, "product_"+uniqueSuffix+"_"+file.originalname)
  }
})
const upload=multer({storage:storages});


const router = express.Router();

import User from "../models/user_md.js";
import Product_Md from "../models/product_md.js";
import Cart from "../models/cart_md.js";
import Order from "../models/order_md.js";
import Address from "../models/address_md.js";

router.post("/register", async (req, res) => {
  try {
    const { username, gender, age, email, phonenumber, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    await User.create({
      username,
      gender,
      age,
      email,
      phonenumber,
      password: passwordHash,
      status: "active"
    });

    return res.status(201).json({ message: "User registered successfully" });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Registration failed" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user= await User.findOne({email});
    if(!user){
      return res.status(404).json({message:"user not found"});
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    return res.status(200).json({ message: "Login successful" ,user_id:user._id});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Login failed" });
  }
})

router.post("/addproduct",upload.single("image"),async(req, res)=>{
  
    const {productname,price,category,description}=req.body;
    const imageurl=req.file.path;
    const product = await Product_Md.create({
      productname,
      price,
      category,
      description,
      imageurl

    })
    .then((data)=>{
      res.status(200).json({
        message:"product added successfully"
      })
      .catch((err)=>{
        res.status(500).json({message:"product add failed"})
      })
      console.log("file",req.file);
      console.log("body",req.body);

    })
  }
)
router.get ("/products",async(req, res) => {
   try{
    const products= await Product_Md.find();
    res.json(products);
   }
   catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Registration failed" });
   }
})

router.post("/addtocart", async (req,res)=>{
  console.log(req.headers);
  const {user_id,productid}=req.headers;
  const cartdata=await Cart.find({userid:user_id});
  const cartcount=cartdata.length;
  const existproduct=await Cart.findOne({userid:user_id,productid});
  if(existproduct){
    return res.status(400).json({message:"product already exist in cart"})
  }
  const cart=await Cart.create({
    userid:user_id,
    productid,
    quantity:1,
    color:"black",
    size:"S"
  })
  .then((data)=>{
    
    res.status(200).json({message:" added to cart successfully", "cartcount":cartcount})
  })
    .catch((err)=>{ res.status(500).json({message:" add  to cart failed"})})
  
})
router.get("/cartcount",async(req, res) => {
  try{
   const {userid}=req.headers;
   const cart= await Cart.find({userid});
   const cartcount=cart.length;
   console.log("cart length",cartcount);
   res.json(cartcount);
  }
  catch (error) {
   console.error(error);
   return res.status(500).json({ message: "Registration failed" });
  }
 }  )

router.get ("/cart",async(req, res) => {
   try{
    const {userid}=req.headers;
    const cart= await Cart.find({userid}).populate("productid");
    res.json(cart);
   }
   catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Registration failed" });
   }
})
router.delete("/cart/:id", async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.json({ message: "Product removed from cart" });
  } catch (error) {
    res.status(500).json({ message: "Failed to remove product" });
  }
});
router.put("/updatecart/:id", async (req, res) => {
  try {
    
    const { quantity,color,size } = req.body;
    await Cart.findByIdAndUpdate(req.params.id, { quantity,color,size });
    res.json({ message: "Product quantity updated in cart" });
   
    
  } catch (error) {
    res.status(500).json({ message: "Failed to update product quantity" });
  }
})

router.post("/order", async (req, res) => {
  try {
    const {
      batchid,
      userid,
      orderitems,
      totalamount
    } = req.body;

    if (!orderitems || orderitems.length === 0) {
      return res.status(400).json({ message: "No order items found" });
    }

    const newOrder = await Order.create({
      batchid,
      userid,
      orderitems,
      status: "Placed",
      orderdate: new Date(),
      deliverydate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), 
      totalamount
    });

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order: newOrder
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to place order" });
  }
});


// POST: Add Address
router.post("/addressadd", async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    
    // Check if userid is present
    if (!req.body.userid) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const address = await Address.create(req.body);
    res.status(201).json(address);
  } catch (err) {
    console.error("Error adding address:", err);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
});

// GET: Get by User ID
router.get("/address/:userid", async (req, res) => {
  try {
    const addresses = await Address.find({ userid: req.params.userid });
    res.json(addresses);
  } catch (err) {
    res.status(500).json({ message: "Error fetching addresses" });
  }
});

// PUT: Update
router.put("/addressupdate/:id", async (req, res) => {
  try {
    const updated = await Address.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: "Update failed", error: err.message });
  }
});

// DELETE
router.delete("/addressdelete/:id", async (req, res) => {
  try {
    await Address.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed" });
  }
});
router.delete("/deletecart/:id", async (req, res) => {
  try {
    let userid=req.params.id;
    await Cart.deleteMany({userid});
    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to remove product" });
  }
}); 

export default router;
