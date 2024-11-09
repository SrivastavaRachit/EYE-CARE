import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import PricingPage from '../../components/PricingPage/PricingPage'

const Price = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <div>
            <Navbar/>
            <PricingPage/>
            <Footer/>
        </div>
        </>
    )
}

export default Price