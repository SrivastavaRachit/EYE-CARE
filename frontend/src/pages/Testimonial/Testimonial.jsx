import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Test from '../../components/Test/Test'
const Testimonial = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div>
                <Navbar />
                <Test />
                <Footer />
            </div>
        </>
    )
}

export default Testimonial