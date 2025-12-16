import React, { useEffect, useState } from 'react';
import { FaEye, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const WishList = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const mockData = {
      userId: "abc123",
      wishlist: [
        {
          productId: "prod001",
          addedAt: "2025-07-15T10:30:00Z",
          productSnapshot: {
            name: "Military Jacket",
            price: 79.99,
            image: "https://picsum.photos/300?random=1"
          }
        },
        {
          productId: "prod002",
          addedAt: "2025-07-10T09:00:00Z",
          productSnapshot: {
            name: "Baker Pants",
            price: 79.99,
            image: "https://picsum.photos/300?random=2"
          }
        }
      ],
    };

    setWishlistItems(mockData.wishlist);
  }, []);

  const handleRemoveItem = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item.productId !== id));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-2">My Wishlist</h2>
      <p className="text-sm text-gray-500 mb-6">Total {wishlistItems.length}</p>

      {wishlistItems.length === 0 ? (
        <div className="text-center text-gray-600 py-10">
          <p className="mb-4">
            Your wishlist is empty.
            <br />
            Browse and add items you like!
          </p>
        </div>
      ) : (
        <>
          {/* Header Row */}
          <div className="grid grid-cols-12 font-semibold text-gray-700 border-b pb-2 mb-3 text-sm">
            <div className="col-span-1">S.N.</div>
            <div className="col-span-4">Item</div>
            <div className="col-span-3 text-center">Price</div>
            <div className="col-span-2 text-center">Added On</div>
            <div className="col-span-2 text-center">Action</div>
          </div>

          {/* Wishlist Items */}
          {wishlistItems.map((item, index) => (
            <div
              key={item.productId}
              className="grid grid-cols-12 items-center py-3 border-b text-sm"
            >
              <div className="col-span-1">{index + 1}</div>

              <div className="col-span-4 flex items-center gap-3">
                <img
                  src={item.productSnapshot.image}
                  alt={item.productSnapshot.name}
                  className="w-12 h-12 object-cover rounded"
                />
                <span>{item.productSnapshot.name}</span>
              </div>

              <div className="col-span-3 text-center">
                ${item.productSnapshot.price}
              </div>

              <div className="col-span-2 text-center text-xs text-gray-500">
                {new Date(item.addedAt).toLocaleDateString()}
              </div>

              <div className="col-span-2 flex justify-center gap-4">
                <Link to={`/product/${item.productId}`} title="View">
                  <FaEye className="text-blue-600 hover:text-blue-800 w-4 h-4" />
                </Link>
                <button
                  onClick={() => handleRemoveItem(item.productId)}
                  title="Remove"
                >
                  <FaTrash className="text-red-500 hover:text-red-800 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default WishList;
