import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilters] = useState({
    gender: '',
    category: '',
    color: '',
    size: [],
    brand: [],
    priceRange: [0, 100],
    sortBy: '',
  });

  const genders = ['Men', 'Women'];
  const categories = ['Tops', 'Pants', 'Outerwear', 'Outdoor'];
  const colors = ['Red', 'Blue', 'Black', 'Green', 'Yellow', 'Gray', 'White', 'Pink', 'Beige', 'Navy'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const brands = ['Urban Threads', 'Modern Fit', 'Street Style', 'Beach Breeze', 'Fashionista'];

  // Load filters from URL on first render or when searchParams change
  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilters({
      gender: params.gender || '',
      category: params.category || '',
      color: params.color || '',
      size: params.size ? params.size.split(',').filter(Boolean) : [],
      brand: params.brand ? params.brand.split(',').filter(Boolean) : [],
      priceRange: [
        Number(params.minPrice) || 0,
        Number(params.maxPrice) || 100
      ],
      sortBy: params.sortBy || '',
    });
  }, [searchParams]);

  // Update filter and URL
  const applyFilter = (newData) => {
    const updated = { ...filters, ...newData };
    setFilters(updated);

    const params = {};

    if (updated.gender) params.gender = updated.gender;
    if (updated.category) params.category = updated.category;
    if (updated.color) params.color = updated.color;
    if (updated.size.length) params.size = updated.size.join(',');
    if (updated.brand.length) params.brand = updated.brand.join(',');
    if (updated.priceRange[0] !== 0 || updated.priceRange[1] !== 100) {
      params.minPrice = updated.priceRange[0];
      params.maxPrice = updated.priceRange[1];
    }
    if (updated.sortBy) params.sortBy = updated.sortBy;

    setSearchParams(params);
  };

  // Handle checkbox filters (size, brand)
  const toggleArrayFilter = (key, value) => {
    const current = filters[key];
    applyFilter({
      [key]: current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value],
    });
  };

  return (
    <aside className="w-72 p-4 border-r bg-white min-h-screen">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

      {/* Gender */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Gender</label>
        <div className="flex gap-2">
          {genders.map((g) => (
            <button
              key={g}
              onClick={() =>
                applyFilter({ gender: filters.gender === g ? '' : g })
              }
              className={`py-1 px-2 rounded border ${
                filters.gender === g
                  ? 'bg-black text-white'
                  : 'text-gray-500 border-gray-300'
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* Category */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Category</label>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() =>
                applyFilter({ category: filters.category === cat ? '' : cat })
              }
              className={`py-1 px-2 rounded border ${
                filters.category === cat
                  ? 'bg-black text-white'
                  : 'text-gray-500 border-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Color */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Color</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() =>
                applyFilter({ color: filters.color === color ? '' : color })
              }
              className={`py-1 px-2 rounded border ${
                filters.color === color
                  ? 'bg-black text-white'
                  : 'text-gray-500 border-gray-300'
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      {/* Size */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Sizes</label>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <label key={size} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={filters.size.includes(size)}
                onChange={() => toggleArrayFilter('size', size)}
              />
              {size}
            </label>
          ))}
        </div>
      </div>

      {/* Brand */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Brands</label>
        <div className="flex flex-wrap gap-2">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={filters.brand.includes(brand)}
                onChange={() => toggleArrayFilter('brand', brand)}
              />
              {brand}
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Price</label>
        <input
          type="range"
          min="0"
          max="100"
          value={filters.priceRange[1]}
          onChange={(e) =>
            applyFilter({ priceRange: [0, +e.target.value] })
          }
          className="w-full"
        />
        <p className="text-sm text-gray-500 mt-2">
          ${filters.priceRange[0]} - ${filters.priceRange[1]}
        </p>
      </div>
    </aside>
  );
};

export default FilterSidebar;
