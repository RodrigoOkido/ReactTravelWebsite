import React from 'react';

import '../stylesheet/header.css';

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