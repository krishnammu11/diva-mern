import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);

  // Fetch all products from backend
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("http://localhost:9000/user/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };

  // Delete product
  const deleteProduct = (id) => {
    if (!window.confirm("Delete this product?")) return;

    axios
      .delete(`http://localhost:9000/admin/product/${id}`)
      .then(() => fetchProducts())
      .catch((err) => console.log(err));
  };

  // Update product
  const updateProduct = () => {
    axios
      .put(`http://localhost:9000/admin/product/${editProduct._id}`, {
        ...editProduct,
        price: Number(editProduct.price), // Ensure price is a number
      })
      .then(() => {
        setEditProduct(null);
        fetchProducts();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Admin – Products</h2>

      {/* Products Table */}
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Image</th>
            <th className="p-2">Name</th>
            <th className="p-2">Price</th>
            <th className="p-2">Category</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p._id} className="border text-center">
              <td className="p-2">
                <img
                  src={`http://localhost:9000/${p.imageurl}`}
                  alt={p.productname}
                  className="w-16 h-16 object-cover mx-auto rounded"
                />
              </td>
              <td className="p-2">{p.productname}</td>
              <td className="p-2">₹{p.price}</td>
              <td className="p-2">{p.category}</td>
              <td className="p-2">
                <button
                  className="mr-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-800 transition"
                  onClick={() => setEditProduct(p)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-800 transition"
                  onClick={() => deleteProduct(p._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* EDIT MODAL */}
      {editProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setEditProduct(null)}
        >
          <div
            className="bg-white p-6 rounded w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold mb-4">Edit Product</h3>

            {/* Image Preview */}
            {editProduct.imageurl && (
              <img
                src={`http://localhost:9000/${editProduct.imageurl}`}
                alt={editProduct.productname}
                className="w-full h-40 object-cover rounded mb-4"
              />
            )}

            {/* Edit Form */}
            <input
              type="text"
              className="border p-2 w-full mb-2"
              placeholder="Product Name"
              value={editProduct.productname}
              onChange={(e) =>
                setEditProduct({ ...editProduct, productname: e.target.value })
              }
            />

            <input
              type="number"
              className="border p-2 w-full mb-2"
              placeholder="Price"
              value={editProduct.price}
              onChange={(e) =>
                setEditProduct({ ...editProduct, price: e.target.value })
              }
            />

            <input
              type="text"
              className="border p-2 w-full mb-2"
              placeholder="Category"
              value={editProduct.category}
              onChange={(e) =>
                setEditProduct({ ...editProduct, category: e.target.value })
              }
            />

            <textarea
              className="border p-2 w-full mb-2"
              placeholder="Description"
              value={editProduct.description || ""}
              onChange={(e) =>
                setEditProduct({ ...editProduct, description: e.target.value })
              }
            />

            <input
              type="text"
              className="border p-2 w-full mb-4"
              placeholder="Image URL"
              value={editProduct.imageurl}
              onChange={(e) =>
                setEditProduct({ ...editProduct, imageurl: e.target.value })
              }
            />

            <div className="flex justify-end space-x-2">
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
                onClick={() => setEditProduct(null)}
              >
                Cancel
              </button>
              <button
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800 transition"
                onClick={updateProduct}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
