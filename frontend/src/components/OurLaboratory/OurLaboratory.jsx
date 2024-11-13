import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Labo2 from '../../assets/Labo2.png';
import Labo1 from '../../assets/Labo1.png';

const OurLaboratory = () => {
  return (
    <div className="p-4 sm:p-8 animate-fadeIn">
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between lg:mr-[-1%] space-y-4 lg:space-y-0">
          {/* Laboratory and Emergency Sections as Flex Children */}
          <div className="flex flex-col h-full space-y-4">
            {/* Laboratory Section with Blue Background */}
            <div className="bg-[#0b2747] text-white p-6 sm:p-8 rounded-lg flex-1">
              <div className="flex items-center space-x-4 mb-4 relative">
                <h3 className="text-lg font-semibold relative">
                  {/* Circle Elements on Left and Right of the Heading */}
                  <span className="relative inline-flex items-center justify-center">
                    <span className="relative px-6 z-10 font-medium text-xl">Our Laboratory Place</span>
                    <span className="absolute left-[-3px] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#56cfe1] rounded-full"></span>
                    <span className="absolute right-[-3px] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#56cfe1] rounded-full"></span>
                  </span>
                </h3>
              </div>
              <h2 className="text-4xl sm:text-6xl font-bold text-balance">
                We Are Practice In Medical Hospital This <span className="text-teal-400">Leading.</span>
              </h2>
              <p className="mt-4 text-balance font-semibold text-lg sm:text-xl text-gray-300">
                It is issued free of charge in medical offices or at home with time
                purchase of services in the amount of more than $40 per person, issued in an elevated ambiance.
              </p>
            </div>

            {/* Emergency Plan Section with White Background */}
            <div className="bg-white p-4 sm:p-6 flex-1">
              <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4">
                <img
                  src={Labo1}
                  alt="Emergency Plan"
                  className="w-16 h-16 sm:w-20 sm:h-20"
                />
                <div className="mt-4 sm:mt-0">
                  <h4 className="text-2xl sm:text-4xl font-bold text-gray-800">Emergencies Plan</h4>
                  <p className="text-gray-600 text-lg sm:text-2xl text-balance mt-2">
                    Our emergency plans are designed to provide quick and efficient responses
                    in critical situations. With our regulated providers and accessible
                    services, we ensure a safe and caring environment.
                  </p>
                  <ul className="list-none text-gray-600 space-y-2 mt-4">
                    <li className="flex text-lg sm:text-xl items-start">
                      <FaCheckCircle className="text-teal-600 mr-2" />
                      Medical set associated regulated new provider.
                    </li>
                    <li className="flex text-lg sm:text-xl items-start">
                      <FaCheckCircle className="text-teal-600 mr-2" />
                      Issue in capita spa office discourse needs access.
                    </li>
                    <li className="flex text-lg sm:text-xl items-start">
                      <FaCheckCircle className="text-teal-600 mr-2" />
                      Capital item access issue in the elevated ambiance.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full lg:w-1/2 lg:ml-[-2%] mt-6 lg:mt-0">
          <img
            src={Labo2}
            alt="Medical Staff"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-5 right-5 text-3xl sm:text-4xl text-[#56cfe1] cursor-pointer animate-pulse">
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLaboratory;
