import React, { useState } from "react";

const EditProduct = () => {
  const [productData, setProductData] = useState({
    name: " TbJacket",
    description: "",
    code: "jt-100",
    price: 10,
    category: "",
    brand: "",
    stock: 0,
    sizes: [],
    colors: [],
    gender: "",
    images: [
      { url: "https://picsum.photos/150?ramdom=1" },
      { url: "https://picsum.photos/150?ramdom=2" },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    console.log("Uploading image:", file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Product Data:", productData);
  };
  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-6">Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block font-semibold mb-2">Product Name</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          ></input>
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-2">Description</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-2">Price</label>
          <input
            type="text"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          ></input>
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-2">Stock</label>
          <input
            type="text"
            name="stock"
            value={productData.stock}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          ></input>
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-2">Brand</label>
          <input
            type="text"
            name="brand"
            value={productData.brand}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          ></input>
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-2">Category</label>
          <input
            type="text"
            name="category"
            value={productData.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          ></input>
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-2">Sizes</label>
          <input
            type="text"
            name="sizes"
            value={productData.sizes.join(",")}
            onChange={(e) =>
              setProductData({
                ...productData,
                sizes: e.target.value.split(",").map((size) => size.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-2"
            required
          ></input>
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-2">Colors</label>
          <input
            type="text"
            name="colors"
            value={productData.colors.join(",")}
            onChange={(e) =>
              setProductData({
                ...productData,
                colors: e.target.value.split(",").map((color) => color.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-2"
            required
          ></input>
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">Upload Image</label>
          <input type="file" onChange={handleImageUpload} />
          <div className="flex gap-4 mt-4">
            {productData.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.url}
                  alt={image.altText || "Product Image"}
                  className="w-20 h-20 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2  rounded-md hover:bg-green-600 transition-colors"
          >
            {" "}
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
