import React from 'react';

// Stylesheet
import '../stylesheet/header.css';


/**
 * Header Component. 
 * Displays the header component of the page.
 * 
 * @param {*} props Receives an title and description.
 */
const Header = (props) => {
    return (
        <div className="headerPage" >
            <div className="header-title-description">
                <h1>{props.title}</h1>
                <h5>
                    {props.description}
                </h5>
            </div>
        </div>
    )
}

export default Header;