import React from "react";

const OurPrograms = () => {
  const programs = [
    {
      name: "Food",
      title: "Nutritious Meal Services",
      description:
        "Providing wholesome and hygienic meals to ensure food security and promote the health of children and needy individuals in the community.",
    },
    {
      name: "Education",
      title: "Education & Literacy Initiatives",
      description:
        "Supporting educational opportunities and literacy programs to empower children and youth with knowledge and skills for a brighter future.",
    },
    {
      name: "Youth",
      title: "Youth & Cultural Development",
      description:
        "Engaging youth in constructive activities and promoting local art and culture to foster creativity, values, and community spirit.",
    },
  ];

  return (
    <div id="programs" className="bg-gray-50 py-12 px-4 md:px-10 lg:px-20">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl text-gray-800 font-bold text-center mb-12">
        Our Key Activities
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-orange-500"
          >
            <div className="text-orange-500 text-sm font-bold uppercase tracking-wider mb-1">
              {program.name}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {program.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {program.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPrograms;
