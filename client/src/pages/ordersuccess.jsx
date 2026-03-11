import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow text-center max-w-md">
        <CheckCircle size={60} className="text-green-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Order Placed Successfully</h2>
        <p className="text-gray-600 mb-6">
          Thank you for shopping with Diva. We are excited to serve you.
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-black text-white px-6 py-2 rounded"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
