import React from 'react';

// Components 
import Navbar from './components/Navbar.js'
import Main from './components/pages/Main'
import OurDestinations from './components/pages/OurDestinations'
import Gallery from './components/pages/Gallery'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Contact from './components/pages/Contact'
import './stylesheet/app.css'


const App = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/destinations" exact component={OurDestinations} />
                <Route path="/gallery" exact component={Gallery} />
                <Route path="/#about" exact component={Navbar} />
                <Route path="/contact" exact component={Contact} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;