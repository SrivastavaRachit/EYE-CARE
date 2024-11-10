import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-gray-900 text-white font-sans shadow-lg">
            {/* Top Contact Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-2 text-sm bg-gray-800 md:px-8 lg:px-16">
                <div className="flex space-x-4 sm:space-x-6 justify-center">
                    {/* Email redirection */}
                    <a href="mailto:hexagonsservices@gmail.com" className="hover:text-yellow-500 transition duration-300">
                        hexagonsservices@gmail.com
                    </a>
                    {/* Phone call or WhatsApp redirection */}
                    <a href="https://wa.me/918840775386" className="hover:text-yellow-500 transition duration-300"
                            target="_blank" rel="noopener noreferrer">
                        +91 8840775386
                    </a>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="container mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between py-4">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <NavLink to="/" className="flex items-center space-x-2">
                        <img
                            src="https://t3.ftcdn.net/jpg/04/12/73/98/240_F_412739871_8awJ2DcBtlJmy46EhRjnI023HMpsuRlt.jpg"
                            alt="Logo"
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-yellow-500 shadow-md"
                        />
                        <span className="text-2xl sm:text-3xl font-bold text-yellow-500 tracking-wide">
                            EyeCare
                        </span>
                    </NavLink>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-8">
                    <ul className="flex space-x-4 lg:space-x-6 text-sm md:text-base lg:text-lg font-medium tracking-wide">
                        <li><NavLink to="/" className="hover:text-yellow-500 transition duration-300">Home</NavLink></li>
                        <li><NavLink to="/services" className="hover:text-yellow-500 transition duration-300">Services</NavLink></li>
                        <li><NavLink to="/price" className="hover:text-yellow-500 transition duration-300">Price</NavLink></li>
                        <li><NavLink to="/blog" className="hover:text-yellow-500 transition duration-300">Blog</NavLink></li>
                        <li><NavLink to="/about" className="hover:text-yellow-500 transition duration-300">About Us</NavLink></li>
                        <li><NavLink to="/testimonial" className="hover:text-yellow-500 transition duration-300">Testimonial</NavLink></li>
                    </ul>
                    <button className="ml-4 px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-md transform transition duration-300 hover:scale-105">
                        <NavLink to='/contact'>
                            Contact Us
                        </NavLink>
                    </button>
                </div>

                {/* Mobile Hamburger Menu */}
                <div className="lg:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-2xl focus:outline-none">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-gray-800 pb-4 px-4 md:px-8">
                    {/* Mobile Menu Links */}
                    <br />
                    <ul className="flex flex-col items-center space-y-4 text-base font-medium">
                        <li><NavLink to="/" onClick={() => setIsOpen(false)} className="hover:text-yellow-500 transition duration-300">Home</NavLink></li>
                        <li><NavLink to="/services" onClick={() => setIsOpen(false)} className="hover:text-yellow-500 transition duration-300">Services</NavLink></li>
                        <li><NavLink to="/price" onClick={() => setIsOpen(false)} className="hover:text-yellow-500 transition duration-300">Price</NavLink></li>
                        <li><NavLink to="/blog" onClick={() => setIsOpen(false)} className="hover:text-yellow-500 transition duration-300">Blog</NavLink></li>
                        <li><NavLink to="/about" onClick={() => setIsOpen(false)} className="hover:text-yellow-500 transition duration-300">About Us</NavLink></li>
                        <li><NavLink to="/testimonial" onClick={() => setIsOpen(false)} className="hover:text-yellow-500 transition duration-300">Testimonial</NavLink></li>
                    </ul>

                    {/* Stylish Contact Us Button in Mobile Menu */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="mt-6 w-10/12 mx-auto px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-gray-900 font-semibold rounded-full shadow-md text-center transition duration-300 transform hover:scale-105"
                    >
                        <NavLink to='/contact'>
                            Contact Us
                        </NavLink>
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
