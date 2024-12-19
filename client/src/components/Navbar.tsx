import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-3xl font-extrabold text-white tracking-wide hover:text-gray-200"
            >
              MyLogo
            </Link>
          </div>

          {/* Menu for larger screens */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-lg font-medium text-white hover:text-gray-200 transition duration-200"
            >
              Home
            </Link>
            <Link
              to="/students"
              className="text-lg font-medium text-white hover:text-gray-200 transition duration-200"
            >
              Students
            </Link>
            <Link
              to="/addStudents"
              className="text-lg font-medium text-white hover:text-gray-200 transition duration-200"
            >
              Add Students
            </Link>
            
            <Link
              to="/about"
              className="text-lg font-medium text-white hover:text-gray-200 transition duration-200"
            >
              About
            </Link>

            <Link
              to="/profile"
              className="text-lg font-medium text-white hover:text-gray-200 transition duration-200"
            >
              Profile
            </Link>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-white hover:text-gray-300 transition duration-200"
            >
              <svg
                className="w-8 h-8"
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
        <div className="md:hidden bg-gradient-to-r from-blue-500 to-indigo-600">
          <Link
            to="/home"
            className="block px-4 py-3 text-lg text-white hover:bg-blue-700 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/students"
            className="block px-4 py-3 text-lg text-white hover:bg-blue-700 transition duration-200"
          >
            Students
          </Link>
          <Link
            to="/addStudents"
            className="block px-4 py-3 text-lg text-white hover:bg-blue-700 transition duration-200"
          >
            Add Students
          </Link>
          <Link
            to="/profile"
            className="block px-4 py-3 text-lg text-white hover:bg-blue-700 transition duration-200"
          >
            Profile
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
