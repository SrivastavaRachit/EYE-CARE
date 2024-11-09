import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ContactusPage from '../../components/ContactusPage/ContactusPage'

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <div>
            <Navbar/>
            <ContactusPage/>
            <Footer/>
        </div>
        </>
    )
}

export default Contact