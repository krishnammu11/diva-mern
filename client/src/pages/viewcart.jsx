import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function ViewCart() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const qtyRef = useRef({});
  const colorRef = useRef({});
  const sizeRef = useRef({});

  useEffect(() => {
    let api = "http://localhost:9000/user/cart";
    axios
      .get(api, {
        headers: { userid: sessionStorage.getItem("user_id") },
      })
      .then((response) => {
        const updated = response.data.map((item) => ({
          ...item,
          qty: item.quantity || 1,
        }));
        setProducts(updated);
      })
      .catch((err) => console.log(err));
  }, []);

  const removeFromCart = (cartId) => {
    axios
      .delete(`http://localhost:9000/user/cart/${cartId}`)
      .then(() => {
        setProducts((prev) => prev.filter((item) => item._id !== cartId));
      })
      .catch((err) => console.log(err));
  };

  const saveChanges = (item) => {
    const updatedData = {
      quantity: qtyRef.current[item._id] ?? item.qty,
      color: colorRef.current[item._id] ?? item.color,
      size: sizeRef.current[item._id] ?? item.size,
    };

    axios
      .put(`http://localhost:9000/user/updatecart/${item._id}`, updatedData)
      .then(() => {
        alert("Cart updated successfully");

        setProducts((prev) =>
          prev.map((p) => (p._id === item._id ? { ...p, ...updatedData } : p))
        );
      })
      .catch((err) => console.log(err));
  };
  const totalPrice = products.reduce(
    (sum, item) => sum + item.productid.price * item.quantity,
    0
  );

  const proceedToCheckout = async () => {
  const userid = sessionStorage.getItem("user_id");

  const orderItems = products.map((item) => ({
    productid: item.productid._id,
    quantity: qtyRef.current[item._id] ?? item.quantity,
    color: colorRef.current[item._id] ?? item.color,
    size: sizeRef.current[item._id] ?? item.size,
    price: item.productid.price,
  }));

  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = 50;
  const totalAmount = subtotal + shipping;

  try {
    await axios.post("http://localhost:9000/order/create", {
      userid,
      items: orderItems,
      subtotal,
      shipping,
      totalAmount,
    })
    .then((response)=>{
         sessionStorage.setItem("order_id",response.data.order._id);
    navigate("/addresspage");
    })
    
 
  } catch (err) {
    console.log(err);
    alert("Failed to place order");
  }
};


  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {products.length === 0 ? (
          /* empty cart*/
          <div className="md:col-span-3 flex flex-col items-center justify-center py-20">
            <h2 className="text-2xl font-semibold text-gray-600">
              Your bag feels lighter☹️
            </h2>
            <p className="text-gray-400 mt-2">
             Looks like you haven’t added anything to your bag. Let’s change that.
            </p>
            <button
              onClick={() => navigate("/")}
              className="mt-6 px-6 py-2 bg-black text-white rounded-lg"
            >
              Back to Shopping
            </button>
          </div>
        ) : (
          /* cart*/
          <div className="md:col-span-2 space-y-6">
            {products.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-xl shadow p-4 flex gap-4"
              >
                <img
                  src={`http://localhost:9000/${item.productid.imageurl}`}
                  alt={item.productid.productname}
                  className="w-24 h-28 object-cover rounded"
                />

                <div className="flex-1">
                  <h2 className="font-semibold text-lg">
                    {item.productid.productname}
                  </h2>
                  <p className="text-gray-500">₹{item.productid.price}</p>

                  <div className="flex flex-wrap gap-4 mt-3">
                    {/* Quantity */}
                    <div>
                      <label className="text-sm text-gray-500">Quantity</label>
                      <input
                      ref={qtyRef}
                        type="number"
                        min="1"
                        max="10"
                        defaultValue={item.quantity}
                        
                        onChange={(e) => {
                          qtyRef.current[item._id] = Number(e.target.value);
                        }}
                        className="border rounded px-2 py-1 w-16"
                      />
                    </div>

                    {/* Color */}
                    <div>
                      <label className="text-sm text-gray-500">Color</label>
                      <select
                      ref={colorRef}
                        defaultValue={item.color}
                        onChange={(e) => {
                          colorRef.current[item._id] = e.target.value;
                        }}
                        className="border rounded px-2 py-1"
                      >
                        <option>Red</option>
                        <option>Green</option>
                        <option>Blue</option>
                      </select>
                    </div>

                    {/* Size */}
                    <div>
                      <label className="text-sm text-gray-500">Size</label>
                      <select
                        defaultValue={item.size}
                        ref={sizeRef}
                        onChange={(e) => {
                          sizeRef.current[item._id] = e.target.value;
                        }}
                        className="border rounded px-2 py-1"
                      >
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-semibold">
                    ₹
                    {item.productid.price *
                      (qtyRef.current[item._id] ?? item.qty)}
                  </p>

                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-500 text-sm mt-2 hover:underline block"
                  >
                    Remove from cart
                  </button>

                  <button
                    onClick={() => saveChanges(item)}
                    className="text-green-500 text-sm mt-2 hover:underline"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            ))}
            <div className="bg-white rounded-xl shadow p-5 h-fit">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>₹{totalPrice}</span>
              </div>

              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>₹50</span>
              </div>

              <hr className="my-3" />

              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{totalPrice + 50}</span>
              </div>

              <button onClick={proceedToCheckout}
               className="w-full bg-black text-white py-3 mt-6 rounded hover:bg-gray-800 transition">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
