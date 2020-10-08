import React from 'react';

// Stylesheet
import '../stylesheet/aboutUs.css'

const AboutUs = () => {
    return (
        <div className="container-fluid" id="about">
            <div className="row" id="aboutUs">
                <div className="col-md-4 contact-info">
                    <h3>Contact Us</h3>
                    <span><span style={{fontWeight: 'bold'}}>Address:</span> Av. A place somewhere, 899 </span>
                    <span><span style={{fontWeight: 'bold'}}>Number:</span> (55) 9999-99999</span>
                    <span><span style={{fontWeight: 'bold'}}>Email (@):</span> ourservices@website.com</span>
                    <div className="social-media">
                        <h4>Follow Us!</h4>
                        <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-instagram"></a>
                        <a href="#" className="fa fa-twitter"></a>
                        <a href="#" className="fa fa-linkedin"></a>
                    </div>
                </div>
                <div className="col-md-8 about-info">
                    <h3>About Us</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur. 
                    </span>
                    <br />
                    <h3>Our Mission</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur. 
                    </span>
                    <br />
                    <h3>Why choose us?</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur. 
                    </span>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;