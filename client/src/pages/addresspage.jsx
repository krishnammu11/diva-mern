import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddressPage() {
  const navigate = useNavigate();
  const userid = sessionStorage.getItem("user_id");

  const [addresses, setAddresses] = useState([]);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    phonenumber: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "India",
  });

 
  useEffect(() => {
    axios
      .get(`http://localhost:9000/user/address/${userid}`)
      .then((res) => setAddresses(res.data))
      .catch((err) => console.error(err));
  }, [userid]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  
  const saveAddress = async () => {
    try {
      if (editId) {
        const res = await axios.put(
          `http://localhost:9000/user/addressupdate/${editId}`,
          form
        );

        setAddresses(
          addresses.map((a) => (a._id === editId ? res.data : a))
        );
        setEditId(null);
      } else {
        const res = await axios.post(
          "http://localhost:9000/user/addressadd",
          { ...form, userid }
        );

        setAddresses([...addresses, res.data]);
      }

      // RESET FORM
      setForm({
        name: "",
        phonenumber: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        country: "India",
      });
    } catch (err) {
      console.error("SAVE ERROR:", err.response?.data || err.message);
    }
  };

  const editAddress = (addr) => {
    setForm(addr);
    setEditId(addr._id);
  };

  const deleteAddress = async (id) => {
    await axios.delete(`http://localhost:9000/user/addressdelete/${id}`);
    setAddresses(addresses.filter((a) => a._id !== id));
  };

  return (
    <div className="min-h-screen bg-[#faf7f4] py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-6">Delivery Address</h2>

        {addresses.map((addr) => (
          <div
            key={addr._id}
            className="border rounded-lg p-5 mb-4 flex justify-between"
          >
            <div>
              <p className="font-semibold">{addr.name}</p>
              <p className="text-sm text-gray-600">
                {addr.address}, {addr.city}, {addr.state} - {addr.pincode}
              </p>
              <p className="text-sm">Phone: {addr.phonenumber}</p>

              <div className="flex gap-4 mt-3">
                <button
                  onClick={() => editAddress(addr)}
                  className="text-blue-600 text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteAddress(addr._id)}
                  className="text-red-600 text-sm"
                >
                  Delete
                </button>
              </div>
            </div>

            <button
              onClick={() => navigate("/paymentpage", { state: addr })}
              className="bg-black text-white px-6 py-2 rounded-full"
            >
              Deliver Here
            </button>
          </div>
        ))}

        <h3 className="text-lg font-semibold mt-8 mb-4">
          {editId ? "Edit Address" : "Add New Address"}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} className="border p-3 rounded" />
          <input name="phonenumber" placeholder="Phone" value={form.phonenumber} onChange={handleChange} className="border p-3 rounded" />
          <input name="address" placeholder="House / Street" value={form.address} onChange={handleChange} className="border p-3 rounded col-span-2" />
          <input name="city" placeholder="City" value={form.city} onChange={handleChange} className="border p-3 rounded" />
          <input name="state" placeholder="State" value={form.state} onChange={handleChange} className="border p-3 rounded" />
          <input name="pincode" placeholder="Pincode" value={form.pincode} onChange={handleChange} className="border p-3 rounded" />
        </div>

        <button
          onClick={saveAddress}
          className="mt-6 bg-black text-white px-10 py-3"
        >
          {editId ? "Update Address" : "Save Address"}
        </button>
      </div>
    </div>
  );
}  