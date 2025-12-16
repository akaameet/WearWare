import React from 'react';
import { Link } from 'react-router-dom';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend
} from 'recharts';

const DashBoard = () => {
  const orders = [
    { _id: 1, user: { name: "Ram" }, totalPrice: 120, status: "Processing", time: "2 hrs ago" },
    { _id: 2, user: { name: "Sita" }, totalPrice: 250, status: "Delivered", time: "5 hrs ago" },
    { _id: 3, user: { name: "Hari" }, totalPrice: 100, status: "Shipped", time: "1 day ago" }
  ];

  const lowStockProducts = [
    { name: 'Jacket', stock: 2 },
    { name: 'Boots', stock: 0 },
  ];

  const salesData = [
    { month: 'Jan', revenue: 8000 },
    { month: 'Feb', revenue: 9500 },
    { month: 'Mar', revenue: 12000 },
    { month: 'Apr', revenue: 11000 },
    { month: 'May', revenue: 14000 },
  ];

  const categoryData = [
    { name: 'Men', value: 400 },
    { name: 'Women', value: 300 },
    { name: 'Kids', value: 200 },
  ];

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

  return (
    <div className='max-w-7xl mx-auto p-6 space-y-8'>
      <h1 className='text-3xl font-bold'>Admin Dashboard</h1>

      {/* Summary Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='p-4 shadow-md rounded-lg bg-white'>
          <h2 className='text-xl font-semibold'>Total Revenue</h2>
          <p className='text-2xl'>$12,000</p>
          <p className='text-green-500 text-sm'>▲ 26% from last month</p>
        </div>
        <div className='p-4 shadow-md rounded-lg bg-white'>
          <h2 className='text-xl font-semibold'>Total Orders</h2>
          <p className='text-2xl'>340</p>
          <Link to="/admin/orders" className='text-blue-600 hover:underline text-sm'>Manage Orders</Link>
        </div>
        <div className='p-4 shadow-md rounded-lg bg-white'>
          <h2 className='text-xl font-semibold'>Total Customers</h2>
          <p className='text-2xl'>2,100</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <div className='p-4 bg-white shadow-md rounded-lg'>
          <h2 className='text-lg font-semibold mb-2'>Monthly Revenue</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={salesData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className='p-4 bg-white shadow-md rounded-lg'>
          <h2 className='text-lg font-semibold mb-2'>Top-Selling Categories</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                dataKey="value"
                label
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Orders */}
      <div className='p-4 bg-white shadow-md rounded-lg'>
        <h2 className='text-xl font-semibold mb-4'>Recent Orders</h2>
        <table className='w-full text-left'>
          <thead className='text-gray-600'>
            <tr>
              <th className='py-2'>Customer</th>
              <th>Status</th>
              <th>Total</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order._id} className='border-t'>
                <td className='py-2'>{order.user.name}</td>
                <td>{order.status}</td>
                <td>${order.totalPrice}</td>
                <td>{order.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Inventory Monitoring */}
      <div className='p-4 bg-white shadow-md rounded-lg'>
        <h2 className='text-xl font-semibold mb-4'>Low Stock Alerts</h2>
        {lowStockProducts.length === 0 ? (
          <p className='text-gray-500'>All products in stock.</p>
        ) : (
          <ul className='list-disc pl-6 space-y-1'>
            {lowStockProducts.map((product, idx) => (
              <li key={idx} className={product.stock === 0 ? 'text-red-500' : 'text-yellow-600'}>
                {product.name} — {product.stock === 0 ? 'Out of Stock' : `Only ${product.stock} left`}
              </li>
            ))}
          </ul>
        )}
        <Link to="/admin/products" className='inline-block mt-3 text-blue-600 hover:underline text-sm'>
          Manage Inventory
        </Link>
      </div>
    </div>
  );
};

export default DashBoard;
