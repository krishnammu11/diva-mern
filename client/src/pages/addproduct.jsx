import { useState } from "react";
import axios from "axios";

export default function AddProduct() {
  const [product, setProduct] = useState({});
  const [productimage, setProductImage] = useState("");
  const [result, setResult] = useState("");

  const changeValue = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let api = "http://localhost:9000/user/addproduct";
    let formdata = new FormData();
    formdata.append("productname", product.productname);
    formdata.append("price", product.price);
    formdata.append("category", product.category);
    formdata.append("description", product.description);
    formdata.append("image", productimage[0]);

    axios
      .post(api, formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        setResult(response.data.message);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {/* Full Background */}
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/ee/22/0f/ee220f9abb8b4285d2d044ebb209cbfe.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Card */}
        <div className="relative w-full max-w-md bg-white/90 backdrop-blur-md shadow-2xl rounded-xl p-6">
          <h1 className="text-2xl font-bold text-center mb-4">
            Add New Product
          </h1>

          {result && (
            <p className="text-green-600 text-center font-medium mb-3">
              {result}
            </p>
          )}

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="productname"
              placeholder="Product Name"
              onChange={changeValue}
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />

            <input
              type="number"
              name="price"
              placeholder="Price"
              onChange={changeValue}
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />

            <input
              type="text"
              name="category"
              placeholder="Category"
              onChange={changeValue}
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />

            <textarea
              name="description"
              placeholder="Product Description"
              onChange={changeValue}
              rows="3"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            ></textarea>

            <input
              type="file"
              name="image"
              onChange={(e) => setProductImage(e.target.files)}
              className="border border-gray-300 p-2 rounded bg-white"
              required
            />

            <button
              type="submit"
              className="bg-red-900 text-white py-2 rounded font-semibold hover:bg-black-700 transition"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
