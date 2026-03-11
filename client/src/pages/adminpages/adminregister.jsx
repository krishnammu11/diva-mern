import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminRegister() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:9000/admin/register", {
        username,
        password,
      });
      alert(res.data.message);
      navigate("/adminlogin");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-800 to-red-900">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Admin Register
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">
          
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-900 text-white py-2 rounded-lg font-semibold hover:bg-black-800 transition duration-200"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Already admin?
          <span
            onClick={() => navigate("/adminlogin")}
            className="text-slate-700 font-semibold cursor-pointer ml-1 hover:underline"
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}
