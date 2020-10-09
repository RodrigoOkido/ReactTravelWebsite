import React from 'react';

// Stylesheet
import '../../stylesheet/journeyCard.css';


const JourneyCard = (props) => {
    return (
        <div className="col">
            <div className="card border-dark mb-3">
                <div className="card-body text-dark">
                    <h1 className="card-title" id="number">{props.number}</h1>
                    <p className="card-text" id="description">{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default JourneyCard;
