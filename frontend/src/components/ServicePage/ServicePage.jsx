import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

import {
  FaClock,
  FaMicroscope,
  FaUserMd,
  FaHeartbeat,
  FaAmbulance,
  FaStethoscope,
  FaCalendarPlus,
  FaClinicMedical,
  FaProcedures,
  FaHeadset,
  FaHandsHelping,
  FaUserNurse,
  FaBriefcaseMedical,
  FaHospital,
  FaSyringe,
  FaNotesMedical
} from 'react-icons/fa';
import service1 from '../../assets/service1.png';
import service2 from '../../assets/service2.png';
import service3 from '../../assets/service3.png';
import service4 from '../../assets/service4.png';
import service5 from '../../assets/service5.png';
import service6 from '../../assets/service6.png';
import service7 from '../../assets/service7.png';
import service8 from '../../assets/service8.png';
import service9 from '../../assets/service9.png';
import bannerImage from '../../assets/bannerImage.png';

const services = [
  {
    icon: <FaClock />,
    buttonIcon: <FaCalendarPlus />,
    title: 'Faster Efficiently',
    description: 'We give you handcrafted solutions with trust.',
    imageUrl: service1,
    buttonText: 'Get Faster Service',
    advancedButtonText: 'Book Fast Service',
  },
  {
    icon: <FaMicroscope />,
    buttonIcon: <FaClinicMedical />,
    title: 'Deep of Expertise',
    description: 'We provide solutions from industry experts.',
    imageUrl: service2,
    buttonText: 'Explore Expertise',
    advancedButtonText: 'Consult Our Experts',
  },
  {
    icon: <FaUserMd />,
    buttonIcon: <FaProcedures />,
    title: 'Support Doctor',
    description: 'Our doctors are available to assist you.',
    imageUrl: service3,
    buttonText: 'Contact Doctor',
    advancedButtonText: 'Doctor Assistance',
  },
  {
    icon: <FaHeartbeat />,
    buttonIcon: <FaHeadset />,
    title: 'Doctor To Leading',
    description: 'Leading doctors provide exceptional care.',
    imageUrl: service4,
    buttonText: 'Learn More',
    advancedButtonText: 'Get Premium Care',
  },
  {
    icon: <FaAmbulance />,
    buttonIcon: <FaHandsHelping />,
    title: 'Emergencies Plan',
    description: 'Emergency support available around the clock.',
    imageUrl: service5,
    buttonText: 'Get Emergency Help',
    advancedButtonText: 'Emergency Response',
  },
  {
    icon: <FaStethoscope />,
    buttonIcon: <FaUserNurse />,
    title: 'Highly of Health',
    description: 'Maintaining the highest health standards.',
    imageUrl: service6,
    buttonText: 'Ensure Health',
    advancedButtonText: 'Health Assurance',
  },
  {
    icon: <FaBriefcaseMedical />,
    buttonIcon: <FaNotesMedical />,
    title: 'Medical Consultation',
    description: 'Get personalized health advice and consultations.',
    imageUrl: service7,
    buttonText: 'Book Consultation',
    advancedButtonText: 'Consult with Us',
  },
  {
    icon: <FaHospital />,
    buttonIcon: <FaUserMd />,
    title: '24/7 Hospital Access',
    description: 'Our facilities are open around the clock.',
    imageUrl: service8,
    buttonText: 'Access Hospital',
    advancedButtonText: '24/7 Hospital Access',
  },
  {
    icon: <FaSyringe />,
    buttonIcon: <FaProcedures />,
    title: 'Vaccination Programs',
    description: 'Comprehensive immunization services available.',
    imageUrl: service9,
    buttonText: 'Get Vaccinated',
    advancedButtonText: 'Vaccinate Today',
  },
];

const ServicePage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [selectedService, setSelectedService] = useState(services[0]); // Default to the first service

  const handleServiceClick = (service) => {
    setSelectedService(service);
    navigate('/contact'); // Navigate to the Contact Us page
  };
  return (
    <>
     {/* Banner Section */}
<div
  className="relative bg-cover bg-center flex items-center lg:h-[75vh] md:h-[50vh] sm:h-[40vh] overflow-hidden"
  style={{
    backgroundImage: `url(${bannerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
  }}
>
  <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30"></div> {/* Gradient Overlay */}
  <div className="container mx-auto px-4 text-black relative z-10 text-center md:text-left">
    <h1 className="text-6xl md:text-5xl sm:text-4xl lg:text-8xl font-bold mb-4 text-shadow">{selectedService.title}</h1>
    <h2 className="text-5xl lg:text-5xl md:text-3xl sm:text-2xl italic mb-2 text-shadow">Your Health is Our Priority</h2>
    <p className="text-3xl  lg:text-4xl md:text-xl sm:text-lg mb-4">{selectedService.description}</p>
    
    {/* Call to Action Section */}
    <div className="mb-6">
      <p className="text-3xl lg:text-4xl  md:text-xl sm:text-lg mb-4">Schedule your appointment today!</p>
      <br />
      <a
        href="/contact"
        className="bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-black font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
      >
        Make Appointment
      </a>
    </div>
  </div>
</div>


      <div className="p-8 bg-teal-50 text-center">
        <h2 className="text-3xl font-semibold relative inline-flex items-center">
          <span className="absolute -left-4 bg-teal-600 rounded-full h-3 w-3"></span>
          Our Best Service
          <span className="absolute -right-4 bg-teal-600 rounded-full h-3 w-3"></span>
        </h2>
        <h3 className="text-4xl font-bold mt-2">
          We Provide Medical in <span className="text-teal-600">Service</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full max-w-md p-6 rounded-2xl shadow-xl bg-white text-center flex flex-col justify-between mx-auto hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="text-5xl text-teal-600">{service.icon}</div>
                <h4 className="text-2xl font-bold text-gray-800">{service.title}</h4>
              </div>
              <p className="text-black text-xl mb-4">{service.description}</p>
              <img src={service.imageUrl} alt={service.title} className="w-full rounded-lg mt-2" />
              <button
                className="mt-6 py-3 px-6 flex items-center justify-center gap-2 text-black bg-gradient-to-r from-teal-500 to-teal-700 rounded-full shadow-lg hover:bg-gradient-to-l transition-all duration-300"
                onClick={() => handleServiceClick(service)} // Change the selected service and navigate to Contact Us page
              >
                {service.buttonIcon}
                <span className="font-semibold text-xl">{service.advancedButtonText}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicePage;
