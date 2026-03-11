import { Link, Outlet } from "react-router-dom";
import {useState,useEffect} from 'react'
import axios from "axios";
export default function Dashboard() {
  const [revenue,setRevenue]=useState("");
  const [ordercount,setOrdercount]=useState("");
  const [usercount,setUsercount]=useState("");
  const [productcount,setProductcount]=useState("");

  useEffect(() => {
    axios.get("http://localhost:9000/admin/analyis").then((res) =>{
      
      setRevenue(res.data.revenue);
      setOrdercount(res.data.ordercount);
      setUsercount(res.data.usercount);
      setProductcount(res.data.productcount);
    }
    );


  
  },[]);
  return (
    <div className="min-h-screen bg-black text-white flex">
      
      <aside className="w-64 bg-gray-900 p-6">
        <h1 className="text-2xl font-bold text-red-500 mb-8">
          Admin Panel
        </h1>

        <nav className="space-y-4">
          <Link to="/dashboard/adminproduct" className="block hover:text-red-500">
            Products
          </Link>
          <Link to="/dashboard/adminaddproduct" className="block hover:text-red-500">
            Add Product
          </Link>
          <Link to="/dashboard/adminorder" className="block hover:text-red-500">
            Orders
          </Link>
          <Link to="/dashboard/adminuser" className="block hover:text-red-500">
            Users
          </Link>
          <Link
            to="/"
            className="block text-red-500 hover:text-red-600"
          >
            Logout
          </Link>
        </nav>
      </aside>

     
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-semibold mb-8">
          Dashboard Overview
        </h2>

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <DashboardCard title="Total Products" value={productcount||0} />
          <DashboardCard title="Total Orders" value={ordercount||0} />
          <DashboardCard title="Total Users" value={usercount||0} />
          <DashboardCard title="Revenue" value={`₹${revenue||"0"}`} />

        </div>
        <div>
          <Outlet/>
        </div>
      </main>
    </div>
  );
}

function DashboardCard({ title, value }) {
  return (
    <div className="bg-gray-900 border border-red-600 rounded-xl p-6 shadow-lg">
      <h3 className="text-lg text-gray-300">{title}</h3>
      <p className="text-2xl font-bold text-red-500 mt-2">{value}</p>
    </div>
  );
}
