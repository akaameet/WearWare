import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/login4.jpg';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100">
      
      {/* Left: Login Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <form onClick={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm">
          <div className="flex justify-center mb-6">
            <h2 className="text-2xl font-medium text-center">Login</h2>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your password"
            />
          </div>

          <button className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800">
            Sign In
          </button>

          <p className="mt-4 text-center text-sm">
            <Link to="/register" className="text-blue-500 underline">
              Forgot Password?
            </Link>
          </p>

          <p className="mt-6 text-center text-sm">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-500">
              Register
            </Link>
          </p>
        </form>
      </div>

      {/* Right: Image */}
      <div className="hidden md:block w-1/2 h-full">
        <img
          src={login}
          alt="Login"
          className="h-screen w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
