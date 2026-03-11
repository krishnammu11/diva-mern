import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OrderPage() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:9000/user/cart", {
        headers: { userid: sessionStorage.getItem("user_id") },
      })
      .then((res) => {
        setCart(res.data);

        let sum = 0;
        res.data.forEach((item) => {
          sum += item.productid.price * item.quantity;
        });
        setTotal(sum);
      });
  }, []);

  const placeOrder = () => {
    const orderItems = cart.map((item) => ({
      productid: item.productid._id,
      quantity: item.quantity,
      color: item.color,
      size: item.size,
    }));

    axios
      .post("http://localhost:9000/api/order", {
        batchid: "65f8dummybatchid123",
        userid: sessionStorage.getItem("user_id"),
        orderitems: orderItems,
        totalamount: total,
      })
      .then(() => alert("Order placed successfully"))
      .catch(() => alert("Order failed"));
  };
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-6">Order Summary</h1>

        {cart.map((item) => (
          <div key={item._id} className="flex items-center gap-6 border-b py-4">
            <img
              src={`http://localhost:9000/${item.productid.imageurl}`}
              alt={item.productid.productname}
              className="w-24 h-28 object-cover rounded"
            />

            <div className="flex-1">
              <h2 className="font-semibold text-lg">
                {item.productid.productname}
              </h2>
              <p className="text-sm text-gray-500">
                Color: {item.color} | Size: {item.size}
              </p>
              <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
            </div>

            <p className="font-semibold text-lg">
              ₹{item.productid.price * item.quantity}
            </p>
          </div>
        ))}

        <div className="flex justify-between mt-6 text-xl font-bold">
          <span>Total Amount</span>
          <span>₹{total}</span>
        </div>

        <button
          onClick={() => navigate("/addresspage")}
          className="mt-6 w-full bg-black text-white py-3 rounded hover:bg-red-800 transition"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
