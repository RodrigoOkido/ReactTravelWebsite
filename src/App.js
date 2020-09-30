import React from 'react';

// Components 
import Navbar from './components/Navbar.js'
import Header from './components/Header.js'
import TravelSuggestion from './components/TravelSuggestion.js'
import OurFeatures from './components/OurFeatures.js'
import AboutUs from './components/AboutUs.js'
import Footer from './components/Footer.js'
import MainDestinations from './components/MainDestinations.js';


const App = () => {

    return (
        <div>
            <Navbar />
            <Header />
            <TravelSuggestion />
            <OurFeatures />
            <MainDestinations />
            <AboutUs />
            <Footer />
        </div>
    );
}

export default App;