import React from 'react';
import {Link} from 'react-router-dom'

class Navbar extends React.Component  {
    

    render() {
        return (
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item active">
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/destinations">Our Destinations</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/gallery">Gallery</Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/blog">Blog</Link>
                  </li> */}
                  <li className="nav-item">
                    <a className="nav-link" href="/#about">About Us</a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                  </li>
                </ul>
                <button className="btn btn-warning" type="submit">Login</button>
              </div>
            </nav>                
        )
    }
}

export default Navbar;