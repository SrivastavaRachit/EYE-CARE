import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaPlayCircle, FaTimes } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import Team1 from '../../assets/Team1.png';
import Team2 from '../../assets/Team2.png';
import Team3 from '../../assets/Team3.png';
import Team4 from '../../assets/Team4.png';
import Team5 from '../../assets/Team5.png';
import Team6 from '../../assets/Team6.png';
import BackgroundVideo from '../../assets/meetvideo1.mp4'; // Add your video file here

const doctors = [
  { name: "Dr. Anshika", role: "Founder", img: Team1 },
  { name: "Dr. Rahul", role: "Emergency Services", img: Team2 },
  { name: "Dr. Rohit", role: "Practice Service", img: Team3 },
  { name: "Dr. Devendra", role: "General Practitioner", img: Team4 },
  { name: "Dr. Ashish", role: "Pediatrician", img: Team5 },
  { name: "Dr. Vikas", role: "Orthopedic Specialist", img: Team6 },
];

const OurTeam = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="our-team-container text-center py-10">
      {/* Section Title with Icons */}
      <div className="flex items-center justify-center mb-8">
        <FaFacebook className="text-blue-950 text-3xl mx-2" />
        <h2 className="text-3xl font-bold text-black">Meet Our Doctors <span className="text-bold text-3xl text-teal-500">Team</span></h2>
        <FaInstagram className="text-red-600 text-3xl mx-2" />
      </div>

      {/* Swiper Carousel for Doctors */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true, type: 'bullets' }}
        className="mySwiper"
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {doctors.map((doctor, index) => (
          <SwiperSlide key={index}>
            <div className="doctor-box relative text-center p-6 shadow-lg rounded-lg bg-white transition-transform transform hover:scale-105 hover:shadow-xl">
              <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden transition-transform duration-300 hover:scale-105">
                <img src={doctor.img} alt={doctor.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center gap-5 bg-teal-500 bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <FaFacebook className="text-blue-600 text-3xl" />
                  <FaInstagram className="text-red-600 text-3xl" />
                </div>
              </div>
              <div className="mt-4 text-2xl font-semibold text-gray-800">
                <h3>{doctor.name}</h3>
                <hr className="w-1/2 mx-auto my-2 border-t-2 border-teal-500" />
                <p className="text-gray-800 font-semibold text-xl">{doctor.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Video Section with Video Background */}
      <div className="video-section mt-10 relative bg-blue-950 text-white py-10 px-5 mx-auto max-w-2xl rounded-lg overflow-hidden">
        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h3 className="text-2xl font-semibold mb-4">Personal Digital Systems Video</h3>
          <p className="text-center mb-6 max-w-lg">
            We aim to provide exceptional medical care and guidance. This video introduces our advanced system
            that streamlines your healthcare experience, offering you the best service and support.
          </p>
          <button 
            className="bg-teal-500 text-white py-2 px-4 rounded-full hover:bg-teal-600 transition duration-300 flex items-center gap-2"
            onClick={handleModalToggle}
          >
            <FaPlayCircle className="text-xl" />
            Watch Video
          </button>
        </div>

        {/* Overlay to darken the video for readability */}
        <div className="absolute inset-0  z-0"></div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
          onClick={handleCloseModal} // Close modal on overlay click
        >
          <div className="relative bg-white rounded-lg overflow-hidden w-full max-w-2xl">
            <button 
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={(e) => {
                e.stopPropagation(); // Prevent event from bubbling up
                setIsModalOpen(false);
              }}
            >
              <FaTimes className="text-2xl" />
            </button>
            <video className="w-full" src={BackgroundVideo} autoPlay loop muted controls></video>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurTeam;
