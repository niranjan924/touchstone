import React from "react";

const AboutUs = () => {
  return (
    <div id="aboutus">
      <div className="bg-white py-12 px-4 md:px-10 lg:px-20">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl text-gray-800 font-bold text-center mb-10">
          About Touchstone Foundation Visakhapatnam
        </h2>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left: Image */}
          <div className="w-full md:w-1/2 bg-orange-500 rounded-xl shadow-md flex items-center justify-center h-[300px]">
            <h1 className="text-white text-2xl md:text-3xl font-bold text-center">
              Community Impact
            </h1>
          </div>

          {/* Right: Text Content */}
          <div className="w-full md:w-1/2">
            <h3 className="text-xl text-gray-800 font-semibold mb-4">Who We Are</h3>
            <p className="text-gray-700 mb-4">
              Established in 2012, Touchstone Foundation Visakhapatnam is a
              committed charitable organization working towards the holistic
              development and well-being of communities in Visakhapatnam.
            </p>
            <p className="text-gray-700 mb-4">
              Our key activities include initiatives in Art & Culture,
              Children's Welfare, Education & Literacy, Nutrition, and Youth
              Affairs. We believe in nurturing individuals from a young age and
              empowering them with the tools they need to thrive.
            </p>
            <p className="text-gray-700">
              Aligned with the principles of service, we strive to make a
              tangible difference in the lives of the underprivileged by
              providing essential support and fostering an environment for
              growth and learning. We are dedicated to building a stronger,
              healthier, and more vibrant Visakhapatnam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
