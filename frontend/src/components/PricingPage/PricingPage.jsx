import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { NavLink } from 'react-router-dom';

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-teal-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-teal-800 animate-fade-in">
          <i className="fas fa-heartbeat text-teal-600 mr-2"></i>
          Affordable Healthcare Plans
          <i className="fas fa-heartbeat text-teal-600 ml-2"></i>
        </h1>
        <p className="mt-4 text-2xl text-teal-600">
          Choose a plan that suits your healthcare needs and ensures the best care.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-3 max-w-6xl w-full">

        {/* Basic Plan */}
        <div className="relative bg-white border border-teal-200 rounded-lg shadow-lg transform hover:scale-105 transition duration-500 ease-in-out p-8 flex flex-col">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-teal-500 text-white flex items-center justify-center rounded-full text-xl font-semibold">
            <i className="fas fa-stethoscope"></i>
          </div>
          <h2 className="mt-8 text-2xl font-bold text-teal-700 flex items-center justify-center">
            <i className="fas fa-user-md mr-2"></i> Basic Care
          </h2>
          <p className="mt-2 text-xl text-teal-600">For occasional checkups</p>
          <p className="mt-4 text-4xl font-bold text-teal-800">₹29</p>
          <ul className="mt-6 space-y-2 text-teal-600">
            <li><i className="fas fa-user-md mr-2 text-xl text-teal-500"></i> One Doctor Consultation</li>
            <li><i className="fas fa-heartbeat mr-2 text-xl text-teal-500"></i> Basic Health Checkup</li>
            <li><i className="fas fa-pills mr-2 text-xl text-teal-500"></i> Prescription Assistance</li>
            <li><i className="fas fa-phone-alt text-xl mr-2 text-teal-500"></i> 24/7 Support</li>
          </ul>
          <p className="mt-4 text-xl text-teal-600">Ideal for those who need occasional consultations and basic health services.</p>
          <div className="mt-auto flex justify-center">
            <button className="text-2xl w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 flex items-center justify-center space-x-2 max-w-xs">
              <i className="fas fa-arrow-right"></i>
              <NavLink to='/contact'>
                <span>Choose Plan</span>
              </NavLink>
            </button>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="relative bg-teal-600 text-white border border-teal-300 rounded-lg shadow-lg transform hover:scale-105 transition duration-500 ease-in-out p-8 flex flex-col">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white text-teal-600 flex items-center justify-center rounded-full text-xl font-semibold">
            <i className="fas fa-medkit"></i>
          </div>
          <h2 className="mt-8 text-2xl font-bold flex items-center justify-center">
            <i className="fas fa-heartbeat mr-2"></i> Premium Care
          </h2>
          <p className="mt-2 text-xl">For regular healthcare needs</p>
          <p className="mt-4 text-4xl font-bold">₹79</p>
          <ul className="mt-6 space-y-2">
            <li><i className="fas fa-user-md mr-2 text-xl text-white"></i> Unlimited Consultations</li>
            <li><i className="fas fa-clipboard-list text-xl mr-2 text-white"></i> Full Health Checkup</li>
            <li><i className="fas fa-shield-alt text-xl mr-2 text-white"></i> Preventative Care Planning</li>
            <li><i className="fas fa-headset text-xl mr-2 text-white"></i> 24/7 Priority Support</li>
          </ul>
          <p className="mt-4 text-xl">Perfect for individuals looking for more comprehensive healthcare with extra support.</p>
          <div className="mt-auto flex justify-center">
            <button className="text-2xl w-full bg-white text-teal-600 font-semibold py-2 px-4 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:bg-teal-50 flex items-center justify-center space-x-2 max-w-xs">
              <i className="fas fa-arrow-right"></i>
              <NavLink to='/contact'>
                <span>Choose Plan</span>
              </NavLink>
            </button>
          </div>
        </div>

        {/* Ultimate Plan */}
        <div className="relative bg-white border border-teal-200 rounded-lg shadow-lg transform hover:scale-105 transition duration-500 ease-in-out p-8 flex flex-col">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-teal-500 text-white flex items-center justify-center rounded-full text-xl font-semibold">
            <i className="fas fa-briefcase-medical"></i>
          </div>
          <h2 className="mt-8 text-2xl font-bold text-teal-700 flex items-center justify-center">
            <i className="fas fa-user-nurse mr-2"></i> Ultimate Care
          </h2>
          <p className="mt-2 text-xl text-teal-600">Complete health solutions</p>
          <p className="mt-4 text-4xl font-bold text-teal-800">₹149</p>
          <ul className="mt-6 space-y-2 text-teal-600">
            <li><i className="fas fa-user-md text-xl mr-2 text-teal-500"></i> Unlimited Consults & Treatments</li>
            <li><i className="fas fa-dna mr-2 text-xl text-teal-500"></i> Comprehensive Health Screenings</li>
            <li><i className="fas fa-notes-medical mr-2 text-xl text-teal-500"></i> Personalized Health Plans</li>
            <li><i className="fas fa-hands-helping mr-2 text-teal-500 text-xl"></i> Dedicated Care Team</li>
          </ul>
          <p className="mt-4 text-xl text-teal-600">The most comprehensive care for individuals who want the best health solutions.</p>
          <br />
          <div className="mt-auto flex justify-center">
            <button className="text-2xl w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 flex items-center justify-center space-x-2 max-w-xs">
              <i className="fas fa-arrow-right"></i>
              <NavLink to='/contact'>
                <span>Choose Plan</span>
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
