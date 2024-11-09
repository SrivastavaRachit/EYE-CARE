import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { 
  FaClock, FaMicroscope, FaUserMd, FaHeartbeat, FaAmbulance, FaStethoscope, 
  FaCalendarPlus, FaClinicMedical, FaProcedures, FaHeadset, FaHandsHelping, FaUserNurse 
} from 'react-icons/fa';
import service1 from '../../assets/service1.png';
import service2 from '../../assets/service2.png';
import service3 from '../../assets/service3.png';
import service4 from '../../assets/service4.png';
import service5 from '../../assets/service5.png';
import service6 from '../../assets/service6.png';

const services = [
  {
    icon: <FaClock />,
    buttonIcon: <FaCalendarPlus />,
    title: 'Faster Efficiently',
    description: 'We give you handcrafted solutions with trust.',
    imageUrl: service1,
    buttonText: 'Get Quick Consultation',
  },
  {
    icon: <FaMicroscope />,
    buttonIcon: <FaClinicMedical />,
    title: 'Deep of Expertise',
    description: 'We provide solutions from industry experts.',
    imageUrl: service2,
    buttonText: 'Book Expert Diagnosis',
  },
  {
    icon: <FaUserMd />,
    buttonIcon: <FaProcedures />,
    title: 'Support Doctor',
    description: 'Our doctors are available to assist you.',
    imageUrl: service3,
    buttonText: 'Consult a Doctor Now',
  },
  {
    icon: <FaHeartbeat />,
    buttonIcon: <FaHeadset />,
    title: 'Doctor To Leading',
    description: 'Leading doctors provide exceptional care.',
    imageUrl: service4,
    buttonText: 'Talk to Leading Doctors',
  },
  {
    icon: <FaAmbulance />,
    buttonIcon: <FaHandsHelping />,
    title: 'Emergencies Plan',
    description: 'Emergency support available around the clock.',
    imageUrl: service5,
    buttonText: 'Request Emergency Help',
  },
  {
    icon: <FaStethoscope />,
    buttonIcon: <FaUserNurse />,
    title: 'Highly of Health',
    description: 'Maintaining the highest health standards.',
    imageUrl: service6,
    buttonText: 'Schedule a Health Check',
  },
];

const OurBestService = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="p-8 bg-teal-50 text-center">
      <h2 className="text-3xl font-semibold relative inline-flex items-center">
        <span className="absolute -left-4 bg-teal-600 rounded-full h-3 w-3"></span>
        Our Best Service
        <span className="absolute -right-4 bg-teal-600 rounded-full h-3 w-3"></span>
      </h2>
      <h3 className="text-4xl font-bold mt-2">
        We Provide Medical in <span className="text-teal-600">Service</span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
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
              onClick={() => navigate('/contact')} // Navigate to the Contact Us page
            >
              {service.buttonIcon}
              <span className="font-semibold ">{service.buttonText}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurBestService;
