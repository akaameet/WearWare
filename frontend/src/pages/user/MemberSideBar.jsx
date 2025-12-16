import React from 'react';
import { FaList, FaShoppingBag, FaUser } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const MemberSidebar = () => {
  const location = useLocation();

const linkClasses = (path) =>
  `flex items-center gap-3 px-4 py-2 rounded transition
   ${location.pathname.startsWith(path)
      ? 'bg-gray-200 font-semibold text-blue-700'
      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'}`;


  return (
    <div className="h-screen w-64 p-6 bg-white shadow-md">
      <Link to="/" className="text-2xl font-bold text-gray-800 mb-2 ">
        WearWare
      </Link>
      <p className="text-sm text-gray-500 mb-6">Member Dashboard</p>

      <nav className="flex flex-col gap-2">
        <Link to="/member/profile" className={linkClasses('/member/profile')}>
          <FaUser className='w-4 h-4'/>
          Profile
        </Link>
        <Link to="/member/wishlist" className={linkClasses('/member/wishlist')}>
          <FaList className='w-4 h-4'/>
          Wishlist
        </Link>
        <Link to="/member/orders" className={linkClasses('/member/orders')}>
          <FaShoppingBag className='w-4 h-4'/>
          Orders
        </Link>
      </nav>
    </div>
  );
};

export default MemberSidebar;
