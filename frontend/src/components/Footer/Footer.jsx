import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="relative bg-gray-900 text-white mt-8 py-8 px-6 md:px-16">
            {/* Newsletter Card */}
            <div className="absolute inset-x-0 -top-10 mx-auto w-11/12 sm:w-3/5 md:w-2/5 bg-white
                    text-gray-900 p-6 rounded-t-lg rounded-b-3xl shadow-xl flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <FiMail className="text-teal-500 text-3xl" />
                    <h4 className="text-lg font-bold">Subscribe To Our Newsletter</h4>
                </div>
                <div className="flex space-x-2">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="text-sm px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-teal-500"
                    />
                    <button className="bg-teal-500 text-white px-6 py-2 rounded-full font-bold hover:bg-teal-600 transition-all duration-300">
                        Subscribe
                    </button>
                </div>
            </div>


            {/* Footer Content */}
            <div className="container mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Logo and Description */}
                <div className="flex flex-col items-start">
                    <h2 className="text-xl md:text-2xl font-semibold">Medinosi</h2>
                    <p className="text-sm md:text-base mt-2 max-w-xs">
                        Medinosi is your trusted partner in health. We provide world-class services for all your medical needs.
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <div className="bg-green-500 p-2 rounded-full">
                            <a href="#" className="text-white">
                                <FaFacebookF />
                            </a>
                        </div>
                        <div className="bg-green-500 p-2 rounded-full">
                            <a href="#" className="text-white">
                                <FaTwitter />
                            </a>
                        </div>
                        <div className="bg-green-500 p-2 rounded-full">
                            <a href="#" className="text-white">
                                <FaInstagram />
                            </a>
                        </div>
                        <div className="bg-green-500 p-2 rounded-full">
                            <a href="#" className="text-white">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Services Links */}
                <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-4">Services</h3>
                    <ul className="space-y-2 text-sm md:text-base">
                        <li><NavLink to="/" className="hover:text-yellow-500 transition duration-300">Home</NavLink></li>
                        <li><NavLink to="/services" className="hover:text-yellow-500 transition duration-300">Services</NavLink></li>
                        <li><NavLink to="/price" className="hover:text-yellow-500 transition duration-300">Price</NavLink></li>
                        <li><NavLink to="/blog" className="hover:text-yellow-500 transition duration-300">Blog</NavLink></li>
                        <li><NavLink to="/about" className="hover:text-yellow-500 transition duration-300">About Us</NavLink></li>
                        <li><NavLink to="/testimonial" className="hover:text-yellow-500 transition duration-300">Testimonial</NavLink></li>
                        <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold 
                            rounded-bl-full shadow-md transform transition duration-300 hover:scale-105">
                            <NavLink to='/contact'>
                                Contact Us
                            </NavLink>
                        </button>
                    </ul>
                </div>

                {/* Recent Posts */}
                <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-4">Recent Posts</h3>
                    <div className="flex items-start space-x-3 mb-4">
                        <img src="path/to/image.jpg" alt="post1" className="w-12 h-12 object-cover rounded-lg" />
                        <p className="text-sm md:text-base">
                            Understanding Medical Conditions - A brief look into how to manage various health conditions.
                        </p>
                    </div>
                    <div className="flex items-start space-x-3">
                        <img src="path/to/image.jpg" alt="post2" className="w-12 h-12 object-cover rounded-lg" />
                        <p className="text-sm md:text-base">
                            Tips for Maintaining a Healthy Lifestyle - Simple steps for a better life.
                        </p>
                    </div>
                </div>

                {/* Opening Hours */}
                <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-4">Opening Hours</h3>
                    <ul className="text-sm md:text-base space-y-1">
                        <li>Monday — 9AM to 9PM</li>
                        <li>Tuesday — 9AM to 9PM</li>
                        <li>Wednesday — 9AM to 9PM</li>
                        <li>Thursday — 9AM to 9PM</li>
                        <li>Friday — 9AM to 9PM</li>
                        <li>Saturday — 9AM to 9PM</li>
                        <li>Sunday — Closed</li>
                    </ul>
                </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-700 my-8" />

            {/* Centered Copyright with Curve */}
            <div className="flex justify-center">
                <div className="bg-teal-400 w-full sm:w-3/5 md:w-1/5 text-center text-sm md:text-base text-gray-900 py-2 rounded-tl-full rounded-tr-full">
                    &copy; 2024 All Rights Reserved By <span className="text-black cursor-pointer font-semibold">Medinosi</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
