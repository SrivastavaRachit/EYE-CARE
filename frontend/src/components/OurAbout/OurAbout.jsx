import React from 'react';
import { AiOutlineUser, AiOutlineMedicineBox, AiOutlineHeart, AiOutlineSolution, AiOutlineCheckCircle, AiOutlineArrowRight } from 'react-icons/ai';
import image1 from '../../assets/firstimage.png'
import image2 from '../../assets/secondimage.png'


const OurAbout = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center mb-12">
        {/* Images on the Left */}
        <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2 md:w-1/2">
          {/* Overlay Text Above Images */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-teal-100 text-teal-700 px-6 py-3 rounded-full text-lg font-bold">
            25+ Years Experience Working
          </div>

          <img
            src={image1}
            alt="Doctor Image 1"
            className="w-full h-[500px] object-cover rounded-lg"
          />
          <img
            src={image2}
            alt="Doctor Image 2"
            className="w-full h-[500px] object-cover rounded-lg"
          />
        </div>
        
        {/* Text on the Right */}
        <div className="md:w-1/2 md:ml-12 text-center md:text-left mt-7 md:mt-0">
          <h2 className="text-5xl font-bold mb-6">About World Medical Central Hospital <span className='text-teal-400'> Doctor</span> </h2>
          <p className="text-2xl text-gray-600 mb-4">
            It is issued free of charge in medical offices or at home with time purchase of services in the amount of more than $40 per person.
            Our administration and support staff all have exceptional skills to improve health globally.
          </p>
          <ul className="text-gray-600 text-xl mb-4 space-y-2">
            <li className="flex items-center">
              <AiOutlineCheckCircle className="text-teal-500 mr-2" />
              Fractures and dislocations
            </li>
            <li className="flex items-center">
              <AiOutlineCheckCircle className="text-teal-500 mr-2" />
              Connecting with the world to improve health globally
            </li>
            <li className="flex items-center">
              <AiOutlineCheckCircle className="text-teal-500 mr-2" />
              Our administrations and support staff have exceptional skills
            </li>
          </ul>
          <button className="flex items-center bg-teal-500 hover:bg-teal-700 text-white font-bold text-2xl py-3 px-6 rounded-full shadow-lg transition duration-200 ease-in-out transform hover:scale-105 mt-6">
            About More
            <AiOutlineArrowRight className="ml-3 text-3xl" />
          </button>
        </div>
      </div>

      {/* Bottom Section - Stats Boxes */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-100 p-6 rounded-lg text-center">
          <AiOutlineUser size={50} className="text-teal-500 mx-auto mb-2" />
          <h3 className="text-3xl font-bold text-teal-500">78k+</h3>
          <p className="text-gray-600 text-2xl font-bold">Family Medicine</p>
        </div>
        <div className="bg-gray-100 text-teal-500 p-6 rounded-lg text-center">
          <AiOutlineSolution size={50} className="text-teal-500 mx-auto mb-2" />
          <h3 className="text-3xl font-bold">256+</h3>
          <p className="text-gray-600 font-bold text-2xl">Planning Solution</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg text-center">
          <AiOutlineHeart size={50} className="text-teal-500 mx-auto mb-2" />
          <h3 className="text-3xl font-bold text-teal-500">76k+</h3>
          <p className="text-gray-600 text-2xl font-bold">Doctor Support</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg text-center">
          <AiOutlineMedicineBox size={50} className="text-teal-500 mx-auto mb-2" />
          <h3 className="text-3xl font-bold text-teal-500">336+</h3>
          <p className="text-gray-600 text-2xl font-bold">Emergency Plan</p>
        </div>
      </div>
    </div>
  );
};

export default OurAbout;
