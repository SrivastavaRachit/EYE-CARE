import React from 'react'

const BannerHome = () => {
  return (
    <div>
                  {/* Banner Section */}
                  <section className="bg-gray-100 py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-800">
              Eye Digital Solution of Place Service
            </h1>
            <p className="text-lg mt-4 text-gray-600">
              Find the best treatment for your eyes with our advanced medical solutions and services.
            </p>
            <button className="mt-6 bg-orange-500 text-white px-6 py-2 rounded">Contact Us</button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src="https://img.freepik.com/free-photo/front-view-woman-working-as-nurse_23-2151061566.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid" alt="Banner" className="w-full" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default BannerHome
