import React from 'react'
import TopBar from '../Layout/TopBar'
import Navbar from './Navbar'
function Header() {
  console.log("✅ Header loaded");
  return (
    <header className='border-b border-gray-300'>
      <TopBar />
      <Navbar />
    </header>
  );
}


export default Header
