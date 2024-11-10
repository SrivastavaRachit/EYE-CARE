import React from 'react';
import bannerContact from '../../assets/bannerContact.png';
import { FaPhoneAlt, FaRegEnvelope, FaRegCommentDots } from "react-icons/fa";


const ContactusPage = () => {
  return (
    <div className="bg-gray-800 text-white font-sans">
      {/* Banner Section */}
      <div
        className="relative bg-cover bg-center h-[75vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${bannerContact})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 "></div>

        <div className="relative z-10 text-center px-5 max-w-2xl">
          <h1 className="text-7xl  font-bold mb-4 text-black font-[Poppins]">
            Contact Doctors
          </h1>
          <p className="text-xl italic text-black font-semibold mb-8">
            Reach out to our dedicated healthcare team for personalized solutions. We're committed to guiding your health journey with expert advice and compassionate care.
          </p>
          <a
            href="#contact"
            className="bg-gradient-to-r from-teal-600 to-teal-400 text-black font-semibold text-xl tracking-wider py-3 px-10 rounded-full border-2 border-white shadow-md transition-all transform hover:scale-105 hover:from-teal-400 hover:to-teal-600 hover:shadow-lg"
            style={{ letterSpacing: '0.05em' }}
          >
            Book Your Appointment
          </a>


        </div>
      </div>

      {/* Main Contact Section */}
      <div id="contact" className="bg-white text-gray-800 py-14 px-6 md:px-24">
        <div className="flex flex-col md:flex-row items-center justify-around space-y-10 md:space-y-0">

          {/* Email Section */}
          <div className="flex flex-col items-center text-center p-6 max-w-xs border border-teal-500 rounded-lg shadow-lg">
            <div className="bg-teal-500 p-4 rounded-full mb-4 shadow-md">
              <svg className="w-10 h-10 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 13.065l-8-6v10.935h16v-10.935l-8 6zm0-9.065l10 7.5v11.5h-20v-11.5l10-7.5zm0 6.569l-7.78-5.782h15.56l-7.78 5.782z" />
              </svg>
            </div>
            <h3 className="font-bold text-2xl mb-2 text-teal-700">Email Us</h3>
            <p className="text-xl font-semibold text-black mb-4">hexagonsservices@gmail.com</p>
            <a href="mailto:hexagonsservices@gmail.com" className="text-teal-600 text-xl font-semibold hover:underline">
              Appointment Now
            </a>
          </div>

          {/* Appointment Call Section */}
          <div className="flex flex-col items-center text-center p-6 max-w-xs border border-teal-500 rounded-lg  shadow-lg">
            <div className="bg-teal-500 p-4 rounded-full mb-4 shadow-md">
              <svg className="w-10 h-10 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M20.487 17.14c-.926.929-1.98 1.671-3.14 2.181-.842.36-1.719.548-2.6.548-.992 0-1.984-.214-2.926-.643-1.604-.738-2.945-2.08-3.682-3.682-.872-1.921-.888-3.855-.888-5.805s.016-3.884.888-5.805c.369-.87.964-1.662 1.727-2.305.732-.632 1.536-1.151 2.386-1.526.517-.224 1.059-.4 1.607-.525.665-.153 1.335-.235 2.005-.247h.034c1.3-.016 2.608.189 3.8.643 1.141.433 2.188 1.177 3.05 2.05 1.035 1.05 1.776 2.406 2.15 3.854.417 1.671.332 3.384-.243 5.023-.482 1.37-1.217 2.61-2.107 3.5zm-8.487 2.86c-.846 0-1.709-.119-2.58-.368-.683-.193-1.382-.456-2.091-.778-.808-.372-1.603-.826-2.362-1.356l2.362-2.362c.163-.163.344-.27.543-.344.111-.04.236-.062.363-.062.134 0 .267.023.4.068.077.025.15.055.215.1.345.239.684.488 1.016.753 1.145.927 2.441 1.842 3.782 2.605.208.118.427.22.648.309.18.073.376.11.573.11.209 0 .414-.036.613-.107.11-.037.22-.077.327-.119l2.49-2.49c.876.527 1.754.993 2.596 1.335 1.633.664 3.328.707 4.91.126 1.068-.396 2.101-1.004 3.044-1.943 1.036-1.036 1.771-2.378 2.145-3.824.41-1.631.36-3.316-.141-4.908-.34-1.044-.818-2.026-1.429-2.922-.784-1.156-1.752-2.135-2.882-2.91-.602-.399-1.229-.707-1.874-.947-.553-.201-1.112-.352-1.676-.45-.618-.109-1.24-.179-1.856-.178h-.034c-.863.014-1.727.142-2.569.379-.793.22-1.568.536-2.306.946-.783.433-1.505 1.007-2.139 1.721-1.059 1.177-1.952 2.603-2.487 4.174-.535 1.568-.663 3.242-.663 4.898 0 1.656.128 3.33.663 4.898.535 1.57 1.428 2.997 2.487 4.174.6.668 1.29 1.255 2.045 1.742.462.308.941.575 1.439.8.627.289 1.286.483 1.961.577.715.103 1.436.123 2.148-.039.72-.163 1.426-.437 2.116-.811.521-.287 1.03-.621 1.515-.996l2.362 2.362c-.513.375-1.041.729-1.585 1.048-.993.593-2.035.992-3.098 1.17-.907.144-1.822.197-2.737.169z" />
              </svg>
            </div>
            <h3 className="font-bold text-2xl mb-2 text-teal-700">Appointment Call</h3>
            <p className="text-xl text-black font-semibold mb-4">24/7 – quick and easy</p>
            <a href='tel:+918840775386' className="text-teal-600 text-xl font-semibold hover:underline">
              Appointment Now
            </a>
          </div>

          {/* Address Section */}
          <div className="flex flex-col items-center text-center p-6 max-w-xs border border-teal-500 rounded-lg shadow-lg">
            <div className="bg-teal-500 p-4 rounded-full mb-4 shadow-md">
              <svg className="w-10 h-10 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2c-4.963 0-9 4.037-9 9 0 6.301 8.156 12.732 8.458 12.966.254.197.585.197.839 0 .303-.234 8.458-6.665 8.458-12.966 0-4.963-4.037-9-9-9zm0 15c-1.655 0-3-1.345-3-3s1.345-3 3-3 3 1.345 3 3-1.345 3-3 3zm0-8c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5z" />
              </svg>
            </div>
            <h3 className="font-bold text-2xl mb-2 text-teal-700">Our Location</h3>
            <p className="text-xl text-black font-semibold mb-4">Gomtinagar, LKO</p>
            <a
              href="https://maps.google.com/?q=Gomtinagar, LKO"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 font-semibold text-xl hover:underline"
            >
              Find Us Here
            </a>
          </div>
        </div>
      </div>
      <div className="bg-teal-900 text-white font-sans py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 space-y-10 lg:space-y-0 lg:space-x-16">

          {/* Left Section */}
          <div className="flex flex-col space-y-7 max-w-lg">
            <div className="flex items-center leading-tight space-x-3">
              <FaRegEnvelope className="text-teal-400 w-8 h-8" />
              <p className="text-teal-400 text-2xl  font-semibold">Our Contact Now</p>
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

          {/* Right Section - Form */}
          <div className="bg-teal-700 p-10 rounded-lg shadow-lg w-full lg:w-[28rem]">
            <h3 className="text-3xl italic font-bold mb-4 text-black">Appointments</h3>
            <p className="text-white font-bold text-2xl mb-6">Available 24/7 Support health</p>
            <form className="space-y-4">
              <select
                className="w-full p-3 rounded-md bg-teal-800 text-xl text-white placeholder-gray-400"
                defaultValue=""
              >
                <option value="" disabled>New Patient*</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full p-3 rounded-md bg-teal-800 text-white text-xl placeholder-gray-400"
              />
              <input
                type="date"
                placeholder="Patient Date*"
                className="w-full p-3 text-xl rounded-md bg-teal-800 text-white placeholder-gray-400"
              />
              <input
                type="text"
                placeholder="Email or Phone*"
                className="w-full text-xl p-3 rounded-md bg-teal-800 text-white placeholder-gray-400"
              />
              <select
                className="w-full text-xl p-3 rounded-md bg-teal-800 text-white placeholder-gray-400"
                defaultValue=""
              >
                <option value="" disabled>Sex*</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <button
                type="submit"
                className="relative overflow-hidden w-full text-xl bg-gradient-to-r from-teal-400 via-teal-500 to-teal-700 text-white font-semibold py-3 rounded-full shadow-lg transform scale-100 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl active:scale-95 active:shadow-md group"
              >
                {/* <!-- Default Gradient --> */}
                <span className="absolute inset-0 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 opacity-80 animate-gradient-x transition-all duration-500 group-hover:opacity-0"></span>

                {/* <!-- Hover Gradient --> */}
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 opacity-0 group-hover:opacity-80 transition-all duration-500"></span>

                <span className="relative z-10 flex text-black font-bold items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-white animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 2L3 14h9v8l10-12h-9V2z" />
                  </svg>
                  Send Request
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ContactusPage;