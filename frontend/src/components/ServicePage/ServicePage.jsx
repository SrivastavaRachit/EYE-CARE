import React, { useState } from 'react';
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
  },
  {
    icon: <FaMicroscope />,
    buttonIcon: <FaClinicMedical />,
    title: 'Deep of Expertise',
    description: 'We provide solutions from industry experts.',
    imageUrl: service2,
  },
  {
    icon: <FaUserMd />,
    buttonIcon: <FaProcedures />,
    title: 'Support Doctor',
    description: 'Our doctors are available to assist you.',
    imageUrl: service3,
  },
  {
    icon: <FaHeartbeat />,
    buttonIcon: <FaHeadset />,
    title: 'Doctor To Leading',
    description: 'Leading doctors provide exceptional care.',
    imageUrl: service4,
  },
  {
    icon: <FaAmbulance />,
    buttonIcon: <FaHandsHelping />,
    title: 'Emergencies Plan',
    description: 'Emergency support available around the clock.',
    imageUrl: service5,
  },
  {
    icon: <FaStethoscope />,
    buttonIcon: <FaUserNurse />,
    title: 'Highly of Health',
    description: 'Maintaining the highest health standards.',
    imageUrl: service6,
  },
  {
    icon: <FaBriefcaseMedical />,
    buttonIcon: <FaNotesMedical />,
    title: 'Medical Consultation',
    description: 'Get personalized health advice and consultations.',
    imageUrl: service7,
  },
  {
    icon: <FaHospital />,
    buttonIcon: <FaUserMd />,
    title: '24/7 Hospital Access',
    description: 'Our facilities are open around the clock.',
    imageUrl: service8,
  },
  {
    icon: <FaSyringe />,
    buttonIcon: <FaProcedures />,
    title: 'Vaccination Programs',
    description: 'Comprehensive immunization services available.',
    imageUrl: service9,
  },
];

const ServicePage = () => {
  const [selectedService, setSelectedService] = useState(services[0]); // Default to the first service

  return (
    <>
      {/* Banner Section */}
      <div className="relative bg-cover bg-center flex items-center h-[75vh] overflow-hidden"
           style={{
             backgroundImage: `url(${bannerImage})`,
             backgroundSize: 'cover',
             backgroundPosition: 'center top',
           }}>
        <div className="absolute inset-0 "></div> {/* Gradient Overlay */}
        <div className="container mx-auto px-4 text-black relative z-10">
          <h1 className="text-8xl font-bold mb-4 text-shadow">{selectedService.title}</h1>
          <h2 className="text-5xl italic mb-2 text-shadow">Your Health is Our Priority</h2>
          <p className="text-3xl mb-4">{selectedService.description}</p>
          
          {/* Call to Action Section */}
          <div className="mb-6">
            <p className="text-3xl mb-4">Schedule your appointment today!</p>
            <button className="bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-black font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
              Make Appointment
            </button>
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
                className="mt-6 py-3 px-6 flex items-center justify-center gap-2 text-white bg-gradient-to-r from-teal-500 to-teal-700 rounded-full shadow-lg hover:bg-gradient-to-l transition-all duration-300"
                onClick={() => setSelectedService(service)} // Change the selected service on click
              >
                {service.buttonIcon}
                <span className="font-semibold">Appointment Now</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicePage;
