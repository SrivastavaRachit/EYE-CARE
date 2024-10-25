import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HomePage from '../../components/HomePage/HomePage'
import EyeSystem from '../../components/EyeSystem/EyeSystem'
import BannerHome from '../../components/BannerHome/BannerHome'

const Home = () => {
    return (
        <>
        <Navbar/>
        <BannerHome/>
        <EyeSystem/>
        <HomePage/>
        </>
    )
}

export default Home