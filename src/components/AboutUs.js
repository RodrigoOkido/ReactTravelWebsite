import React from 'react';
import {Link} from 'react-router-dom'

// Stylesheet
import '../stylesheet/aboutUs.css'


/**
 * AboutUs Component.
 * Displays more informations about the company.
 */
const AboutUs = () => {
    return (
        <div className="container-fluid" id="about">
            <div className="row" id="aboutUs">
                <div className="col-md-3 contact-info">
                    <h3>Any question? Contact us!</h3>
                    {/* <span><span className="info">Address:</span> Av. A place somewhere, 899 </span>
                    <span><span className="info">Number:</span> (55) 9999-99999</span>
                    <span><span className="info">Email (@):</span> ourservices@website.com</span> */}
                    <Link to="/contact"><button className="btn btn-info">Click Here</button></Link>
                    <div className="social-media">
                        <h4>Follow Us!</h4>
                        <a href="/" className="fa fa-facebook"> </a>
                        <a href="/" className="fa fa-instagram"> </a>
                        <a href="/" className="fa fa-twitter"> </a>
                        <a href="/" className="fa fa-linkedin"> </a>
                    </div>
                </div>
                <div className="col-md-9 about-info">
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