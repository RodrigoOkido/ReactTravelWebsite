import React from 'react';


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
                    <a className="nav-link" href="/#destinations">Our Destinations</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/#gallery">Gallery</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/#blog">Blog</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/#about">About Us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/#contact">Contact</a>
                  </li>
                </ul>
                <button class="btn btn-warning" type="submit">Login</button>
              </div>
            </nav>                
        )
    }
}

export default Navbar;