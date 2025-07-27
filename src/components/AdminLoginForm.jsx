import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { LogIn } from "lucide-react"; // Login icon

const AdminLoginForm = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/admin/login", loginData);
      localStorage.setItem("adminToken", res.token || res.data.token);
      navigate("/admin/dashboard");
    } catch (err) {
      alert("Invalid login credentials");
    }
  };

  return (
    <>
    
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-white to-yellow-200 p-6">
        <form
          onSubmit={handleLogin}
          className="max-w-md w-full bg-white shadow-lg rounded-2xl p-8 space-y-6"
        >
          {/* Heading with icon */}
          <h2 className="text-2xl font-bold text-center text-gray-800 flex items-center justify-center gap-2">
            <LogIn className="text-blue-600" size={24} />
            Admin Login
          </h2>

          {/* Username */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              value={loginData.username}
              onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default AdminLoginForm;
// Username: admin
// Password: admin123