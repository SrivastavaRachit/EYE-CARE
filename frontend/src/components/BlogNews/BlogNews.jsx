import React, { useState, useEffect } from 'react';
import { FaStethoscope, FaHeartbeat } from 'react-icons/fa';
import blog1 from '../../assets/blog1.png';
import blog2 from '../../assets/blog2.png';
import blog3 from '../../assets/blog3.png';
import blog4 from '../../assets/blog4.png';
import blog5 from '../../assets/blog5.png';
import blog6 from '../../assets/blog6.png';

const BlogNews = () => {
  const blogPosts = [
    {
      title: "Reference Lab Efficiently",
      date: "Jan 3, 2022",
      author: "Dr.Rjat",
      description: "We give you hand-crafted hospital such as front admin Blog.",
      image: blog4,
    },
    {
      title: "Advanced Medical Equipment",
      date: "Feb 10, 2022",
      author: "Dr. Asif",
      description: "Learn about the latest advancements in medical technology.",
      image: blog5,
    },
    {
      title: "Health and Wellness Tips",
      date: "Mar 15, 2022",
      author: "Dr.Amit",
      description: "Explore tips to maintain a healthy lifestyle and prevent common illnesses.",
      image: blog6,
    },
    {
      title: "Patient Care Guidelines",
      date: "Apr 20, 2022",
      author: "Dr.Nidhi",
      description: "Guidelines to provide the best patient care experience.",
      image: blog1,
    },
    {
      title: "Medical Breakthroughs",
      date: "May 5, 2022",
      author: "Dr. Mridul",
      description: "Exciting breakthroughs in the field of medical science.",
      image: blog2,
    },
    {
      title: "Healthy Living Habits",
      date: "Jun 10, 2022",
      author: "Dr.Kamal",
      description: "Habits and tips to maintain a healthy lifestyle.",
      image: blog3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalSlides = Math.ceil(blogPosts.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const currentItems = blogPosts.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-6">
          <FaStethoscope className="text-teal-400 text-3xl mx-2" />
          <h2 className="text-3xl font-bold text-center">
            Our Blog News
          </h2>
          <FaHeartbeat className="text-teal-400 text-3xl mx-2" />
        </div>
        <p className="text-center font-bold text-4xl text-black mb-8">
          We are Medical Largest <span className="text-4xl font-bold text-teal-400">Blog</span>
        </p>

        <div className="relative">
          <div className="flex overflow-hidden space-x-4">
            {currentItems.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg overflow-hidden flex-shrink-0 w-full md:w-1/3"
              >
                <div className="w-full h-56 overflow-hidden rounded-t-3xl">
                  <img
                    src={post.image}
                    alt="Blog post"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-gray-600 text-xl mb-4 flex items-start">
                    <span>By {post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">{post.title}</h3>
                  <p className="text-gray-800 font-semibold text-lg mb-4">{post.description}</p>
                  <button className="text-blue-600 font-semibold  text-xl hover:underline">Read More</button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-500 cursor-pointer ${
                  index === currentIndex ? 'bg-teal-500' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogNews;
