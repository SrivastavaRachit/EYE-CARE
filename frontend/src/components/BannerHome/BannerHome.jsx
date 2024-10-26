import React from 'react';
import { AiOutlineMail, AiOutlinePhone, AiOutlineWhatsApp } from 'react-icons/ai';
import bannerImage from '../../assets/banner.png'; // Import the image


const BannerHome = () => {
  return (
    <div className="relative">
      {/* Banner Section */}
      <div 
        className="bg-cover bg-center-top h-[75vh] flex items-center"
        style={{
          backgroundImage: `url(${bannerImage})`, // Use imported image here
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
          <button className="bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            Make Appointment
          </button>
        </div>
      </div>

      {/* Contact Options Section */}
      <section className="bg-teal-500 text-white py-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-around">
          <div className="flex items-center space-x-4">
            <AiOutlineMail size={40} />
            <div>
              <p>Email Us</p>
              <p className="text-sm">contact@yourdomain.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <AiOutlinePhone size={40} />
            <div>
              <p>Appointment Call</p>
              <p className="text-sm">24/7 - Quick and easy</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <AiOutlineWhatsApp size={40} />
            <div>
              <p>WhatsApp Us</p>
              <p className="text-sm">+123 456 7890</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BannerHome;
