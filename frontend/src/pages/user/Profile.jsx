import React, { useState } from 'react';

const Profile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    height: '',
    weight: '',
    dob: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete your account?')) {
      console.log('Account deleted'); // Replace with API call
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData); // Replace with actual submission logic
  };

  return (
    <div className="min-h-screen flex flex-col ">
      <form onSubmit={handleSubmit} className="max-w-2xl w-full mx-auto  p-6 pb-16   relative">
        <h2 className="text-2xl font-semibold mb-6">Edit Profile</h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Gender</label>
          <select
            name="gender"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Height */}
        <div className="flex gap-4 mb-4">
         <div className='flex-1'>
          <label className="block mb-1 font-medium">Height (cm)</label>
          <input
            type="number"
            name="height"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={formData.height}
            onChange={handleChange}
          />
         </div>
         <div className='flex-1'>
          <label className="block mb-1 font-medium">Weight (kg)</label>
          <input
            type="number"
            name="weight"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={formData.weight}
            onChange={handleChange}
          />
         </div>
        </div>

       

        {/* Date of Birth */}
        <div className="mb-6">
          <label className="block mb-1 font-medium">Date of Birth</label>
          <input
            type="date"
            name="dob"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Save Changes
        </button>

        {/* Delete Account Button at Bottom Left */}
        <button
          type="button"
          onClick={handleDelete}
          className="absolute pt-10 bottom-4 left-4 text-red-600 hover:underline text-sm"
        >
          Delete Account
        </button>
      </form>
    </div>
  );
};

export default Profile;
