import axios from "axios";
import { useEffect, useState } from "react";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/admin/usersList")
      .then((res) =>{console.log(res.data); setUsers(res.data)})
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h2 className="text-3xl font-bold text-red-500 mb-6">
        Users Management
      </h2>

      {users.length == 0 ? (
        <p className="text-gray-400 text-center mt-20">
          No users found
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-700">
            <thead className="bg-gray-900">
              <tr>
                <th className="p-3 border border-gray-700">User ID</th>
                <th className="p-3 border border-gray-700">Username</th>
                <th className="p-3 border border-gray-700">Email</th>
                <th className="p-3 border border-gray-700">Joined On</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => {return (
                <tr
                  key={user._id}
                  className="hover:bg-gray-800"
                >
                  <td className="p-3 border border-gray-700 text-center">
                    {user._id.slice(-6)}
                  </td>

                  <td className="p-3 border border-gray-700 text-center">
                    {user.username}
                  </td>

                  <td className="p-3 border border-gray-700 text-center text-gray-300">
                    {user.email}
                  </td>

                  <td className="p-3 border border-gray-700 text-center text-sm">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              )})}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
