import React from 'react';

// Components 
import Navbar from '../Navbar'
import Header from '../Header'
import Footer from '../Footer'
import ContactForm from '../ContactForm'
import FadeIn from 'react-fade-in'


const ContactUs = () =>  {
    return (
        <div>
            <Navbar />
            <FadeIn>
                <Header title="Contact Us" />
                <ContactForm />
                <Footer />
            </FadeIn>
        </div>
    )
}

export default ContactUs;