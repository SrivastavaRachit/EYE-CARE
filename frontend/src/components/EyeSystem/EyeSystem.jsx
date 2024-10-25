import React from 'react'

const EyeSystem = () => {
  return (
    <div>
      {/* Our Best Eye Systems Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Best Eye Systems</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <img src="path_to_icon_1.png" alt="Eye Evaluation" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Energy Solutions</h3>
              <p className="text-gray-600">Comprehensive exams for all ages.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <img src="path_to_icon_2.png" alt="Emergency Eye" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold"> Transmission</h3>
              <p className="text-gray-600">Immediate care for eye emergencies.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <img src="path_to_icon_3.png" alt="Eye Surgery" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Emergency Help</h3>
              <p className="text-gray-600">Advanced eye surgery options.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <img src="path_to_icon_3.png" alt="Eye Surgery" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Eye Surgery</h3>
              <p className="text-gray-600">Advanced eye surgery options.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EyeSystem
