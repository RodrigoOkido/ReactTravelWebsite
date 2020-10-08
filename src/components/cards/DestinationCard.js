import React from 'react';

// Stylesheet


const DestinationCard = (props) => {

    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-3">
                    <img src="https://dummyimage.com/250x250/b3b3b3/000000" className="card-img" alt="..." />
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <h3 className="card-title">{props.destiny}</h3>
                        <p className="card-text">{props.aboutDestiny}</p>
                        <h2 className="card-text">{props.price}</h2>
                        <a href="#" className="btn btn-primary">Check this destination</a>
                    </div>
                </div>
            </div>
        </div>
    );

}


export default DestinationCard;