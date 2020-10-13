import React from 'react';


const HotTripCard = (props) => {

    return (
        <div className="card">
            <a href="/ReactTravelWebsite"><img src={props.thumb} className="card-img-top" alt={props.country} width="400" height="250" /></a>
            <div className="card-body">
                <h4 className="card-title">{props.country}</h4>
                <p className="card-text">{props.price}</p>
                <a href="./" className="btn btn-primary">Purchase this trip</a>
            </div>
        </div>
    );

}

export default HotTripCard;