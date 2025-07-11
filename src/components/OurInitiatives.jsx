import React from "react";

const OurInitiatives = () => {
  const initiatives = [
    {
      name: "Subhojanam",
      title: "Subhojanam Daily Meals",
      description:
        "Our flagship initiative provides over 30 lakh nutritious and hygienic meals annually to hospital patients, attendants, and underprivileged individuals across Visakhapatnam.",
    },
    {
      name: "Skills",
      title: "Skill Development Workshops",
      description:
        "Empowering youth with vocational skills and training to improve employability and foster economic independence within the community.",
    },
    {
      name: "Culture",
      title: "Cultural Preservation Programs",
      description:
        "Promoting and preserving local art forms, traditional crafts, and cultural heritage through workshops, events, and community engagement.",
    },
  ];

  return (
    <div id="initiatives" className="bg-gray-50 py-16 px-4 md:px-10 lg:px-20">
      {/* Heading and Paragraph */}
      <div className="text-center mb-14">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Our Initiatives
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
          We are actively involved in various initiatives designed to uplift and
          empower the communities of Visakhapatnam.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {initiatives.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl border-l-4 border-orange-500 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="text-orange-500 text-sm font-bold uppercase tracking-wider mb-1">
              {item.name}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurInitiatives;
