import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HomePage from '../../components/HomePage/HomePage'
import EyeSystem from '../../components/EyeSystem/EyeSystem'
import BannerHome from '../../components/BannerHome/BannerHome'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    return (
        <>
        <Navbar/>
        <BannerHome/>
        <EyeSystem/>
        <HomePage/>

        <Footer/>
        </>
    )
}

export default Home