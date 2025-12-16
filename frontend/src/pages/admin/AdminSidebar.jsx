import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTshirt, FaClipboardList, FaUsersCog, FaSignOutAlt } from 'react-icons/fa';

const AdminSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const linkClasses = (path) =>
    `flex items-center gap-3 px-4 py-2 rounded transition
    ${currentPath.startsWith(path)
      ? 'bg-gray-200 text-blue-700 font-semibold'
      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'}`;

  const handleLogout = () => {
    console.log("Logout clicked");
    // TODO: Add actual logout logic here (e.g., clear token, redirect)
  };

  return (
<div className="min-h-screen w-64 bg-white shadow-md flex flex-col overflow-y-auto">
  {/* Top Section */}
  <div className="flex-1 p-6 flex flex-col">
    <div className="mb-6">
      <Link to="/" className="block text-2xl font-bold text-gray-800">
        WearWare
      </Link>
      <Link to="/admin/dashboard" className="block text-sm text-gray-500 hover:underline mt-1">
        Admin Dashboard
      </Link>
    </div>

    <nav className="flex flex-col gap-2">
      <Link to="/admin/products" className={linkClasses('/admin/products')}>
        <FaTshirt className="w-5 h-5" />
        Products
      </Link>
      <Link to="/admin/orders" className={linkClasses('/admin/orders')}>
        <FaClipboardList className="w-5 h-5" />
        Orders
      </Link>
      <Link to="/admin/users" className={linkClasses('/admin/users')}>
        <FaUsersCog className="w-5 h-5" />
        Users
      </Link>
    </nav>
  </div>

  {/* Bottom Logout Button */}
  <div className="p-6">
    <button
      onClick={handleLogout}
      className="flex items-center justify-center gap-2 text-sm text-white bg-black rounded-md py-2 px-4 w-full hover:bg-gray-700"
    >
      <FaSignOutAlt className="w-4 h-4" />
      Logout
    </button>
  </div>
</div>

  );
};

export default AdminSidebar;
