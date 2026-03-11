import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function PaymentPage() {
  const [method, setMethod] = useState("COD");
  const navigate = useNavigate();

  const handlePayment = () => {
   let userid=sessionStorage.getItem("user_id");
   axios.delete(`http://localhost:9000/user/deletecart/${userid}`)
   .then((response) => {
       navigate("/ordersuccess");
   })
   .catch((err) => {
     console.log(err);
   })
   

    
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white w-full max-w-xl p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Payment Method</h2>

        {/* COD */}
        <label className="flex items-center gap-3 mb-3">
          <input
            type="radio"
            checked={method === "COD"}
            onChange={() => setMethod("COD")}
          />
          Cash on Delivery
        </label>

        {/* CARD */}
        <label className="flex items-center gap-3 mb-3">
          <input
            type="radio"
            checked={method === "CARD"}
            onChange={() => setMethod("CARD")}
          />
          Credit / Debit Card
        </label>

        {method === "CARD" && (
          <div className="space-y-3 mt-4">
            <input
              type="text"
              placeholder="Card Number"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Expiry (MM/YY)"
              className="w-full border p-2 rounded"
            />
            <input
              type="password"
              placeholder="CVV"
              className="w-full border p-2 rounded"
            />
          </div>
        )}

        <button
          onClick={handlePayment}
          className="w-full bg-red-900 text-white py-3 mt-6 rounded hover:bg-black-900"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}
