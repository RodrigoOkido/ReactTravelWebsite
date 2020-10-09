import React from 'react';


const HotTripCard = (props) => {

    return (
        <div className="card">
            <a href="/"><img src="https://dummyimage.com/500x500/b3b3b3/000000" className="card-img-top" alt="..." /></a>
            <div className="card-body">
                <h4 className="card-title">{props.country}</h4>
                <p className="card-text">{props.price}</p>
                <a href="/" className="btn btn-primary">Purchase this trip</a>
            </div>
        </div>
    );

}

export default HotTripCard;