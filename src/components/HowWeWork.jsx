import React from "react";

const HowWeWork = () => {
  const steps = [
    {
      title: "Identify Needs",
      description:
        "We conduct thorough assessments to understand the specific needs of vulnerable communities in Visakhapatnam.",
    },
    {
      title: "Mobilize Resources",
      description:
        "We engage with donors, partners, and volunteers to gather the necessary resources for our initiatives.",
    },
    {
      title: "Implement Programs",
      description:
        "Our dedicated teams execute programs like meal distribution, educational workshops, and cultural events.",
    },
    {
      title: "Measure & Grow",
      description:
        "We continuously monitor our impact, gather feedback, and adapt our strategies for greater effectiveness.",
    },
  ];

  return (
    <div id="howwework" className="bg-white py-16 px-4 md:px-10 lg:px-20">
      {/* Heading & Intro */}
      <div className="text-center mb-14">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          How We Work
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our commitment to community well-being is realized through a
          systematic and compassionate approach. Here's how we bring about
          positive change.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative bg-gray-50 p-6 pt-10 rounded-2xl shadow-md hover:shadow-xl border-l-4 border-orange-500 transition-all duration-300"
          >
            {/* Step Badge */}
            <div className="absolute -top-5 left-4 bg-orange-500 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold shadow">
              {index + 1}
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeWork;
