import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';

const DashboardLayout = ({ sidebar: SidebarComponentX, title }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      {/* Mobile Navbar */}
      <div className="flex md:hidden items-center justify-between p-4 shadow-lg z-30 bg-white">
        <div className="flex items-center">
          <button onClick={toggleSidebar}>
            <FaBars size={24} />
          </button>
          <div className="ml-4">
            <h1 className="text-xl font-medium">WearWare</h1>
            <p className="text-sm text-gray-500">{title}</p>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`bg-white shadow-lg h-screen overflow-y-auto absolute w-64 md:relative transform${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 md:translate-x-0 md:static z-30`}
      >
        <SidebarComponentX />
      </div>

      {/* Main content */}
      <div className="flex-grow p-6 h-screen overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
