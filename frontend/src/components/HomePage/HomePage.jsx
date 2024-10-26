import React from 'react';

const HomePage = () => {
  return (
    <div className="font-sans">


      {/* Experience Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800">27+ Years of Experience</h2>
            <p className="text-lg text-gray-600 mt-4">
              We offer the best eye treatments with our expert team and cutting-edge technology.
            </p>
            <button className="mt-6 bg-orange-500 text-white px-6 py-2 rounded">Learn More</button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            {/* Replace with an actual image */}
            <img src="experience-image.jpg" alt="Experience" className="w-full" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">We Offer Services Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Qualified Doctors</h3>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Individual Tailored Approach</h3>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Surgical Procedures</h3>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Emergency Eye Care</h3>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Eye Treatment Lenses</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Customers Talking Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600">"Great service and care!"</p>
              <h4 className="mt-4 font-semibold">Rosanna Ben</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600">"The best eye care in town!"</p>
              <h4 className="mt-4 font-semibold">Parson Karter</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600">"Highly recommend their service!"</p>
              <h4 className="mt-4 font-semibold">Lorenz Mertino</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800">Make an Appointment</h2>
            <form className="mt-8 space-y-4">
              <input
                type="text"
                className="w-full p-4 border border-gray-300 rounded"
                placeholder="Name"
              />
              <input
                type="email"
                className="w-full p-4 border border-gray-300 rounded"
                placeholder="Email"
              />
              <input
                type="date"
                className="w-full p-4 border border-gray-300 rounded"
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-2 rounded w-full"
              >
                Send Request
              </button>
            </form>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            {/* Replace with an actual map component or image */}
            <div className="h-64 bg-gray-300">Map Component Here</div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">We Are Medical Largest Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Reference Lab Efficiency</h3>
              <p className="text-gray-600 mt-2">Read more</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Eye System Improvement</h3>
              <p className="text-gray-600 mt-2">Read more</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
