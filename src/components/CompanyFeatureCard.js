import React from 'react';

// Stylesheet
import '../stylesheet/companyFeatureCard.css';

const CompanyFeatureCard = (props) => {
    return (
        <div className="col">
            <div className="card border-dark mb-3">
                <div className="card-body text-dark display-icon">
                    <span>{props.icon}</span>
                    <h1 className="card-title" id="feature">{props.feature}</h1>
                </div>
            </div>
        </div>
    )
}

export default CompanyFeatureCard;
