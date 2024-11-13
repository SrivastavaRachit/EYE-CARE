import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import HomeTesti1 from '../../assets/HomeTesti1.png';
import HomeTesti2 from '../../assets/HomeTesti2.png';
import HomeTesti3 from '../../assets/HomeTesti3.png';
import HomeTesti4 from '../../assets/HomeTesti4.png';

const testimonials = [
    {
        id: 1,
        name: "Karan Malhotra",
        position: "Founder",
        image: HomeTesti1,
        rating: 4,
        message:
            "We are privileged to work with hundreds of future-thin businesses, including many of the world’s top ha, software, and brands.",
    },
    {
        id: 2,
        name: "Raj Kishore",
        position: "Manager",
        image: HomeTesti2,
        rating: 5,
        message:
            "We are privileged to work with hundreds of future-thin businesses, including many of the world’s top ha, software, and brands.",
    },
    {
        id: 3,
        name: "Kunal Sonker",
        position: "Co-Founder",
        image: HomeTesti3,
        rating: 5,
        message:
            "We are privileged to work with hundreds of future-thin businesses, including many of the world’s top ha, software, and brands.",
    },
    {
        id: 4,
        name: "Om Prajapati",
        position: "Advisor",
        image: HomeTesti4,
        rating: 5,
        message:
            "We are privileged to work with hundreds of future-thin businesses, including many of the world’s top ha, software, and brands.",
    },
];

const TestimonialCard = ({ name, position, image, rating, message }) => (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 shadow-lg relative flex 
    flex-col items-center transform hover:scale-105 transition duration-300 ease-in-out w-full max-w-md md:max-w-xl">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden ring-4 ring-teal-300 -mt-12">
            <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <h3 className="mt-4 font-semibold text-xl md:text-2xl text-gray-700">{name}</h3>
        <p className="text-lg md:text-xl text-gray-800">{position}</p>
        <div className="flex my-3">
            {[...Array(5)].map((_, i) => (
                <span
                    key={i}
                    className={`text-xl ${i < rating ? "text-teal-500" : "text-gray-300"}`}
                >
                    ★
                </span>
            ))}
        </div>
        <p className="text-center text-base md:text-xl text-gray-800 mt-2 px-4 md:px-6">{message}</p>
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-teal-100 text-teal-400 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center z-10 shadow-md">
            <FaQuoteRight className="text-xl md:text-2xl" />
        </div>
    </div>
);

const TestiHome = () => (
    <section className="py-10 md:py-16 bg-gray-100">
        <div className="text-center mb-8 md:mb-12">
            <div className="flex justify-center items-center space-x-2 mb-2">
                <span className="bg-teal-500 w-2 h-2 md:w-3 md:h-3 rounded-full"></span>
                <h2 className="text-black text-lg md:text-2xl font-bold tracking-widest uppercase">
                    Our Testimonials
                </h2>
                <span className="bg-teal-500 w-2 h-2 md:w-3 md:h-3 rounded-full"></span>
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-gray-900">
                Hear from Our <span className="text-teal-500">Clients</span>
            </h3>
            <div className="mt-2 md:mt-4 h-1 w-16 md:w-20 mx-auto bg-gradient-to-r from-teal-400 to-blue-500 rounded"></div>
        </div>
        <div className="flex justify-center px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 px-6 md:px-12 lg:px-24 max-w-screen-xl">
        {testimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.id} {...testimonial} />
                ))}
            </div>
        </div>
    </section>
);

export default TestiHome;
