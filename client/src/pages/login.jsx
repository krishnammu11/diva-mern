
import { NavLink} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CountGol } from "./countcontext";


export default function Login() {
  const navigate=useNavigate();
  const {setIsLogin}=CountGol();
   const [users, setUsers]=  useState({
       email:"",
       password:"",

   })
    const [result, setResult]= useState("");
    
    const changeValue=(e)=>{
        setUsers({...users,[e.target.name]:e.target.value});
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        let api="http://localhost:9000/user/login";
        axios
        .post(api,users)
        .then((response)=>{
            console.log(response.data);
            setResult(response.data.message);
            setIsLogin(true);
            sessionStorage.setItem("user_id",response.data.user_id);
            navigate("/")
        })
        .catch((err)=>{
            console.log(err);
        });
    }
    
    return(
        <>
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
        style={{backgroundImage:
            "url('https://i.pinimg.com/1200x/91/1f/df/911fdffdf900c6eb8a90582c4a471724.jpg')",
            }}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 z-10">
            <h2 className="text-3xl font-bold text-center text-gray-800">
                Welcome back to Diva
            </h2>
            <p className="text-center text-gray-500 mt-2">
                Login to your account
            </p>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-gray-700">email</label>
                    <input type="text"
                    name="email"
                    onChange={(e)=>{
                      changeValue(e)
                    }}

                    
                    placeholder="enter your username"
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-400 outline-none"
                     />
                </div>
                 <div>
                    <label className="block text-gray-700">Password</label>
                    <input type="password"
                       name="password"
                    onChange={(e)=>{
                      changeValue(e)
                    }}
                    placeholder="enter your password"
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-400 outline-none"
                     />
                </div>
                 <button
            type="submit"
            className="w-full py-3 bg-red-900 text-white rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Login
          </button>
                
            </form>
            <p className="text-center mt-6 text-gray-600">
          Don't have an account?
          <NavLink to="/register" className="text-red-900 font-semibold">
            Register
          </NavLink>
        </p>
         </div>
        </div>
        </>
    )


}