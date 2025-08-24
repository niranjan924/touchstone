import React, { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#aboutus", label: "About Us" },
  { href: "#programs", label: "Our Programs" },
  { href: "#howwework", label: "How We Work" },
  { href: "#initiatives", label: "Our Initiatives" },
  { href: "#impact", label: "Our Impact" },
  { href: "#contactus", label: "Contact Us" },
];

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

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
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium" aria-label="Primary">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="hover:text-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right: CTAs */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href="#contactus"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
          >
            Talk to Us
          </a>
          <a
            href="https://www.harekrishnavizag.org/subhojanam"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
          >
            Donate
          </a>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
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
        <div id="mobile-menu" className="md:hidden bg-white shadow-md px-4 py-3 space-y-2 text-gray-700 font-medium">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="block hover:text-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contactus"
            className="inline-block w-full bg-orange-500 hover:bg-orange-600 text-white text-center px-4 py-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Talk to Us
          </a>
          <a
            href="https://www.harekrishnavizag.org/subhojanam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full bg-red-500 hover:bg-red-600 text-white text-center px-4 py-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
          >
            Donate Now
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
