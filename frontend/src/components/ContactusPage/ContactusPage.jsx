import React, { useState } from 'react';
import bannerContact from '../../assets/bannerContact.png';
import { FaPhoneAlt, FaRegEnvelope, FaRegCommentDots } from "react-icons/fa";

const ContactusPage = () => {
  const [formData, setFormData] = useState({
    isNewPatient: '',
    name: '',
    date: '',
    contact: '',
    sex: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello, I'm ${formData.name}. I am a ${formData.isNewPatient === 'yes' ? 'new' : 'existing'} patient, and I would like to book an appointment on ${formData.date}. My contact is ${formData.contact} and gender is ${formData.sex}.`;
    const whatsappLink = `https://wa.me/918840775386?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="bg-gray-800 text-white font-sans">
      {/* Banner Section */}
      <div
        className="relative bg-cover bg-center h-[50vh] sm:h-[60vh] md:h-[75vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${bannerContact})` }}
      >
        <div className="absolute inset-0 "></div>
        <div className="relative z-10 text-center px-5 max-w-xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 text-black font-[Poppins]">
            Contact Doctors
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl italic text-black font-semibold mb-6 md:mb-8">
            Reach out to our dedicated healthcare team for personalized solutions. We're committed to guiding your health journey with expert advice and compassionate care.
          </p>
          <a
            href="#contact"
            className="bg-gradient-to-r from-teal-600 to-teal-400 text-black font-semibold text-lg sm:text-xl tracking-wider py-3 px-8 md:px-10 rounded-full border-2 border-white shadow-md transition-all transform hover:scale-105 hover:shadow-lg"
          >
            Book Your Appointment
          </a>
        </div>
      </div>
      
      {/* Contact Information */}
      <div id="contact" className="bg-white text-gray-800 py-12 sm:py-14 px-4 sm:px-6 md:px-24">
        <div className="flex flex-col md:flex-row items-center justify-around space-y-8 md:space-y-0">

          {/* Each Contact Method */}
          <div className="flex flex-col items-center text-center p-6 max-w-xs border border-teal-500 rounded-lg shadow-lg">
            <div className="bg-teal-500 p-4 rounded-full mb-4 shadow-md">
              <FaRegEnvelope className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-xl sm:text-2xl mb-2 text-teal-700">Email Us</h3>
            <p className="text-lg font-semibold text-black mb-4">hexagonsservices@gmail.com</p>
            <a href="mailto:hexagonsservices@gmail.com" className="text-teal-600 text-lg font-semibold hover:underline">
              Appointment Now
            </a>
          </div>

          {/* Appointment Call Section */}
          <div className="flex flex-col items-center text-center p-6 max-w-xs border border-teal-500 rounded-lg shadow-lg">
            <div className="bg-teal-500 p-4 rounded-full mb-4 shadow-md">
              <FaPhoneAlt className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-xl sm:text-2xl mb-2 text-teal-700">Appointment Call</h3>
            <p className="text-lg text-black font-semibold mb-4">24/7 – quick and easy</p>
            <a href='tel:+918840775386' className="text-teal-600 text-lg font-semibold hover:underline">
              Appointment Now
            </a>
          </div>

          {/* Address Section */}
          <div className="flex flex-col items-center text-center p-6 max-w-xs border border-teal-500 rounded-lg shadow-lg">
            <div className="bg-teal-500 p-4 rounded-full mb-4 shadow-md">
              <FaRegCommentDots className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-xl sm:text-2xl mb-2 text-teal-700">Our Location</h3>
            <p className="text-lg text-black font-semibold mb-4">Gomtinagar, LKO</p>
            <a
              href="https://maps.google.com/?q=Gomtinagar, LKO"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 font-semibold text-lg hover:underline"
            >
              Find Us Here
            </a>
          </div>
        </div>
      </div>

      <div className="bg-teal-900 text-white font-sans py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 space-y-10 lg:space-y-0 lg:space-x-16">
          <div className="flex flex-col space-y-7 max-w-lg">
            <div className="flex items-center leading-tight space-x-3">
              <FaRegEnvelope className="text-teal-400 w-8 h-8" />
              <p className="text-teal-400 text-2xl font-semibold">Our Contact Now</p>
              <FaRegCommentDots className="text-teal-400 w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Get In Questions <span className="text-teal-400 underline decoration-teal-500">Touch</span>.
            </h2>
            <p className="text-gray-300 text-xl leading-relaxed">
              It is issued free of charge in medical offices or at home with time purchase of services in the amount of more than ₹40 per person. Icesa in an elevated ambience.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-start space-x-2">
                <span className="text-teal-400 text-xl">✔</span>
                <span className="text-xl">Business sagittis leo for best medical call.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-teal-400 text-xl">✔</span>
                <span className="text-xl">We give management hospital calling.</span>
              </li>
            </ul>
            <div className="flex items-center space-x-4 mt-6">
              <div className="bg-teal-500 p-3 rounded-full">
                <FaPhoneAlt className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-3xl font-semibold">Appointment Call</h4>
                <p className="text-gray-300 text-2xl">24/7 – quick and easy</p>
              </div>
            </div>
            <a
              href="#contact"
              className="relative inline-block w-full max-w-xs md:max-w-sm px-6 py-2 md:px-8 md:py-3 text-center md:text-lg font-semibold text-white bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 rounded-full shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 active:scale-95"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100 rounded-full"></span>
              <span className="relative text-xl text-black font-bold z-10">Contact Us</span>
            </a>
          </div>

          <div className="bg-teal-700 p-10 rounded-lg shadow-lg w-full lg:w-[28rem]">
            <h3 className="text-3xl italic font-bold mb-4 text-black">Appointments</h3>
            <p className="text-white font-bold text-2xl mb-6">Available 24/7 Support health</p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <select
                name="isNewPatient"
                className="w-full p-3 rounded-md bg-teal-800 text-xl text-white placeholder-gray-400"
                value={formData.isNewPatient}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>New Patient*</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <input
                type="text"
                name="name"
                placeholder="Your Name*"
                className="w-full p-3 rounded-md bg-teal-800 text-white text-xl placeholder-gray-400"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="date"
                name="date"
                placeholder="Patient Date*"
                className="w-full p-3 text-xl rounded-md bg-teal-800 text-white placeholder-gray-400"
                value={formData.date}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="contact"
                placeholder="Email or Phone*"
                className="w-full text-xl p-3 rounded-md bg-teal-800 text-white placeholder-gray-400"
                value={formData.contact}
                onChange={handleInputChange}
                required
              />
              <select
                name="sex"
                className="w-full text-xl p-3 rounded-md bg-teal-800 text-white placeholder-gray-400"
                value={formData.sex}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>Sex*</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <button
                type="submit"
                className="relative overflow-hidden w-full text-xl bg-gradient-to-r from-teal-400 via-teal-500 to-teal-700 text-black py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 opacity-0 hover:opacity-80 transition-all duration-500"></span>
                <span className="relative z-10 text-black font-bold">Send Request</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactusPage;
