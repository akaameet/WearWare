import React from 'react';
import { Link } from 'react-router-dom';
import menImage from '../../assets/male-col.jpg';      
import womenImage from '../../assets/female-col.jpg';  
const CollectionShowcase = () => {
  return (
    <section className="px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Men's Collection */}
        <div className="group relative overflow-hidden bg-white border rounded-lg">
          <div className="overflow-hidden">
            <img
              src={menImage}
              alt="Men"
              className="w-full h-[600px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 p-4">
            <h3 className="text-xl font-semibold">Men's Collection</h3>
            <Link to="/mens" className="text-md text-gray-600 underline hover:text-gray-900">
              Shop Now
            </Link>
          </div>
        </div>

        {/* Women's Collection */}
        <div className="group relative overflow-hidden bg-white border rounded-lg">
          <div className="overflow-hidden">
            <img
              src={womenImage}
              alt="Women"
              className="w-full h-[600px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 p-4">
            <h3 className="text-xl font-semibold">Women's Collection</h3>
            <Link to="/womens" className="text-md text-gray-600 underline hover:text-gray-900">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionShowcase;
