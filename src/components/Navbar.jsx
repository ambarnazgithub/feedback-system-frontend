import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isAdmin = location.pathname.includes("/admin");
   

 
  return (
  <nav className="bg-blue-600 text-white px-8 py-3 shadow-md flex justify-between items-center">
  {/* Left side - Heading */}
  <h1 className="text-xl font-bold">🎓 Feedback System</h1>

  {/* Right side - Links */}
  <div className="flex items-center space-x-4">
 
      
        <Link to="/" className="hover:underline">Home</Link>
    
    <Link to="/student/courses" className="hover:underline">Courses</Link>
  </div>
</nav>

  );
};

export default Navbar;
