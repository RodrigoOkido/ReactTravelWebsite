import React from 'react';

// Components
import HotTripCard from './cards/HotTripCard'

// Stylesheet
import '../stylesheet/travelSuggestion.css'

// Cities 
import Paris from '../assets/images/cities/paris.jpg'
import Tokyo from '../assets/images/cities/tokyo.jpg'
import SaoPaulo from '../assets/images/cities/saopaulo.jpg'


/**
 * TravelSuggestion Component.
 * Displays some popular destinations to client.
 */
const TravelSuggestion = () => {
    return (
        <div className="travel-recommendation">
            <div className="container">
                <h3>-- Hot Trips --</h3>
                <div className="row">
                    <div className="col">
                        <HotTripCard 
                            thumb={Paris}
                            country="Paris" 
                            price="R$2400 - 10x de R$240"
                        />
                    </div>
                    <div className="col">
                        <HotTripCard 
                            thumb={Tokyo}
                            country="Tokyo" 
                            price="R$4700 - 10x de R$70"
                        />
                    </div>
                    <div className="col">
                        <HotTripCard 
                            thumb={SaoPaulo}
                            country="São Paulo" 
                            price="R$900 - 10x de R$90"
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TravelSuggestion;