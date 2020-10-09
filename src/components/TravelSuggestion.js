import React from 'react';

// Components
import HotTripCard from './cards/HotTripCard.js'

// Stylesheet
import '../stylesheet/travelSuggestion.css'


const TravelSuggestion = () => {
    return (
        <div className="travel-recommendation">
            <div className="container">
                <h3>-- Hot Trips --</h3>
                <div className="row">
                    <div className="col">
                        <HotTripCard 
                            country="Paris" 
                            price="R$2400 - 10x de R$240"
                        />
                    </div>
                    <div className="col">
                        <HotTripCard 
                            country="Fortaleza" 
                            price="R$700 - 10x de R$70"
                        />
                    </div>
                    <div className="col">
                        <HotTripCard 
                            country="Las Vegas" 
                            price="R$1800 - 10x de R$180"
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TravelSuggestion;