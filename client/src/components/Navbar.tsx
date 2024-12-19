import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold">
              MyLogo
            </a>
          </div>

          {/* Menu for larger screens */}
          <div className="hidden md:flex space-x-4">
            <Link to="/home" className="hover:text-gray-200 text-lg">
              Home
            </Link>
            <Link to="/students" className="hover:text-gray-200 text-lg">
              Students
            </Link>
            <Link to="/addStudents" className="hover:text-gray-200 text-lg">
              Add Students
            </Link>
            <Link to="/profile" className="hover:text-gray-200 text-lg">
              Profile
            </Link>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-white hover:text-gray-200"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
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
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <a href="#home" className="block px-4 py-2 text-sm hover:bg-blue-700">
            Home
          </a>
          <a
            href="#about"
            className="block px-4 py-2 text-sm hover:bg-blue-700"
          >
            About
          </a>
          <a
            href="#services"
            className="block px-4 py-2 text-sm hover:bg-blue-700"
          >
            Services
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-sm hover:bg-blue-700"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
