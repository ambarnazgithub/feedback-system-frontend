import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutDashboard, LogOut, Menu, X } from 'lucide-react';

const AdminSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white text-black rounded-lg shadow-lg"
      >
        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
   <div className={`
  fixed inset-y-0 left-0 w-64 bg-[#1a1a2e] shadow-2xl z-50 transform transition-transform duration-300 ease-in-out
  ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
  lg:translate-x-0 lg:relative lg:z-auto
  flex flex-col justify-between h-screen
`}>

        {/* Logo / Title */}
        <div className="p-6 border-b border-gray-700">
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <LayoutDashboard size={24} />
            Dashboard
          </h1>
        </div>

        {/* Spacer or content area if needed */}
        <div className="flex-1 p-6 text-gray-400">
          {/* Optional content or stats */}
          <p>Welcome, Admin!</p>
        </div>

        {/* Logout */}
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full text-left text-red-400 hover:text-white hover:bg-red-700 px-4 py-3 rounded-lg transition"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
