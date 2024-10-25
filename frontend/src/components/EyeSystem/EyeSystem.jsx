import React from 'react';
import { FaBatteryFull, FaWifi, FaMedkit, FaEye } from 'react-icons/fa'; // Font Awesome Icons

const EyeSystem = () => {
  return (
    <div>
      {/* Our Best Eye Systems Section */}
      <section
        className="py-16 bg-black text-white bg-cover bg-center"
        style={{
          backgroundImage: "url('/path_to_background_image.jpeg')", // Your background image
        }}
      >
        <div className="container mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-3xl font-bold text-white mb-8 relative inline-block">
            <span className="relative z-10">Our Best Eye Systems</span>
            {/* Left circle */}
            <span className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 bg-orange-500 h-4 w-4 rounded-full"></span>
            {/* Right circle */}
            <span className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-orange-500 h-4 w-4 rounded-full"></span>
          </h2>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg relative hover:scale-105 transition-transform duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-orange-500"></div>
              <FaBatteryFull className="text-orange-500 mx-auto mb-4 h-16 w-16 animate-pulse" />
              <h3 className="text-xl font-semibold text-gray-800">Energy Solutions</h3>
              <p className="text-gray-600">Write a short info that will describe the title useful.</p>
              <button className="mt-4 text-orange-500 font-semibold">Read More</button>
            </div>

            {/* Card 2 with Round Cuts on Both Sides Upper attached to top line */}
            <div className="bg-white p-6 rounded-lg shadow-lg relative hover:scale-105 transition-transform duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-orange-500"></div>
              {/* Adding the rounded cut effect */}
              <div className="relative overflow-hidden">
                <div className="relative z-10">
                  <FaWifi className="text-orange-500 mx-auto mb-4 h-16 w-16 animate-spin-slow" />
                  <h3 className="text-xl font-semibold text-gray-800">Transmission</h3>
                  <p className="text-gray-600">Write a short info that will describe the title useful.</p>
                  <button className="mt-4 text-orange-500 font-semibold">Read More</button>
                </div>
                {/* Round cuts attached to the top line */}
                <span className="absolute -top-4 -left-8 h-8 w-8 bg-orange-500 rounded-full"></span>
                <span className="absolute -top-4 -right-8 h-8 w-8 bg-orange-500 rounded-full"></span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg relative hover:scale-105 transition-transform duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-orange-500"></div>
              <FaMedkit className="text-orange-500 mx-auto mb-4 h-16 w-16 animate-bounce" />
              <h3 className="text-xl font-semibold text-gray-800">Emergency Help</h3>
              <p className="text-gray-600">Write a short info that will describe the title useful.</p>
              <button className="mt-4 text-orange-500 font-semibold">Read More</button>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg relative hover:scale-105 transition-transform duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-orange-500"></div>
              <FaEye className="text-orange-500 mx-auto mb-4 h-16 w-16 animate-pulse" />
              <h3 className="text-xl font-semibold text-gray-800">Eye Surgery</h3>
              <p className="text-gray-600">Write a short info that will describe the title useful.</p>
              <button className="mt-4 text-orange-500 font-semibold">Read More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EyeSystem;
