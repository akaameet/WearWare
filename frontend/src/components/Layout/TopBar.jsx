import React from 'react'
import {TbBrandMeta} from "react-icons/tb"
import {IoLogoInstagram } from "react-icons/io"
import {RiTwitterXLine } from "react-icons/ri"
function TopBar() {
      console.log("✅ TopBar loaded");
  return (
        <div className="bg-wear text-black">
    <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <div className='hidden md:flex items-center space-x-4'>
            <a href="#" className='text-gray-700 hover:text-black text-md'>
                <TbBrandMeta className='h-5 w-5'/>
            </a>
            <a href="#" className='text-gray-700 hover:text-black'>
                <IoLogoInstagram className='h-5 w-5 '/>
            </a>
            <a href="#" className='text-gray-700 hover:text-black'>
                <RiTwitterXLine className='h-4 w-4'/>
            </a>
        </div>
        <div className='text-sm text-center flex-grow'>
            <span>Timeless by Design.</span>
        </div>
        <div className='text-sm text-gray-700 hidden md:block'>
            <a href="tel: +123456789" className='hover:text-black'> +977 98765443210</a>
        </div>
    </div>
      
    </div>
  )
}

export default TopBar
