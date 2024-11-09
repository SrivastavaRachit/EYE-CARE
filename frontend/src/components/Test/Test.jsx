import React from "react";
import { FaQuoteRight, FaStar, FaHandshake } from "react-icons/fa";
import testimonial1 from '../../assets/testimonial1.png';
import testimonial2 from '../../assets/testimonial2.png';
import testimonial3 from '../../assets/testimonial3.png';
import testimonial4 from '../../assets/testimonial4.png';
import testimonial5 from '../../assets/testimonial5.png';
import testimonial6 from '../../assets/testimonial6.png';
import testimonial7 from '../../assets/testimonial7.png';
import testimonial8 from '../../assets/testimonial8.png';
import testimonial9 from '../../assets/testimonial9.png';
import bannerTesti from '../../assets/bannerTesti.png';

const testimonials = [
    {
        id: 1,
        name: "Karan Singh",
        position: "Founder",
        image: testimonial1,
        rating: 4,
        message: "Working with this team has been transformative for our business. Their approach is both innovative and deeply strategic."
    },
    {
        id: 2,
        name: "Rahul Gupta",
        position: "Manager",
        image: testimonial2,
        rating: 5,
        message: "They consistently deliver results. Our partnership has been a game-changer, allowing us to scale and evolve quickly."
    },
    {
        id: 3,
        name: "Amit Singh",
        position: "Co-Founder",
        image: testimonial3,
        rating: 5,
        message: "The team’s expertise is evident in every interaction. We’ve seen remarkable growth since collaborating with them."
    },
    {
        id: 4,
        name: "Miraj Gupta",
        position: "Head of Marketing",
        image: testimonial4,
        rating: 5,
        message: "An inspiring experience! The professionalism and dedication they bring to each project is unmatched."
    },
    {
        id: 5,
        name: "Shaily Singh",
        position: "Operations Lead",
        image: testimonial5,
        rating: 4,
        message: "Our team has gained a lot from their insights. They’re always one step ahead in strategy and execution."
    },
    {
        id: 6,
        name: "Ahmad khan",
        position: "Product Manager",
        image: testimonial6,
        rating: 5,
        message: "Their results-oriented approach has helped us push the boundaries of what’s possible in our industry."
    },
    {
        id: 7,
        name: "Suhail Gupta",
        position: "Sales Executive",
        image: testimonial7,
        rating: 4,
        message: "Their guidance has helped us unlock new potential. We appreciate the collaborative approach they bring to each project."
    },
    {
        id: 8,
        name: "Gaurav Singh",
        position: "Chief Technology Officer",
        image: testimonial8,
        rating: 5,
        message: "Their expertise in tech solutions is unparalleled. They provided the tools we needed to scale efficiently and effectively."
    },
    {
        id: 9,
        name: "Amar Singh",
        position: "Senior Developer",
        image: testimonial9,
        rating: 5,
        message: "A truly exceptional experience! Their innovation and problem-solving abilities helped us reach our goals faster."
    }
];

const Banner = () => (
    <div
        className="relative w-full h-[75vh] flex items-center font-sans overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerTesti})` }}
    >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 "></div>

        <div className="container mx-auto px-2 py-3 z-10 text-black">
            <h1 className="text-7xl italic mb-2 font-bold text-shadow animate__animated animate__fadeIn animate__delay-1s">
                What Our Clients Say <FaQuoteRight className="inline text-teal-500" />
            </h1>
            <p className="mt-4 text-black font-semibold text-2xl">
                Discover the stories of success and satisfaction from our valued clients.
            </p>

            {/* Additional testimonial intro lines with animation */}
            <p className="mt-6 text-2xl font-semibold text-black animate__animated animate__fadeIn animate__delay-2s">
                Hear firsthand how we've helped transform businesses and lives.
            </p>
            <p className="mt-4 text-2xl text-black font-semibold">
                Our clients' journeys are a testament to the impact of our services.
            </p>
        </div>
    </div>
);

const TestimonialCard = ({ name, position, image, rating, message }) => (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 shadow-xl relative flex flex-col items-center transform hover:scale-105 transition duration-300 ease-in-out w-full max-w-xl border border-gray-200">
        <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-teal-300 -mt-12">
            <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <h3 className="mt-4 font-bold text-2xl text-gray-700">{name}</h3>
        <p className="text-lg font-semibold text-gray-700">{position}</p>
        <div className="flex my-3">
            {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-lg ${i < rating ? "text-teal-500" : "text-gray-300"}`}>
                    <FaStar />
                </span>
            ))}
        </div>
        <p className="text-center text-lg italic font-semibold text-black mt-2 px-6">{message}</p>
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-teal-100 text-teal-400 rounded-full w-12 h-12 flex items-center justify-center z-10 shadow-md">
            <FaQuoteRight className="text-2xl" />
        </div>
    </div>
);

const TestimonialsSection = () => (
    <>
        {/* Banner Section */}
        <Banner />

        <section className="py-16 bg-gray-100">
            <div className="text-center mb-12">
                <div className="flex justify-center items-center space-x-2 mb-2">
                    <span className="bg-teal-500 w-3 h-3 rounded-full"></span>
                    <h2 className="text-gray-700 text-2xl font-bold tracking-widest uppercase">Our Testimonials</h2>
                    <span className="bg-teal-500 w-3 h-3 rounded-full"></span>
                </div>
                <h3 className="text-4xl font-bold text-gray-900">
                    Hear from Our <span className="text-teal-500">Clients</span> <FaHandshake className="inline text-teal-500" />
                </h3>
                <div className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-teal-400 to-blue-500 rounded"></div>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-6 md:px-12 lg:px-24 max-w-screen-xl">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    </>
);

export default TestimonialsSection;
