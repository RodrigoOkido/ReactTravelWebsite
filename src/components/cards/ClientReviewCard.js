import React from 'react';

// Styesheet
import '../../stylesheet/cards/clientReviewCard.css';


/**
 * ClientReviewCard.
 * Used to show client opinions about your services.
 * 
 * @param {*} props In this case its not being used. Instead its using "lorem"
 *                  text.
 */
const ClientReviewCard = (props) => {
    return (
        <div className="col">
            <div className="card p-3 text-right" id="client-card">
                <blockquote className="blockquote mb-0">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer">
                    <small className="text-muted">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                    </small>
                </footer>
                </blockquote>
            </div>
        </div>

    )
}

export default ClientReviewCard;
