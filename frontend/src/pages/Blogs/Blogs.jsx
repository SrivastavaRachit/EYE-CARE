import React, { useEffect } from 'react'

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import BlogPage from '../../components/BlogPage/BlogPage'

const Blogs = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <div>
            <Navbar/>
            <BlogPage/>
            <Footer/>
        </div>
        </>
    )
}

export default Blogs