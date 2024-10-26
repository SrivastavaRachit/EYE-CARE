import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HomePage from '../../components/HomePage/HomePage'
import BannerHome from '../../components/BannerHome/BannerHome'
import Footer from '../../components/Footer/Footer'
import OurAbout from '../../components/OurAbout/OurAbout'

const Home = () => {
    return (
        <>
        <Navbar/>
        <BannerHome/>
        <OurAbout/>
        <HomePage/>

        <Footer/>
        </>
    )
}

export default Home