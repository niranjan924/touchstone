// components/VoicesAndPartners.jsx
import React from "react";

const VoicesAndPartners = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-10 lg:px-20">
      {/* Voices of Impact */}
      <div className="text-center mb-14">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          Voices of Impact
        </h2>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto text-left">
          <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-orange-500">
            <p className="text-gray-700 italic mb-4">
              "The support from Touchstone Foundation has transformed our
              community. The children are healthier and more engaged in school."
            </p>
            <p className="text-gray-800 font-semibold">
              — Community Leader, Visakhapatnam
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-orange-500">
            <p className="text-gray-700 italic mb-4">
              "I never thought I'd have the chance to learn traditional art
              forms. Touchstone Foundation made it possible and gave me a new
              passion."
            </p>
            <p className="text-gray-800 font-semibold">
              — Youth Program Participant
            </p>
          </div>
        </div>
      </div>

     
      {/* Our Valued Partners */}
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Our Valued Partners
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {/* Placeholder logo boxes */}
          <div className="w-48 h-32 bg-white border border-gray-300 rounded-xl flex items-center justify-center shadow text-gray-700 font-semibold text-lg md:text-xl">
            ISKCON
          </div>
          <div className="w-48 h-32 bg-white border border-gray-300 rounded-xl flex items-center justify-center shadow text-gray-700 font-semibold text-lg md:text-xl">
            Akshaya Patra
          </div>
          <div className="w-48 h-32 bg-white border border-gray-300 rounded-xl flex items-center justify-center shadow text-gray-700 font-semibold text-lg md:text-xl">
            KGH
          </div>
        </div>
      </div>

      {/* Join Our Mission */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Join Our Mission!
        </h2>
        <p className="text-gray-600 mb-6 text-base md:text-lg">
          Whether through donations or volunteering your time, your support
          directly empowers our initiatives and brings hope to countless lives
          in Visakhapatnam.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.harekrishnavizag.org/subhojanam"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Donate Now
          </a>
          <a
            href="#volunteer"
            className="border border-orange-500 text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-full font-semibold transition"
          >
            Become a Volunteer
          </a>
        </div>
        <p className="text-xs mt-4 text-gray-400">
          (Note: These are placeholder buttons. Actual integration would be done
          here.)
        </p>
      </div>
    </section>
  );
};

export default VoicesAndPartners;
