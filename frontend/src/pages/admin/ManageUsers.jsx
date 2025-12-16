import { useState } from "react";

const ManageUsers = () => {
  const users = [
    {
      _id: 1,
      name: "John Doe",
      email: "john@gmail.com",
      role: "Admin",
      history: [
        { action: "Logged in", date: "2025-12-01" },
        { action: "Updated profile", date: "2025-12-05" },
        { action: "Changed password", date: "2025-12-10" },
      ],
    },
  ];

  const [selectedUserHistory, setSelectedUserHistory] = useState(null);

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      console.log(`Delete user with ID: ${userId}`);
    }
  };

  const handleInfoUser = (userId) => {
    const user = users.find((user) => user._id === userId);
    setSelectedUserHistory(user.history); // Display user history on click
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">User Management </h2>
      <div className="overflow-x-hidden shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                  {user.name}
                </td>
                <td className="p-4">{user.email}</td>
                <td className="p-4 gap-5">
                  <button
                    onClick={() => handleInfoUser(user._id)}
                    className="bg-blue-400 text-white px-2 py-1 rounded text-sm hover:bg-blue-500"
                  >
                    More Info
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Show user history */}
      {selectedUserHistory && (
        <div className="mt-6 p-4 border rounded shadow-lg">
          <h3 className="text-xl font-semibold mb-4">User History</h3>
          <ul className="list-disc pl-6">
            {selectedUserHistory.map((item, index) => (
              <li key={index} className="text-gray-700">
                <span className="font-semibold">{item.action}</span> -{" "}
                {item.date}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
