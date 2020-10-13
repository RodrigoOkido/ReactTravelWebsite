import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// Components 
import Main from './components/pages/Main'
import OurDestinations from './components/pages/OurDestinations'
import Gallery from './components/pages/Gallery'
import ContactUs from './components/pages/ContactUs'

// Stylesheet
import './stylesheet/app.css'


const App = () => {

    return (
        <BrowserRouter basename="/ReactTravelWebsite">
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/destinations" exact component={OurDestinations} />
                <Route path="/gallery" exact component={Gallery} />
                <Route path="/#about" exact component={Main} />
                <Route path="/contact" exact component={ContactUs} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;