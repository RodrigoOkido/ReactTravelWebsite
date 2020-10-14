import React from 'react';

// Components 
import Navbar from '../Navbar.js'
import Header from '../Header.js'
import TravelSuggestion from '../TravelSuggestion.js'
import OurFeatures from '../OurFeatures.js'
import AboutUs from '../AboutUs.js'
import Footer from '../Footer.js'
import MainDestinations from '../MainDestinations.js';
import FadeIn from 'react-fade-in'


/**
 * Main Page.
 */
const Main = () => {

    return (
        <div>
            <Navbar />
            <FadeIn>
                <Header 
                    title="Welcome to our Website" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
                <TravelSuggestion />
                <OurFeatures />
                <MainDestinations />
                <AboutUs />
                <Footer />
            </FadeIn>
        </div>
    );
}

export default Main;