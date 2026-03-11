import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logodiva.png";
import { User, Search, ShoppingBag, Menu, X ,LogOut} from "lucide-react";

import { useNavigate } from "react-router-dom";
export default function  AdminHeader() {
   const [isOpen, setIsOpen] = useState(false);
  const nav=useNavigate();
    
  return (
    <>
      <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
        
        <div className="max-w-7xl mx-auto py-4 flex items-center justify-between px-4 md:px-6">
          
        
          <div className="hidden md:block w-1/3"></div>

        
          <div className="flex justify-center w-1/2 md:w-1/3">
            <NavLink to="/dashboard">
              <img src={logo} alt="logo" className="h-20 object-contain " />
            </NavLink>
          </div>

  
          <div className="hidden md:flex w-1/3 justify-end items-center gap-6 text-gray-700">
          
          {islogin?
            <button  onClick={()=>{
              sessionStorage.removeItem("user_id");
              setIsLogin(false);
              nav("/login");

            }} className="hover:text-red-900">
             
              <LogOut className="w-6 h-6" />
               
              
            </button>
            :
            <NavLink to="/login" className="hover:text-red-900">
              <User className="w-6 h-6" />
            </NavLink>
            }

        
              {/* <NavLink to="/searchproduct" className="hover:text-red-900">
              <Search className="w-6 h-6" />
              </NavLink>
             */}

            {/* <NavLink to="/viewcart" className="hover:text-red-900 inline-flex">
                     
              <ShoppingBag className="w-6 h-6"/>
                  <span className="text-wrap  font-bold" > {count}</span>
              

            </NavLink> */}
          </div>

      
          <div className="flex md:hidden items-center gap-4 text-gray-700">
            <NavLink to="/login" className="hover:text-red-900">
            <User className="w-6 h-6" />
            </NavLink>
            
{/*             
            <NavLink to="/cartpage" className="hover:text-red-900">
              <ShoppingBag className="w-6 h-6" />
            </NavLink> */}
          
          </div>
        </div>

        {/* <nav
          className={`md:border-t border-gray-200 transition-all duration-300 overflow-hidden 
          ${isOpen ? "max-h-96 py-4" : "max-h-0 md:max-h-full"}
        `}
        >
          <ul className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-12 text-sm font-medium text-gray-800 pb-4 md:py-4">
            <NavLink
              to="/"
              className="hover:text-red-900"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className="hover:text-red-900"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </NavLink>

            <NavLink
              to="/saree"
              className="hover:text-red-900"
              onClick={() => setIsOpen(false)}
            >
              All Sarees
            </NavLink>

            <NavLink
              to="/lehenga"
              className="hover:text-red-900"
              onClick={() => setIsOpen(false)}
            >
              All Lehengas
            </NavLink>

            <NavLink
              to="/jewels"
              className="hover:text-red-900"
              onClick={() => setIsOpen(false)}
            >
              Jewellery
            </NavLink>

            <NavLink
              to="/bestseller"
              className="hover:text-red-900"
              onClick={() => setIsOpen(false)}
            >
              Best Seller
            </NavLink>

            <NavLink
              to="/addproduct"
              className="hover:text-red-900"
              onClick={() => setIsOpen(false)}
            >
              add product
            </NavLink>
           
          </ul>
        </nav> */}
      </header>
    </>
  );
}
