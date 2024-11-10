import React from 'react';
import { AiOutlineMail, AiOutlinePhone, AiOutlineWhatsApp, AiOutlineCalendar } from 'react-icons/ai';
import bannerImage from '../../assets/banner.png';

const BannerHome = () => {
  return (
    <div className="relative">
      {/* Banner Section */}
      <div
        className="bg-cover bg-center-top h-[60vh] sm:h-[70vh] lg:h-[75vh] flex items-center"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundPosition: 'center top',
        }}
      >
        <div className="container mx-auto px-6 lg:px-12 text-black text-center lg:text-left">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold italic mb-3 sm:mb-5">
            Best of Practice Place
          </h1>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl italic font-bold mb-3 sm:mb-5">
            Medical <span className="text-teal-300">Doctor</span>
          </h1>
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-medium mb-6 sm:mb-8">
            Today, Barry’s is on the cusp of continued global expansion with over <br className="hidden md:block" />
            100,000 members working out weekly in studios.
          </p>
          <a
            href='/contact'
            className="inline-block bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 text-sm sm:text-lg md:text-xl text-black font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
          >
            Book Your Slot
          </a>
        </div>
      </div>

      {/* Contact Options Section */}
      <section className="bg-white text-black py-6 sm:py-10">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-10 text-sm sm:text-lg md:text-xl">
          {/* Email Section */}
          <div className="flex flex-col items-center space-y-3 p-4 bg-gray-100 hover:bg-teal-400 hover:text-white rounded-lg transition duration-300 ease-in-out w-full sm:w-[48%] lg:w-[22%] max-w-xs lg:max-w-sm">
            <AiOutlineMail size={40} className="text-green-700 hover:text-white mb-2 lg:mb-3" />
            <div className="text-center">
              <p className="font-bold text-lg md:text-xl">Email Us</p>
              <p className="text-sm md:text-base lg:text-lg font-semibold break-words">
                hexagonsservices@gmail.com
              </p>
            </div>
            <a
              href="mailto:hexagonsservices@gmail.com"
              className="inline-block bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 md:py-2.5 lg:py-3 px-5 lg:px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            >
              Send Enquiry
            </a>
          </div>

          {/* Phone Section */}
          <div className="flex flex-col items-center space-y-3 p-4 bg-gray-100 hover:bg-teal-400 hover:text-white rounded-lg transition duration-300 ease-in-out w-full sm:w-[48%] lg:w-[22%] max-w-xs lg:max-w-sm">
            <AiOutlinePhone size={40} className="text-green-700 hover:text-white mb-2 lg:mb-3" />
            <div className="text-center">
              <p className="font-bold text-lg md:text-xl">Appointment Call</p>
              <p className="text-sm md:text-base lg:text-lg font-semibold">+91 8840775386</p>
            </div>
            <a
              href='tel:+918840775386'
              className="inline-block bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 md:py-2.5 lg:py-3 px-5 lg:px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            >
              Call Us Now
            </a>
          </div>

          {/* WhatsApp Section */}
          <div className="flex flex-col items-center space-y-3 p-4 bg-gray-100 hover:bg-teal-400 hover:text-white rounded-lg transition duration-300 ease-in-out w-full sm:w-[48%] lg:w-[22%] max-w-xs lg:max-w-sm">
            <AiOutlineWhatsApp size={40} className="text-green-700 hover:text-white mb-2 lg:mb-3" />
            <div className="text-center">
              <p className="font-bold text-lg md:text-xl">WhatsApp Us</p>
              <p className="text-sm md:text-base lg:text-lg font-semibold">+91 8840775386</p>
            </div>
            <a
              href="https://wa.me/+918840775386"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 md:py-2.5 lg:py-3 px-5 lg:px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            >
              Chat On WhatsApp
            </a>
          </div>

          {/* Appointment Section */}
          <div className="flex flex-col items-center space-y-3 p-4 bg-gray-100 hover:bg-teal-400 hover:text-white rounded-lg transition duration-300 ease-in-out w-full sm:w-[48%] lg:w-[22%] max-w-xs lg:max-w-sm">
            <AiOutlineCalendar size={40} className="text-green-700 hover:text-white mb-2 lg:mb-3" />
            <div className="text-center">
              <p className="font-bold text-lg md:text-xl">Make an Appointment</p>
              <p className="text-sm md:text-base lg:text-lg font-semibold">Schedule with ease</p>
            </div>
            <a
              href='/contact'
              className="inline-block bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 md:py-2.5 lg:py-3 px-5 lg:px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            >
              Reserve Your Slot
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BannerHome;
