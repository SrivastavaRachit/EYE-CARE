import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ServicePage from '../../components/ServicePage/ServicePage'

const Services = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <div>
            <Navbar/>
            <ServicePage/>
            <Footer/>
        </div>
        </>
    )
}

export default Services