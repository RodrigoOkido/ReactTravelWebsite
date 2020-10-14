import React from 'react';

// Components 
import Navbar from '../Navbar'
import Header from '../Header'
import Footer from '../Footer'
import ImageGallery from '../ImageGallery'
import FadeIn from 'react-fade-in'


/**
 * Gallery Page.
 */
const Gallery = () => {
    return (
        <div>
            <Navbar />
            <FadeIn>
                <Header title="Gallery" />
                <ImageGallery />
                <Footer />
            </FadeIn>
        </div>
    )
}

export default Gallery;