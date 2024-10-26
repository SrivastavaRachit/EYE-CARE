import React from 'react';
import { AiOutlineMail, AiOutlinePhone, AiOutlineWhatsApp, AiOutlineCalendar } from 'react-icons/ai'; // AiOutlineCalendar as appointment icon
import bannerImage from '../../assets/banner.png';

const BannerHome = () => {
  return (
    <div className="relative">
      {/* Banner Section */}
      <div 
        className="bg-cover bg-center-top h-[75vh] flex items-center"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundPosition: 'center top',
        }}
      >
        <div className="container mx-auto px-4 text-white">
          <h1 className="text-7xl font-bold mb-4">Best of Practice Place</h1>
          <h1 className="text-7xl font-bold mb-4">
            Medical <span className="text-7xl text-teal-400">Doctor</span>
          </h1>
          
          <p className="text-2xl mb-9">
            Today, Barry’s is on the cusp of continued global expansion with over <br />
            100,000 members working out weekly in studios.
          </p>
          
          {/* Styled Appointment Button */}
          <button className="bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-black font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            Make Appointment
          </button>
        </div>
      </div>

      {/* Contact Options Section */}
      <section className="bg-white text-black py-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-around text-lg md:text-xl">
          {/* Email Section */}
          <div className="flex flex-col items-center space-y-4 p-6 hover:bg-teal-400 hover:text-white rounded-lg transition duration-300 ease-in-out">
            <AiOutlineMail size={60} className="text-green-700 hover:text-white" />
            <div className="text-center">
              <p className="font-bold">Email Us</p>
              <p className="text-base md:text-lg">contact@yourdomain.com</p>
            </div>
            <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              Appointment Now
            </button>
          </div>
          
          {/* Phone Section */}
          <div className="flex flex-col items-center space-y-4 p-6 hover:bg-teal-400 hover:text-white rounded-lg transition duration-300 ease-in-out mt-4 md:mt-0">
            <AiOutlinePhone size={60} className="text-green-700 hover:text-white" />
            <div className="text-center">
              <p className="font-bold">Appointment Call</p>
              <p className="text-base md:text-lg">24/7 - Quick and easy</p>
            </div>
            <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              Appointment Now
            </button>
          </div>

          {/* WhatsApp Section */}
          <div className="flex flex-col items-center space-y-4 p-6 hover:bg-teal-400 hover:text-white rounded-lg transition duration-300 ease-in-out mt-4 md:mt-0">
            <AiOutlineWhatsApp size={60} className="text-green-700 hover:text-white" />
            <div className="text-center">
              <p className="font-bold">WhatsApp Us</p>
              <p className="text-base md:text-lg">+123 456 7890</p>
            </div>
            <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              Appointment Now
            </button>
          </div>

          {/* Appointment Section */}
          <div className="flex flex-col items-center space-y-4 p-6 hover:bg-teal-400 hover:text-white rounded-lg transition duration-300 ease-in-out mt-4 md:mt-0">
            <AiOutlineCalendar size={60} className="text-green-700 hover:text-white" />
            <div className="text-center">
              <p className="font-bold">Make an Appointment</p>
              <p className="text-base md:text-lg">Schedule with ease</p>
            </div>
            <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              Appointment Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BannerHome;
