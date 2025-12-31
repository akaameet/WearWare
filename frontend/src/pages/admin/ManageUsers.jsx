import { useState } from "react";

const ManageUsers = () => {
  const [users, setUsers] = useState([
    {
      _id: 1,
      name: "John Doe",
      email: "john@gmail.com",
      role: "Admin",
      history: [
        { action: "Logged in", date: "2025-12-01" },
        { action: "Updated profile", date: "2025-12-05" },
      ],
    },
  ]);

  const [selectedUserHistory, setSelectedUserHistory] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "User",
  });

  /* ---------- Add / Update ---------- */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingUser) {
      // UPDATE
      setUsers((prev) =>
        prev.map((u) => (u._id === editingUser._id ? { ...u, ...formData } : u))
      );
    } else {
      // ADD
      setUsers((prev) => [
        ...prev,
        {
          _id: Date.now(),
          ...formData,
          history: [{ action: "Account created", date: "Today" }],
        },
      ]);
    }

    setFormData({ name: "", email: "", role: "User" });
    setEditingUser(null);
  };

  /* ---------- Delete ---------- */
  const handleDeleteUser = (userId) => {
    if (window.confirm("Delete this user?")) {
      setUsers(users.filter((u) => u._id !== userId));
    }
  };

  /* ---------- Edit ---------- */
  const handleEditUser = (user) => {
    setEditingUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      role: user.role,
    });
  };

  /* ---------- History ---------- */
  const handleInfoUser = (userId) => {
    const user = users.find((u) => u._id === userId);
    setSelectedUserHistory(user.history);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>

      {/* ADD / EDIT FORM */}
      <form onSubmit={handleSubmit} className="mb-6 flex gap-3">
        <input
          required
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          required
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="border p-2 rounded"
        />
        <select
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          className="border p-2 rounded"
        >
          <option>User</option>
          <option>Admin</option>
        </select>
        <button className="bg-black text-white px-4 rounded">
          {editingUser ? "Update" : "Add"}
        </button>
      </form>

      {/* USERS TABLE */}
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Role</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id} className="border-t">
              <td className="p-3">{u.name}</td>
              <td className="p-3">{u.email}</td>
              <td className="p-3">{u.role}</td>
              <td className="p-3 flex gap-2">
                <button
                  onClick={() => handleInfoUser(u._id)}
                  className="bg-blue-500 text-white px-2 rounded"
                >
                  Info
                </button>
                <button
                  onClick={() => handleEditUser(u)}
                  className="bg-yellow-500 text-white px-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteUser(u._id)}
                  className="bg-red-500 text-white px-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* HISTORY */}
      {selectedUserHistory && (
        <div className="mt-6 border p-4">
          <h3 className="font-semibold mb-2">User History</h3>
          <ul className="list-disc pl-5">
            {selectedUserHistory.map((h, i) => (
              <li key={i}>
                {h.action} – {h.date}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
