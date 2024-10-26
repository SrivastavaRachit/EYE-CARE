import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const testimonials = [
    {
        id: 1,
        name: "Karon Merata",
        position: "Founder",
        image: "https://via.placeholder.com/100",
        rating: 4,
        message:
            "We are privileged to work with hundreds of future-thin businesses, including many of the world’s top ha, software, and brands.",
    },
    {
        id: 2,
        name: "Poron Ratena",
        position: "Manager",
        image: "https://via.placeholder.com/100",
        rating: 5,
        message:
            "We are privileged to work with hundreds of future-thin businesses, including many of the world’s top ha, software, and brands.",
    },
    {
        id: 3,
        name: "Ratena OOPP",
        position: "Co-Founder",
        image: "https://via.placeholder.com/100",
        rating: 5,
        message:
            "We are privileged to work with hundreds of future-thin businesses, including many of the world’s top ha, software, and brands.",
    },
    {
        id: 4,
        name: "PoOPO",
        position: "Manager",
        image: "https://via.placeholder.com/100",
        rating: 5,
        message:
            "We are privileged to work with hundreds of future-thin businesses, including many of the world’s top ha, software, and brands.",
    },
];

const TestimonialCard = ({ name, position, image, rating, message }) => (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 shadow-lg relative flex 
    flex-col items-center transform hover:scale-105 transition duration-300 ease-in-out w-full max-w-xl">
        <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-teal-300 -mt-12">
            <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <h3 className="mt-4 font-semibold text-xl text-gray-700">{name}</h3>
        <p className="text-sm text-gray-500">{position}</p>
        <div className="flex my-3">
            {[...Array(5)].map((_, i) => (
                <span
                    key={i}
                    className={`text-lg ${i < rating ? "text-teal-500" : "text-gray-300"}`}
                >
                    ★
                </span>
            ))}
        </div>
        <p className="text-center text-gray-600 mt-2 px-6">{message}</p>
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-teal-100 text-teal-400 rounded-full w-12 h-12 flex items-center justify-center z-10 shadow-md">
            <FaQuoteRight className="text-2xl" />
        </div>
    </div>
);



const Test = () => (
    <section className="py-16 bg-gray-100">
        <div className="text-center mb-12">
            <div className="flex justify-center items-center space-x-2 mb-2">
                <span className="bg-teal-500 w-3 h-3 rounded-full"></span>
                <h2 className="text-gray-700 text-xl font-semibold tracking-widest uppercase">
                    Our Testimonials
                </h2>
                <span className="bg-teal-500 w-3 h-3 rounded-full"></span>
            </div>
            <h3 className="text-4xl font-bold text-gray-900">
                Hear from Our <span className="text-teal-500">Clients</span>
            </h3>
            <div className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-teal-400 to-blue-500 rounded"></div>
        </div>
        <br />
        {/* Centered grid with testimonials */}
        <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-6 md:px-12 lg:px-24 max-w-screen-xl">
                {testimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.id} {...testimonial} />
                ))}
            </div>
        </div>
    </section>
);


export default Test;
