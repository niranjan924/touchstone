import React from "react";

const Home = () => {
  return (
    <div id="home" className="relative">
      {/* Background */}
      <div className="bg-orange-500 py-20 px-4 flex items-center justify-center">
        {/* Content */}
        <div className="text-center text-white max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Cultivating Growth, Enriching Lives in Visakhapatnam
          </h1>

          <p className="text-lg md:text-xl mb-8 font-light">
            Dedicated to holistic development through nutrition, education,
            art, and youth empowerment in Visakhapatnam.
          </p>

          <div className="bg-white/20 p-6 rounded-xl inline-block backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              Nourishing Visakhapatnam
            </h2>
            <p className="text-sm md:text-base font-medium">
              Explore Our Work & Support Our Mission
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
