import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import BannerHome from '../../components/BannerHome/BannerHome'
import Footer from '../../components/Footer/Footer'
import OurAbout from '../../components/OurAbout/OurAbout'
import OurBestService from '../../components/OurBestService/OurBestService'

const Home = () => {
    return (
        <>
        <Navbar/>
        <BannerHome/>
        <OurAbout/>
        <OurBestService/>

        <Footer/>
        </>
    )
}

export default Home