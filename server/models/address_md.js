import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,   
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      default: "India",
    },
    pincode: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Address", addressSchema);
