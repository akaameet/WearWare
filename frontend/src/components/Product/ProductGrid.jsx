import React from 'react'
import { Link } from 'react-router-dom'

const ProductGrid = ({products}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10">
  {products.map((product, index) => (
    <Link
      key={index}
      to={`/product/${product._id}`}
      className="block group"
    >
      <div className="bg-white p-4 rounded-lg shadow-md">
        {/* Image container  */}
        <div className="overflow-hidden rounded-lg">
          <img
            src={product.images[0].url}
            alt={product.images[0].alText || product.name}
            className="w-full h-80 object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product name & price */}
        <div className="mt-4 text-center">
          <h3 className="text-base font-semibold text-gray-800 mb-1">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500">${product.price}</p>
        </div>
      </div>
    </Link>
  ))}
</div>

  )
}

export default ProductGrid
