import React from 'react';
import { FaHeartbeat, FaUserMd, FaAmbulance, FaClipboardCheck, FaEye, FaBullhorn, FaQuoteRight, FaStethoscope, FaBaby, FaLeaf, FaThermometerHalf, FaClinicMedical, FaMedkit, FaShieldAlt, FaHandsHelping, FaAward, FaRegLightbulb } from 'react-icons/fa';
import bannerAbout from '../../assets/bannerAbout.png';

const Banner = () => (
  <div
    className="relative w-full h-[60vh] sm:h-[75vh] flex items-center font-sans overflow-hidden bg-cover bg-center"
    style={{ backgroundImage: `url(${bannerAbout})` }}
  >
    <div className="absolute inset-0 "></div>
    <div className="container mx-auto px-4 py-10 sm:py-5 z-10 text-center text-black">
      <h1 className="text-4xl sm:text-6xl md:text-7xl italic mb-4 font-extrabold animate__animated animate__fadeIn animate__delay-1s">
        About Us <FaQuoteRight className="inline text-teal-500 animate__animated animate__pulse animate__infinite animate__delay-2s" />
      </h1>
      <p className="mt-4 text-lg sm:text-xl md:text-2xl font-bold animate__animated animate__fadeIn animate__delay-2s">
        Dedicated to comprehensive, compassionate, and expert healthcare.
      </p>
      <p className="mt-6 text-lg sm:text-xl md:text-2xl font-bold animate__animated animate__fadeIn animate__delay-3s">
        Empowering health journeys with a personalized approach for every patient.
      </p>
      <div className="mt-10 flex justify-center space-x-8 sm:space-x-10">
        <FaHeartbeat className="text-red-700 text-5xl sm:text-6xl animate__animated animate__bounceIn animate__delay-4s" />
        <FaUserMd className="text-blue-700 text-5xl sm:text-6xl animate__animated animate__shakeX animate__delay-4s" />
        <FaAmbulance className="text-green-800 text-5xl sm:text-6xl animate__animated animate__zoomIn animate__delay-5s" />
      </div>
    </div>
  </div>
);

const MissionVisionApproach = () => (
  <div className="bg-gradient-to-b from-teal-50 to-teal-100 py-12 sm:py-16">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-900 mb-10">Our Mission, Vision, and Approach</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {/* Mission */}
        <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center space-y-4 hover:scale-105 transition-transform">
          <FaBullhorn className="text-teal-700 text-5xl sm:text-6xl mb-4 animate__animated animate__bounceIn animate__delay-1s" />
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Our Mission</h3>
          <p className="text-teal-600 text-lg sm:text-xl">To provide high-quality healthcare services, focusing on patient-centered care with compassion and advanced medical expertise.</p>
        </div>
        
        {/* Vision */}
        <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center space-y-4 hover:scale-105 transition-transform">
          <FaEye className="text-teal-700 text-5xl sm:text-6xl mb-4 animate__animated animate__fadeIn animate__delay-1s" />
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Our Vision</h3>
          <p className="text-teal-600 text-lg sm:text-xl">To be a leading healthcare provider, known for delivering exceptional medical care and improving the quality of life for every patient.</p>
        </div>
        
        {/* Approach */}
        <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center space-y-4 hover:scale-105 transition-transform">
          <FaClipboardCheck className="text-teal-700 text-5xl sm:text-6xl mb-4 animate__animated animate__zoomIn animate__delay-2s" />
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Our Approach</h3>
          <p className="text-teal-600 text-lg sm:text-xl">We take a holistic approach to healthcare, combining technology, expertise, and compassionate care to deliver optimal outcomes for our patients.</p>
        </div>
      </div>
    </div>
  </div>
);

const DoctorInfo = () => (
  <div className="bg-gradient-to-b from-blue-50 to-blue-100 py-12 sm:py-16">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-900 mb-10">Meet Our Doctors Team</h2>
      <p className="text-lg sm:text-2xl text-black font-medium mb-10">
        Our dedicated team of doctors are experts in their respective fields, committed to delivering personalized and top-notch care.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {[ 
          { name: "Dr. Aditi Sharma", role: "Cardiologist", experience: "15 years", icon: FaHeartbeat },
          { name: "Dr. Rajesh Kumar", role: "Gastroenterologist", experience: "20 years", icon: FaUserMd },
          { name: "Dr. Arvind Patel", role: "Neurologist", experience: "12 years", icon: FaStethoscope },
          { name: "Dr. Priya Iyer", role: "Pediatrician", experience: "18 years", icon: FaBaby },
          { name: "Dr. Vikram Singh", role: "Dermatologist", experience: "14 years", icon: FaLeaf },
          { name: "Dr. Radhika Menon", role: "Endocrinologist", experience: "16 years", icon: FaThermometerHalf }
        ].map(({ name, role, experience, icon: Icon }, i) => (
          <div key={i} className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center space-y-4 hover:scale-105 transition-transform">
            <Icon className="text-teal-700 text-6xl mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{name}</h3>
            <p className="text-blue-600 text-lg sm:text-xl font-semibold">{role}</p>
            <p className="text-black font-semibold text-lg sm:text-xl">{experience} of experience</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ReasonsToChooseUs = () => (
  <div className="bg-gradient-to-b from-gray-50 to-gray-200 py-12 sm:py-16">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-900 mb-10">Why Choose Us?</h2>
      <p className="text-lg sm:text-2xl text-black font-medium mb-10">
        Discover the key reasons why our healthcare services stand out in providing top-tier care.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {[ 
          { title: 'Expert Care', icon: FaShieldAlt, description: 'Our team of highly qualified doctors provide the best care with years of experience.' },
          { title: 'Advanced Technology', icon: FaClinicMedical, description: 'We utilize cutting-edge medical technology to ensure accurate diagnosis and effective treatments.' },
          { title: 'Compassionate Support', icon: FaMedkit, description: 'We focus on holistic care with personalized support to help you at every stage of your journey.' },
          { title: 'Personalized Care', icon: FaHandsHelping, description: 'We tailor our services to meet the individual needs of every patient, ensuring the best outcomes.' },
          { title: 'Trusted Reputation', icon: FaAward, description: 'Our long-standing reputation for excellence makes us a trusted choice for your healthcare needs.' },
          { title: 'Comprehensive Services', icon: FaRegLightbulb, description: 'We offer a wide range of services across multiple specialties to ensure all your healthcare needs are covered.' }
        ].map(({ title, icon: Icon, description }, i) => (
          <div key={i} className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center space-y-4 hover:scale-105 transition-transform">
            <Icon className="text-teal-700 text-5xl sm:text-6xl mb-4 animate__animated animate__bounceIn animate__delay-1s" />
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{title}</h3>
            <p className="text-teal-600 text-lg sm:text-xl">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const AboutUs = () => (
  <>
    <Banner />
    <MissionVisionApproach />
    <DoctorInfo />
    <ReasonsToChooseUs />
  </>
);

export default AboutUs;
