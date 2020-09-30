import React from 'react';

// Stylesheet
import '../stylesheet/companyFeatureCard.css';

const CompanyFeatureCard = (props) => {
    return (
        <div className="col">
            <div class="card border-dark mb-3">
                <div class="card-body text-dark">
                    <h1 class="card-title" id="feature">{props.feature}</h1>
                </div>
            </div>
        </div>
    )
}

export default CompanyFeatureCard;
