import React from 'react';
import { FaHeart, FaLeaf, FaHeartbeat, FaFireAlt, FaSmileBeam, FaRegClock, FaFolderOpen, FaSearch, FaSeedling, FaDumbbell, FaAppleAlt, FaSpa } from 'react-icons/fa';
import { GiRunningShoe, GiBowlOfRice, GiLemon, GiHealthPotion } from 'react-icons/gi'; // New icons
import bannerBlog from '../../assets/bannerBlog.png';
import Blogs1 from '../../assets/Blogs1.png';
import Blogs2 from '../../assets/Blogs2.png';
import Blogs3 from '../../assets/Blogs3.png';
import Blogs4 from '../../assets/Blogs4.png';

const BlogPage = () => {
  const blogPosts = [
    { img: Blogs1, title: "Embrace the Future of Wellness" },
    { img: Blogs2, title: "Revolutionize Your Daily Routine" },
    { img: Blogs3, title: "Mindfulness for a Modern Life" },
    { img: Blogs4, title: "Fuel Your Fitness Journey" },
  ];

  const recentPosts = [
    { img: Blogs1, title: "5 Tips for a Healthier Diet", date: "Nov 5, 2024" },
    { img: Blogs2, title: "The Importance of Mental Health", date: "Oct 22, 2024" },
    { img: Blogs3, title: "Workout Routines for Beginners", date: "Sep 18, 2024" },
  ];

  return (
    <div className="bg-white text-gray-700 font-sans">
      {/* Banner Section */}
      <div
        className="relative bg-cover bg-center flex items-center justify-center h-[75vh] overflow-hidden"
        style={{
          backgroundImage: `url(${bannerBlog})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div className="absolute inset-0 "></div>
        <div className="container mx-auto px-4 text-black text-center relative z-10 space-y-4">
          <h2 className="text-5xl lg:text-6xl font-extrabold mb-2  animate-fadeIn font-stylish italic">
            Discover Wellness, One Step at a Time
          </h2>
          <p className="text-2xl font-bold mt-2 py-5 animate-slideUp transition-opacity duration-700">
            Dive into our expert-curated articles to enhance your physical and mental well-being.
          </p> <br />
          <a href='/contact' className="mt-6 px-8 py-3 bg-teal-500 text-black rounded-full text-xl font-semibold hover:bg-teal-600 animate-pulse transition-all duration-300 ease-in-out">
            Start Your Journey
          </a>
        </div>
      </div>

      {/* Blog Content Section */}
      <section className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 py-8">
        {/* Blog Posts */}
        <div className="lg:col-span-2 space-y-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="relative p-6 rounded-xl transition-transform transform duration-300"
            >
              <div className="w-full h-[450px] overflow-hidden rounded-md mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={post.img}
                  alt={post.title}
                />
              </div>
              <h3 className="text-4xl font-semibold italic text-black">{post.title}</h3>
              <p className="text-black text-2xl font-semibold mt-2">
                {index === 0 && "Stay ahead of the curve by exploring the latest wellness trends that are shaping a healthier, more mindful tomorrow. From personalized nutrition to digital detoxing, discover ways to upgrade your lifestyle today."}
                {index === 1 && "Transform mundane routines into powerful rituals that energize, uplift, and motivate. Learn techniques to build habits that not only stick but bring out your best self, one day at a time."}
                {index === 2 && "In a fast-paced world, mindfulness isn’t a luxury—it’s essential. Discover strategies for incorporating mindfulness into your daily life to reduce stress, enhance focus, and bring balance to mind and body."}
                {index === 3 && "Whether you're just beginning or pushing boundaries, we have tips, inspiration, and expert advice to help you fuel your fitness journey and achieve results that last."}
              </p>
              <div className="flex justify-between items-center mt-4">
                <a href="#" className="text-teal-600 text-2xl hover:text-teal-800 font-extrabold">
                  Read More
                </a>
                <button
                  className="text-red-500 hover:text-red-700 transition-colors duration-300"
                  aria-label="Add to Favorites"
                >
                  <FaHeart size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1 lg:ml-8 space-y-8 lg:w-[110%]">
          {/* Search Box */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-3 pl-4 pr-10 bg-white border border-gray-300 text-xl rounded-full outline-none text-black placeholder-black placeholder:font-semibold"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-teal-500 p-2 rounded-full">
              <FaSearch className="text-white" />
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-bold mb-4 text-teal-700 flex items-center">
              <FaFolderOpen className="mr-2" /> Categories
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <GiLemon className="text-teal-500 mr-2 text-2xl" /> 
                <a  className="text-black text-xl font-semibold hover:text-teal-600">Health & Wellness</a>
              </li>
              <li className="flex items-center">
                <GiRunningShoe className="text-teal-500 mr-2 text-2xl" />
                <a  className="text-black text-xl font-semibold hover:text-teal-600">Fitness</a>
              </li>
              <li className="flex items-center">
                <GiBowlOfRice className="text-teal-500 mr-2 text-2xl" />
                <a className="text-black text-xl font-semibold hover:text-teal-600">Nutrition</a>
              </li>
              <li className="flex items-center">
                <FaSmileBeam className="text-teal-500 mr-2 text-2xl" />
                <a  className="text-black text-xl font-semibold hover:text-teal-600">Mental Health</a>
              </li>
              <li className="flex items-center">
                <FaSpa className="text-teal-500 mr-2 text-2xl" />
                <a  className="text-black text-xl font-semibold hover:text-teal-600">Lifestyle</a>
              </li>
            </ul>
          </div>

          {/* Tags */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-bold mb-4 text-teal-700 flex items-center">
              <FaFireAlt className="mr-2" /> Tags
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-teal-100 text-black text-xl italic font-semibold px-3 py-1 rounded-full flex items-center">
                <FaHeartbeat className="mr-1" /> Wellness
              </span>
              <span className="bg-teal-100 text-black text-xl italic font-semibold px-3 py-1 rounded-full flex items-center">
                <FaAppleAlt className="mr-1" /> Nutrition
              </span>
              <span className="bg-teal-100 text-black text-xl italic font-semibold px-3 py-1 rounded-full flex items-center">
                <FaDumbbell className="mr-1" /> Fitness Tips
              </span>
              <span className="bg-teal-100 text-black text-xl italic font-semibold px-3 py-1 rounded-full flex items-center">
                <FaSmileBeam className="mr-1" /> Mindfulness
              </span>
              <span className="bg-teal-100 text-black text-xl italic font-semibold px-3 py-1 rounded-full flex items-center">
                <FaSpa className="mr-1" /> Lifestyle
              </span>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-bold mb-4 text-teal-700 flex items-center">
              <FaRegClock className="mr-2" /> Recent Posts
            </h4>
            <ul className="space-y-4">
              {recentPosts.map((post, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <img src={post.img} alt={post.title} className="w-16 h-16 rounded-md mr-3" />
                  <div>
                    <a href="#" className="hover:text-teal-600 text-xl text-black font-semibold">{post.title}</a>
                    <p className="text-xl text-black font-semibold">{post.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default BlogPage;
