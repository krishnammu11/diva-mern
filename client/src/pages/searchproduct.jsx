
import { useState, useEffect,useMemo } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { X } from "lucide-react";

export default function SearchProduct() {
  const [products, setProducts] = useState([]);
  const [searchtext , setSearchtext] = useState('');
  const navigate=useNavigate();

  useEffect(() => {
    let api = "http://localhost:9000/user/products";
    axios
      .get(api)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        navigate(-1);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [navigate]);


  const filterProduct=useMemo(()=>{
    return products.filter((pr)=>{
      return pr.productname.toLowerCase().includes(searchtext.toLowerCase())
    })
  },[products,searchtext])

  return (
    <>
     <div
        className="fixed inset-0 z-[999] bg-black/50 overflow-auto"
        onClick={() => navigate(-1)}
      >
       
          {/* CLOSE BUTTON */}
         
        
      </div>
    <div className="" style={{
        position:"absolute",
        top:"0",
        left:"0",
        width:"100%",
        height:"100%",
        zIndex:"999999",
        backgroundColor:"rgba(0,0,0,0.5)",
        overflow:"auto"
    }}> 
    
      <div className="max-w-6xl mx-auto px-6 py-10 ">
        
        <h1 className="text-2xl font-bold mb-6 z-[99999]"  onClick={() =>{
              alert("Return to previous page")
             navigate("/addproduct")}}> product</h1>
              <button
            onClick={() =>{
              
             navigate(-1)}}

            className="absolute top-3 right-3
                       bg-white text-gray-700 
                       rounded-full w-10 h-10 
                       flex items-center justify-center 
                       shadow hover:bg-red-100 z-[9999999]"
          >
            <X size={22} />
          </button>
        <div className="w-full md:w-200 lg:w-200 bg-slate-200 rounded-md p-4 shadow ml-auto mr-auto m-10">
      <input type="text" placeholder="Search by product name" className="w-full p-2 rounded-md border-none 
      focus:outline-none  text-center"
      onChange={(e)=>{
          setSearchtext(e.target.value)
      }}/>
            </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          {filterProduct.map((pr) => {
            return (
              <div key={pr._id} className="bg-white shadow rounded-lg p-6">
                <img
                  src={`http://localhost:9000/${pr.imageurl}`}
                  alt="{pr.productname}"
                  className="w-full h-80 object-cover rounded"
                />
                <h2 className="font-semibold text-lg mt-3">{pr.productname}</h2>
                <p className="text-gray-600">₹{pr.price}</p>
                <p className="text-sm text-gray-500">Category: {pr.category}</p>
                <p className="text-sm text-gray-600 mt-2">{pr.description}</p>
                <p><button className="mt-4 w-full py-2 bg-black text-white rounded-lg hover:bg-red-800 transition">Add to cart</button></p>
              </div>
            );
          })}
        </div>
        </div>
      </div>
      
    </>
  );
}
