import { useState } from "react"
import axios from "axios";
export default function Login() {
    const [users, setUsers]=  useState({
        username:"",
        password:"",
        age:"",
        email:"",
        gender:"",
        phonenumber:""
    });
const [result, setResult]= useState("");
    
    const changeValue=(e)=>{
        setUsers({...users,[e.target.name]:e.target.value});
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        let api="http://localhost:9000/user/register";
        axios
        .post(api,users)
        .then((response)=>{
            console.log(response.data);
            setResult(response.data.message);
        })
        .catch((err)=>{
            console.log(err);
        });
    }
    return(
        <>
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
        style={{backgroundImage:
            "url('https://i.pinimg.com/736x/19/89/36/19893631939c19ec8e539f6128a4f5e0.jpg')",
            }}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 z-10">
            <h2 className="text-3xl font-bold text-center text-gray-800">
                Welcome to Diva
            </h2>
            <p className="text-center text-gray-500 mt-2">
                Signup to your account
            </p>
            <form className="mt-8 space-y-6" onSubmit={
                handleSubmit
            }>
                <div>
                    <label className="block text-gray-700">Username</label>
                    <input type="text"
                    name="username"
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
                    <div>
                    <label className="block text-gray-700">Gender</label>
                    <label className="block text-gray-700">Male</label>
                    <input type="radio"
                     name="gender"
                    onChange={(e)=>{
                        changeValue(e)
                    }}
                    value="male"
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-400 outline-none"
                     />
                       <label className="block text-gray-700">Female</label>
                    <input type="radio"
                     name="gender"
                    onChange={(e)=>{
                        changeValue(e)
                    }}
                    value="female"
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-400 outline-none"
                     />
                </div>
                    <div>
                    <label className="block text-gray-700">Age</label>
                    <input type="number"
                     name="age"
                    onChange={(e)=>{
                        changeValue(e)
                    }}
                    min="18"
                    max={50}
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-400 outline-none"
                     />
                </div>
                    <div>
                    <label className="block text-gray-700">Email</label>
                    <input type="email"
                     name="email"
                    onChange={(e)=>{
                        changeValue(e)
                    }}
                    placeholder="enter your email"
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-400 outline-none"
                     />
                </div>
                    <div>
                    <label className="block text-gray-700">Phone Number</label>
                    <input type="tel"
                     name="phonenumber"
                    onChange={(e)=>{
                        changeValue(e)
                    }}
                    placeholder="enter your phone number"
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-400 outline-none"
                     />
                </div>
                 <button
            type="submit"
            className="w-full py-3 bg-red-900 text-white rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Signup
          </button>
                
            </form>
            
            </div>

        </div>
        </>
    )


}