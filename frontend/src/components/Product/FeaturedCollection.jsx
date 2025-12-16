import React from 'react'
import featured from "../../assets/featured1.jpg"
import { Link } from 'react-router-dom'

const FeaturedCollection = () => {
  return <section className='py-16 px-4 lg:px-0'>
       <div className='container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-100 rounded-3xl'>

        <div className='lg:w-1/2 p-8 text-center lg:text-left'>
            <h2 className='text-lg font-semibold text-gray-700 mb-2'>Comfort and Style</h2>
            <h2 className='text-4xl lg:text-5xl font-bold mb-6'>
                Apparel made for your everyday life
            </h2>
            <p className='text-lg text-gray-600 mb-6'>
                Effortless, reliable, and ready for whatever the day brings.
                Each piece is made to simplify your style without compromising on comfort.
            </p>
            <Link to="/collections/all" className='bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800'>
                Shop Now
            </Link>
        </div>

        <div className='lg:w-1/2'>
           <img src={featured} alt='Featured Collection'
            className='lg:rounded-tr-3xl rounded-br-3xl w-full h-100 lg:h-140 object-cover object-top '
           />
        </div>
       </div>
  </section>
}

export default FeaturedCollection
