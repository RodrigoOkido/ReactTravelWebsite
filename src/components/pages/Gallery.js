import React from 'react';

// Components 
import Navbar from '../Navbar.js'
import Header from '../Header.js'
import Footer from '../Footer.js'
import FadeIn from 'react-fade-in'

const Gallery = () => {
    return (
        <div>
            <Navbar />
            <FadeIn>
                <Header title="Gallery" />
                <Footer />
            </FadeIn>
        </div>
    )
}

export default Gallery;