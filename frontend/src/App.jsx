import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Testimonial from './pages/Testimonial/Testimonial'
import Price from './pages/Price/Price'
import Blogs from './pages/Blogs/Blogs'
import Services from './pages/Services/Services'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/testimonial' element={<Testimonial />} />
      <Route path='/price' element={<Price />} />
      <Route path='/blog' element={<Blogs />} />
      <Route path='/services' element={<Services />} />
    </Routes>
  )
}

export default App