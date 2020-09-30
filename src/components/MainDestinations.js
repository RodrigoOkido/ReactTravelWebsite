import React from 'react';

// Components
import DestinationCard from '../components/DestinationCard'

// Stylesheet
import '../stylesheet/mainDestinations.css'


const MainDestinations = () => {

    return (
        <div className="container" id="destinations">
            <h3>Check some of our destinations!</h3>
            <DestinationCard 
                destiny="Destiny" 
                aboutDestiny="Lorem ipsum dolor sit amet, consectetur adipiscing 
                                elit, sed do eiusmod tempor incididunt ut labore 
                                et dolore magna aliqua. Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris nisi ut 
                                aliquip ex ea commodo consequat." 
                price="R$899"
            />
            <DestinationCard 
                destiny="Destiny" 
                aboutDestiny="Lorem ipsum dolor sit amet, consectetur adipiscing 
                                elit, sed do eiusmod tempor incididunt ut labore 
                                et dolore magna aliqua. Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris nisi ut 
                                aliquip ex ea commodo consequat." 
                price="R$599"
            />
            <DestinationCard 
                destiny="Destiny" 
                aboutDestiny="Lorem ipsum dolor sit amet, consectetur adipiscing 
                                elit, sed do eiusmod tempor incididunt ut labore 
                                et dolore magna aliqua. Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris nisi ut 
                                aliquip ex ea commodo consequat." 
                price="R$899"
            />
            <DestinationCard 
                destiny="Destiny" 
                aboutDestiny="Lorem ipsum dolor sit amet, consectetur adipiscing 
                                elit, sed do eiusmod tempor incididunt ut labore 
                                et dolore magna aliqua. Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris nisi ut 
                                aliquip ex ea commodo consequat." 
                price="R$399"
            />
            <DestinationCard 
                destiny="Destiny" 
                aboutDestiny="Lorem ipsum dolor sit amet, consectetur adipiscing 
                                elit, sed do eiusmod tempor incididunt ut labore 
                                et dolore magna aliqua. Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris nisi ut 
                                aliquip ex ea commodo consequat." 
                price="R$2499"
            />
        </div>
    );

}


export default MainDestinations;