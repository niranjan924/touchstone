import React from "react";

const ContactUs = () => {
  return (
    <div id="contactus">
      <div className="bg-white py-12 px-4 md:px-10 lg:px-20">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl text-gray-800 font-bold text-center mb-10">Contact Us</h2>

        {/* Layout */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left: Contact Details */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-3 text-orange-500">Get in Touch</h3>
            <p className="text-gray-700 mb-4 text-md">We'd love to hear from you!</p>
            <p className="text-gray-600 text-md mb-2">
              <strong className="text-orange-500">Address:</strong>
              <br />
              Behind 5th town police station, Next to Kapparada Municipal High
              school,
              <br />
              Industrial Estate, Visakhapatnam - 530007,
              <br />
              Andhra Pradesh, India
            </p>
            <p className="text-gray-600 text-md mb-2">
              <strong className="text-orange-500">Phone:</strong> +91 XXXXXXXXXX
            </p>
            <p className="text-gray-600 text-md">
              <strong className="text-orange-500">Email:</strong> info@touchstonefoundationvizag.org
            </p>
          </div>

          {/* Right: Image */}
          {/* <div className="w-full md:w-1/2">
            <img
              src="https://via.placeholder.com/500x300" // Replace with your actual image
              alt="Contact"
              className="rounded-xl shadow-md w-full"
            />
          </div> */}
          <div className="w-full md:w-1/2 bg-gray-400 rounded-xl shadow-md flex items-center justify-center h-[300px]">
            <h1 className="text-black text-1xl md:text-2xl text-center">
              Map or Contact Form Placeholder
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
