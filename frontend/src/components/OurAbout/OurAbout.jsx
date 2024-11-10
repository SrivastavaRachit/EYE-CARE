import React from 'react';
import { AiOutlineUser, AiOutlineMedicineBox, AiOutlineHeart, AiOutlineSolution, AiOutlineCheckCircle, AiOutlineArrowRight } from 'react-icons/ai';
import image1 from '../../assets/firstimage.png';
import image2 from '../../assets/secondimage.png';
import { NavLink } from 'react-router-dom';

const OurAbout = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center mb-12 space-y-8 lg:space-y-0">
        
        {/* Images on the Left */}
        <div className="relative grid grid-cols-1 gap-4 lg:grid-cols-2 lg:w-1/2">
          {/* Overlay Text Above Images */}
          <div className="absolute -top-8 lg:-top-12 left-1/2 transform -translate-x-1/2 bg-teal-100 text-teal-700 px-4 lg:px-6 py-2 lg:py-3 rounded-full text-base lg:text-lg font-bold">
            25+ Years Experience Working
          </div>

          <img
            src={image1}
            alt="Doctor Image 1"
            className="w-full h-64 sm:h-80 lg:h-[500px] object-cover rounded-lg"
          />
          <img
            src={image2}
            alt="Doctor Image 2"
            className="w-full h-64 sm:h-80 lg:h-[500px] object-cover rounded-lg"
          />
        </div>

        {/* Text on the Right */}
        <div className="lg:w-1/2 lg:ml-12 text-center lg:text-left mt-7 lg:mt-0 px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About World Medical Central Hospital <span className='text-teal-400'>Doctor</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-4">
            It is issued free of charge in medical offices or at home with time purchase of services in the amount of more than $40 per person.
            Our administration and support staff all have exceptional skills to improve health globally.
          </p>

          {/* List with Icons on the Left */}
          <ul className="text-gray-600 text-lg sm:text-xl mb-4 space-y-2">
            <li className="flex items-start justify-center lg:justify-start">
              <AiOutlineCheckCircle className="text-teal-500 mr-2 w-6 h-6" />
              <span>Fractures and dislocations</span>
            </li>
            <li className="flex items-start justify-center lg:justify-start">
              <AiOutlineCheckCircle className="text-teal-500 mr-2 w-6 h-6" />
              <span>Connecting with the world to improve health globally</span>
            </li>
            <li className="flex items-start justify-center lg:justify-start">
              <AiOutlineCheckCircle className="text-teal-500 mr-2 w-6 h-6" />
              <span>Our administrations and support staff have exceptional skills</span>
            </li>
          </ul>

          {/* Centered Button */}
          <div className="text-center lg:text-left">
            <NavLink to='/about'>
              <button className="flex items-center justify-center mx-auto lg:mx-0 bg-teal-500 hover:bg-teal-700 text-white font-bold text-xl sm:text-2xl py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow-lg transition duration-200 ease-in-out transform hover:scale-105 mt-6">
                About More
                <AiOutlineArrowRight className="ml-3 text-2xl sm:text-3xl" />
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Bottom Section - Stats Boxes */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-100 p-4 sm:p-6 rounded-lg text-center">
          <AiOutlineUser size={40} sm:size={50} className="text-teal-500 mx-auto mb-2" />
          <h3 className="text-2xl sm:text-3xl font-bold text-teal-500">78k+</h3>
          <p className="text-gray-600 text-lg sm:text-2xl font-bold">Family Medicine</p>
        </div>
        <div className="bg-gray-100 text-teal-500 p-4 sm:p-6 rounded-lg text-center">
          <AiOutlineSolution size={40} sm:size={50} className="text-teal-500 mx-auto mb-2" />
          <h3 className="text-2xl sm:text-3xl font-bold">256+</h3>
          <p className="text-gray-600 font-bold text-lg sm:text-2xl">Planning Solution</p>
        </div>
        <div className="bg-gray-100 p-4 sm:p-6 rounded-lg text-center">
          <AiOutlineHeart size={40} sm:size={50} className="text-teal-500 mx-auto mb-2" />
          <h3 className="text-2xl sm:text-3xl font-bold text-teal-500">76k+</h3>
          <p className="text-gray-600 text-lg sm:text-2xl font-bold">Doctor Support</p>
        </div>
        <div className="bg-gray-100 p-4 sm:p-6 rounded-lg text-center">
          <AiOutlineMedicineBox size={40} sm:size={50} className="text-teal-500 mx-auto mb-2" />
          <h3 className="text-2xl sm:text-3xl font-bold text-teal-500">336+</h3>
          <p className="text-gray-600 text-lg sm:text-2xl font-bold">Emergency Plan</p>
        </div>
      </div>
    </div>
  );
};

export default OurAbout;
