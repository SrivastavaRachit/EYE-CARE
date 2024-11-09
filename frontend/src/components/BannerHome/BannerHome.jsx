import React from 'react';
import { AiOutlineMail, AiOutlinePhone, AiOutlineWhatsApp, AiOutlineCalendar } from 'react-icons/ai';
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
        <div className="container mx-auto px-4 text-black">
          <h1 className="text-7xl font-bold italic mb-4">Best of Practice Place</h1>
          <h1 className="text-7xl italic font-bold mb-4">
            Medical <span className="text-7xl italic text-teal-300">Doctor</span>
          </h1>
          
          <p className="text-2xl font-semibold mb-9">
            Today, Barry’s is on the cusp of continued global expansion with over <br />
            100,000 members working out weekly in studios.
          </p>
          
          {/* Styled Appointment Button */}
          <a href='/contact' className="bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 text-xl hover:to-teal-800 text-black font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            Book Your Slot
          </a>
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
              <p className="text-xl font-semibold">hexagonsservices@gmail.com</p>
            </div>
            <a 
              href="mailto:hexagonsservices@gmail.com"
              className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            >
              Send Enquiry
            </a>
          </div>
          
          {/* Phone Section */}
          <div className="flex flex-col items-center space-y-4 p-6 hover:bg-teal-400 hover:text-white rounded-lg transition duration-300 ease-in-out mt-4 md:mt-0">
            <AiOutlinePhone size={60} className="text-green-700 hover:text-white" />
            <div className="text-center">
              <p className="font-bold">Appointment Call</p>
              <p className="text-xl font-semibold">+91 8840775386</p>
            </div>
            <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              Call Us Now
            </button>
          </div>

          {/* WhatsApp Section */}
          <div className="flex flex-col items-center space-y-4 p-6 hover:bg-teal-400 hover:text-white rounded-lg transition duration-300 ease-in-out mt-4 md:mt-0">
            <AiOutlineWhatsApp size={60} className="text-green-700 hover:text-white" />
            <div className="text-center">
              <p className="font-bold">WhatsApp Us</p>
              <p className="text-xl font-semibold">+91 8840775386</p>
            </div>
            <a 
              href="https://wa.me/+918840775386" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            >
              Chat On WhatsApp
            </a>
          </div>

          {/* Appointment Section */}
          <div className="flex flex-col items-center space-y-4 p-6 hover:bg-teal-400 hover:text-white rounded-lg transition duration-300 ease-in-out mt-4 md:mt-0">
            <AiOutlineCalendar size={60} className="text-green-700 hover:text-white" />
            <div className="text-center">
              <p className="font-bold">Make an Appointment</p>
              <p className="text-xl font-semibold">Schedule with ease</p>
            </div>
            <a 
              href='/contact' 
              className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
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
