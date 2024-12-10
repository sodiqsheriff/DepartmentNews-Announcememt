import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu visibility
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo section */}
        <Link to="/" className="text-white text-2xl font-bold">
          Department News
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-lg">
            Home
          </Link>
          <Link to="/admin" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-lg">
            Admin
          </Link>
        </div>

        {/* Mobile menu toggle button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-600 space-y-2 mt-4 px-4 py-2">
          <Link to="/" className="text-white block py-2 px-4 text-lg hover:bg-blue-700 rounded-md">
            Home
          </Link>
          <Link to="/admin" className="text-white block py-2 px-4 text-lg hover:bg-blue-700 rounded-md">
            Admin
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
