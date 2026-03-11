import { useState, useEffect } from "react";
import axios from "axios";
import { CountGol } from "./countcontext";

export default function ViewProduct() {
  const [products, setProducts] = useState([]);
  const { setCount } = CountGol();

  useEffect(() => {
    axios
      .get("http://localhost:9000/user/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const addToCart = (product_id) => {
    const userid = sessionStorage.getItem("user_id");

    if (!userid) {
      alert("Please login first");
      return;
    }

    axios
      .post(
        "http://localhost:9000/user/addtocart",
        {},
        { headers: { user_id: userid, productid: product_id } }
      )
      .then(() => {
        setCount((prev) => prev + 1);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-xl font-semibold text-center mb-10">
        Hottest Collection
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((pr) => (
          <div key={pr._id} className="bg-white shadow rounded-lg p-6">
            <img
              src={`http://localhost:9000/${pr.imageurl}`}
              alt={pr.productname}
              className="w-full h-80 object-cover rounded"
            />
            <h2 className="font-semibold text-lg mt-3">{pr.productname}</h2>
            <p className="text-gray-600">₹{pr.price}</p>
            <p className="text-sm text-gray-500">
              Category: {pr.category}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              {pr.description}
            </p>
            <button
              onClick={() => addToCart(pr._id)}
              className="mt-4 w-full py-2 bg-black text-white rounded-lg hover:bg-red-800 transition"
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
