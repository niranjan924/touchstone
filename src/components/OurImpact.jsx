import React from "react";

const OurImpact = () => {
  const impactData = [
    {
      name: "Meal",
      title: "Nourishing Communities",
      description:
        "Through our dedicated meal services, we strive to alleviate hunger and provide essential nutrition to thousands of individuals, including students and daily wage earners, contributing to their health and well-being.",
    },
    {
      name: "Youth",
      title: "Cultivating Youth Potential",
      description:
        "We engage young minds through various programs, including cultural and artistic activities, to develop their talents, instill positive values, and prepare them to be responsible and active members of society.",
    },
    {
      name: "Art",
      title: "Promoting Local Heritage",
      description:
        "By supporting and promoting local art and culture, we help preserve traditional forms, encourage creative expression, and enrich the cultural fabric of Visakhapatnam.",
    },
  ];

  return (
    <div id="impact" className="bg-white py-16 px-4 md:px-10 lg:px-20">
      {/* Heading and Paragraph */}
      <div className="text-center mb-14">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Our Impact in Visakhapatnam
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
          Our dedication translates into tangible results, improving the lives
          of individuals and strengthening the fabric of our community.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {impactData.map((item, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-orange-50 to-orange-100 p-6 pt-12 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Step Number Badge */}
            <div className="absolute -top-5 left-4 bg-orange-500 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold shadow-md">
              {index + 1}
            </div>

            {/* Name Badge */}
            <div className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">
              {item.name}
            </div>

            {/* Title & Description */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurImpact;
