import axios from "axios";
import { useEffect, useState } from "react";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    axios
      .get("http://localhost:9000/admin/orders")
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  };

  const updateStatus = (id, status) => {
    axios
      .put(`http://localhost:9000/admin/order/${id}/status`, { status })
      .then(() => fetchOrders())
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h2 className="text-3xl font-bold text-red-500 mb-6">
        Orders Management
      </h2>

      {orders.length == 0 ? (
        <p className="text-gray-400 text-center mt-20">
          No orders found
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-700">
            <thead className="bg-gray-900">
              <tr>
                <th className="p-3 border border-gray-700">Order ID</th>
                <th className="p-3 border border-gray-700">User</th>
                <th className="p-3 border border-gray-700">Items</th>
                <th className="p-3 border border-gray-700">Total</th>
                <th className="p-3 border border-gray-700">Status</th>
                <th className="p-3 border border-gray-700">Date</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr
                  key={order._id}
                  className="hover:bg-gray-800"
                >
                  <td className="p-3 border border-gray-700 text-center">
                    {order._id.slice(-6)}
                  </td>

                  <td className="p-3 border border-gray-700">
                    <p className="font-semibold">
                      {order.userid?.username}
                    </p>
                    <p className="text-sm text-gray-400">
                      {order.userid?.email}
                    </p>
                  </td>

                  <td className="p-3 border border-gray-700">
                    {order.items.map((item, i) => (
                      <div key={i} className="mb-2">
                        <p className="font-semibold">
                          {item.productid?.productname}/Price: ₹{item.price}
                        </p>
                        <p className="text-sm text-gray-400">
                          Qty: {item.quantity} | {item.color} | {item.size}
                        </p>
                      </div>
                    ))}
                  </td>

                  <td className="p-3 border border-gray-700 text-red-500 font-bold text-center">
                    ₹{order.totalAmount}
                  </td>

                  <td className="p-3 border border-gray-700 text-center">
                    <select
                      value={order.status}
                      onChange={(e) =>
                        updateStatus(order._id, e.target.value)
                      }
                      className="bg-gray-900 border border-gray-700 px-2 py-1 rounded"
                    >
                      <option>Pending</option>
                      <option>Confirmed</option>
                      <option>Shipped</option>
                      <option>Delivered</option>
                    </select>
                  </td>

                  <td className="p-3 border border-gray-700 text-center text-sm">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
