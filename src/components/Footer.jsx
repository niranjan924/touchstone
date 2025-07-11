import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-orange-300">
            Touchstone Foundation Visakhapatnam
          </h3>
          <p className="text-gray-300 text-sm">
            Committed to cultivating growth and enriching lives through
            nutrition, education, art, and youth empowerment in Visakhapatnam.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-orange-300">
            Quick Links
          </h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#home" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#aboutus" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#programs" className="hover:text-white">
                Our Programs
              </a>
            </li>
            <li>
              <a href="#howwework" className="hover:text-white">
                How We Work
              </a>
            </li>
            <li>
              <a href="#initiatives" className="hover:text-white">
                Our Initiatives
              </a>
            </li>
            <li>
              <a href="#impact" className="hover:text-white">
                Our Impact
              </a>
            </li>
            <li>
              <a href="#contactus" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="https://www.harekrishnavizag.org/subhojanam"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Donate
              </a>
            </li>
            <li>
              <a href="#volunteer" className="hover:text-white">
                Volunteer
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-orange-300">
            Contact Info
          </h4>
          <p className="text-gray-300 text-sm">
            Behind 5th Town Police Station,
            <br />
            Next to Kapparada Municipal High School,
            <br />
            Industrial Estate, Visakhapatnam - 530007,
            <br />
            Andhra Pradesh, India
          </p>
        </div>

        {/* Contact Details */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-orange-300">
            Reach Us
          </h4>
          <p className="text-gray-300 text-sm mb-2">Phone: +91 XXXXXXXXXX</p>
          <p className="text-gray-300 text-sm">
            Email: info@touchstonefoundationvizag.org
          </p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Touchstone Foundation Visakhapatnam.
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
