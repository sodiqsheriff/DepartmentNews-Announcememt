import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import SearchBar from './Searchbar';


interface NavbarProps{
  onSearch: (query: string) =>Promise<void>;
}

const Navbar: React.FC<NavbarProps> = ({onSearch}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu visibility
  };

  
  return (
    <nav className="bg-black bg-opacity-75 backdrop-blur-lg p-4 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-10xl mx-auto flex items-center justify-between">
        {/* Logo section */}
        <Link to="/" className="text-white  font-bold">
          <h1 className="text-md lg:text-xl font-bold">NacosNews & Announcements</h1>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex flex-row items-center space-x-4">
          <Link to="/" className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-lg">
            Home
          </Link>
          <Link to="/announce" className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-lg">
            Announcements
          </Link>
          <Link to="/about" className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-lg">
            About Us
          </Link>

          {/* SearchBar Component */}
          <SearchBar onSearch={onSearch}/>
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
        <div className="md:hidden bg-green-600 bg-opacity-50 backdrop-blur-lg space-y-2 mt-4 px-4 py-2">
          <Link to="/" className="text-white block py-2 px-4 text-lg hover:bg-green-700 rounded-md">
            Home
          </Link>
          <Link to="/about" className="text-white block py-2 px-4 text-lg hover:bg-green-700 rounded-md">
            About Us
          </Link>
          <Link to="/announce"  className="text-white block py-2 px-4 text-lg hover:bg-green-700 rounded-md">
            Announcements
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
