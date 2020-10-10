import React from 'react';

// Components
import DestinationCard from './cards/DestinationCard'

// Stylesheet
import '../stylesheet/mainDestinations.css'

// Cities
import California from '../assets/images/cities/california.jpg'
import Curitiba from '../assets/images/cities/curitiba.jpg'
import Frankfurt from '../assets/images/cities/frankfurt.jpg'
import Hamburg from '../assets/images/cities/hamburg.jpg'
import Lisboa from '../assets/images/cities/lisboa.jpg'

const MainDestinations = () => {

    return (
        <div className="container" id="destinations">
            <h3>Check some of our destinations!</h3>
            <DestinationCard 
                thumb={California}
                destiny="California" 
                aboutDestiny="Lorem ipsum dolor sit amet, consectetur adipiscing 
                                elit, sed do eiusmod tempor incididunt ut labore 
                                et dolore magna aliqua. Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris nisi ut 
                                aliquip ex ea commodo consequat." 
                price="R$1599"
            />
            <DestinationCard 
                thumb={Curitiba}
                destiny="Curitiba" 
                aboutDestiny="Lorem ipsum dolor sit amet, consectetur adipiscing 
                                elit, sed do eiusmod tempor incididunt ut labore 
                                et dolore magna aliqua. Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris nisi ut 
                                aliquip ex ea commodo consequat." 
                price="R$599"
            />
            <DestinationCard 
                thumb={Frankfurt}
                destiny="Frankfurt" 
                aboutDestiny="Lorem ipsum dolor sit amet, consectetur adipiscing 
                                elit, sed do eiusmod tempor incididunt ut labore 
                                et dolore magna aliqua. Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris nisi ut 
                                aliquip ex ea commodo consequat." 
                price="R$2799"
            />
            <DestinationCard 
                thumb={Hamburg}
                destiny="Hamburg" 
                aboutDestiny="Lorem ipsum dolor sit amet, consectetur adipiscing 
                                elit, sed do eiusmod tempor incididunt ut labore 
                                et dolore magna aliqua. Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris nisi ut 
                                aliquip ex ea commodo consequat." 
                price="R$2499"
            />
            <DestinationCard
                thumb={Lisboa} 
                destiny="Lisboa" 
                aboutDestiny="Lorem ipsum dolor sit amet, consectetur adipiscing 
                                elit, sed do eiusmod tempor incididunt ut labore 
                                et dolore magna aliqua. Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris nisi ut 
                                aliquip ex ea commodo consequat." 
                price="R$1699"
            />
        </div>
    );

}


export default MainDestinations;