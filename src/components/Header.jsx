import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Left: Logo and Heading */}
        <div className="flex items-center space-x-3">
          <img
            src="/tslogo.png"
            alt="Touchstone Logo"
            className="h-20 md:h-32 w-auto object-contain"
          />
          {/* <h1 className="text-lg sm:text-xl font-bold text-gray-800">
            Touchstone Foundation Visakhapatnam
          </h1> */}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#home" className="hover:text-orange-600">
            Home
          </a>
          <a href="#aboutus" className="hover:text-orange-600">
            About Us
          </a>
          <a href="#programs" className="hover:text-orange-600">
            Our Programs
          </a>
          <a href="#howwework" className="hover:text-orange-600">
            How We Work
          </a>
          <a href="#initiatives" className="hover:text-orange-600">
            Our Initiatives
          </a>
          <a href="#impact" className="hover:text-orange-600">
            Our Impact
          </a>
          <a href="#contactus" className="hover:text-orange-600">
            Contact Us
          </a>
        </nav>

        {/* Right: Donate Button */}
        <div className="hidden md:block">
          <a
            href="https://www.harekrishnavizag.org/subhojanam"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-semibold transition duration-200"
          >
            Donate
          </a>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
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
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-3 space-y-2 text-gray-700 font-medium">
          <a
            href="#home"
            className="block hover:text-orange-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#aboutus"
            className="block hover:text-orange-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </a>
          <a
            href="#programs"
            className="block hover:text-orange-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Our Programs
          </a>
          <a
            href="#howwework"
            className="block hover:text-orange-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            How We Work
          </a>
          <a
            href="#initiatives"
            className="block hover:text-orange-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Our Initiatives
          </a>
          <a
            href="#impact"
            className="block hover:text-orange-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Our Impact
          </a>
          <a
            href="#contactus"
            className="block hover:text-orange-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </a>
          <a
            href="https://www.harekrishnavizag.org/subhojanam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full bg-red-500 hover:bg-red-600 text-white text-center px-4 py-2 rounded-full font-semibold transition duration-200"
          >
            Donate Now
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
