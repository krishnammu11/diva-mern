import express from "express";
import mongoose from "mongoose";
import cors from "cors";


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use('/uploads',express.static('uploads'));
import User_Router from "./routers/user_router.js";
import Order from "./routers/order.js";
import adminRouter from "./routers/admin.js";


mongoose.connect(
    "mongodb+srv://krishnathira1011_db_user:2NqZpTzefh53SXjA@cluster0.dwmpsje.mongodb.net/ecommerceDB?appName=Cluster0"
)
  
.then(() =>console.log("mongoDB connected"))
.catch((err) => console.log(err));

app.use("/user",User_Router);
app.use("/order",Order);
app.use("/admin",adminRouter);
const port =9000;
app.listen(port, ()=>{
  console.log("server is running on port", port);
});