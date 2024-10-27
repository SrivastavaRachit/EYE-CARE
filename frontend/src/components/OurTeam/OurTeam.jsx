import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Team1 from '../../assets/Team1.png';
import Team2 from '../../assets/Team2.png';
import Team3 from '../../assets/Team3.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

const doctors = [
  {
    name: "Dr. Anshika",
    role: "Founder",
    img: Team1,
  },
  {
    name: "Dr. Rahul",
    role: "Emergency Services",
    img: Team2,
  },
  {
    name: "Dr. Rohit",
    role: "Practice Service",
    img: Team3,
  },
  // Add more doctors here if needed
];

const OurTeam = () => {
  return (
    <div className="our-team-container text-center py-10">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">
        Meet Our Doctor <span className="text-teal-500">Meeting</span>
      </h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={3} // Show 3 images in one slide
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
            <div
              className="doctor-box relative text-center p-6 shadow-lg rounded-lg bg-white transition-transform transform hover:scale-105"
            >
              <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden transition-transform duration-300 hover:scale-105">
                <img src={doctor.img} alt={doctor.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-teal-500 bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <FaFacebook className="text-white text-xl" />
                  <FaInstagram className="text-white text-xl" />
                </div>
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-800">{doctor.name}</h3>
              <p className="text-gray-600">{doctor.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurTeam;
