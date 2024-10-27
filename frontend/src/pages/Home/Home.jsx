import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import BannerHome from '../../components/BannerHome/BannerHome'
import Footer from '../../components/Footer/Footer'
import OurAbout from '../../components/OurAbout/OurAbout'
import OurBestService from '../../components/OurBestService/OurBestService'
import OurLaboratory from '../../components/OurLaboratory/OurLaboratory'
import OurTeam from '../../components/OurTeam/OurTeam'

const Home = () => {
    return (
        <>
        <Navbar/>
        <BannerHome/>
        <OurAbout/>
        <OurBestService/>
        <OurLaboratory/>
        <OurTeam/>

        <Footer/>
        </>
    )
}

export default Home