import React from 'react';

// Components 
import Navbar from '../Navbar.js'
import Header from '../Header.js'
import Footer from '../Footer.js'
import FadeIn from 'react-fade-in'


const OurDestinations = () => {
    return (
        <div>
            <Navbar />
            <FadeIn>
                <Header title="Destinations" />
                <Footer />
            </FadeIn>
        </div>
    )
}

export default OurDestinations;