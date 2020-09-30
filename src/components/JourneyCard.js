import React from 'react';

// Stylesheet
import '../stylesheet/journeyCard.css';

const JourneyCard = (props) => {
    return (
        <div className="col">
            <div class="card border-dark mb-3">
                <div class="card-body text-dark">
                    <h1 class="card-title" id="number">{props.number}</h1>
                    <p class="card-text" id="description">{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default JourneyCard;
