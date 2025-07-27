import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isAdmin = location.pathname.includes("/admin");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 text-white px-4 sm:px-6 md:px-8 py-3 shadow-md relative z-50">
      <div className="flex justify-between items-center">
        {/* Left - Heading */}
        <h1 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
          🎓 Feedback System
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 text-base font-medium">
          <Link to="/" className="hover:text-green-300 transition">Home</Link>
          <Link to="/student/courses" className="hover:text-green-300 transition">Courses</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-3 flex flex-col space-y-2 bg-[#1a1a2e] px-4 py-3 rounded-lg shadow-lg">
          <Link
            to="/"
            className="text-white hover:text-green-300 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/student/courses"
            className="text-white hover:text-green-300 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Courses
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
