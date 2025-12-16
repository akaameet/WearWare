import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const ManageProducts = () => {
  const products = [
    {
      _id: 12321,
      name: "Stylish Jacket",
      code: "SJ-001",
      description: "A trendy and warm jacket perfect for winter.",
      price: 79.99,
      stock: 25,
      category: "Outerwear",
      imageUrl: "https://example.com/images/jacket.jpg",
    },
  ];

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      console.log(`Delete product with ID: ${id}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Product Management</h2>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Description</th>
              <th className="py-3 px-4">Code</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr
                  key={product._id}
                  className="border-b hover:bg-gray-50 cursor-pointer"
                >
                  <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                    {product.name}
                  </td>
                  <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                    {product.description}
                  </td>
                  <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                    {product.code}
                  </td>
                  <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                    RS.{product.price}
                  </td>
                  <td className="p-4 flex space-x-2">
                    <Link
                      to={`/admin/products/${product._id}/edit`}
                      className="px-2 py-1 text-sm text-gray-100 rounded-md bg-blue-400  hover:bg-blue-500"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="bg-red-500 px-2 py-1 text-sm rounded-md text-gray-100 hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
