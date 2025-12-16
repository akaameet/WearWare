import React from 'react'
import { Link } from 'react-router-dom';

import heroImg from "../../assets/main3.jpg"

const Main = () => {
  return (
   <section className='relative'>
    <img src={heroImg} alt="WearWare" 
    className='w-full h-[350px] md:h-[550px] lg:h-[600px] object-cover' />

    <div className='absolute inset-0 bg-black bg-opacity-5 flex items-center justify-center'>
       <div className='text-center text-white p-6'>
         <h1 className='text-4xl md:text-8xl font-bold tracking-tighter uppercase mb-4'>
          Built on basics, <br/>Refined for life.
         </h1>
         <p className='text-sm tracking-tighter md:text-lg mb-6'>
         Essentials made to go the distance.
         </p>
         <Link to="#" className='bg-white text-gray-950 px-6 py-2 rounded-lg text-lg hover:text-gray-700'>
          Shop Now
         </Link>
       </div>
    </div>
  </section>
  )
}

export default Main
