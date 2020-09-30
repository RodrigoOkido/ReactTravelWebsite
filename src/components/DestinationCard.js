import React from 'react';

// Stylesheet


const DestinationCard = (props) => {

    return (
        <div class="card mb-3">
            <div class="row no-gutters">
                <div class="col-md-3">
                    <img src="https://dummyimage.com/250x250/b3b3b3/000000" class="card-img" alt="..." />
                </div>
                <div class="col-md-9">
                    <div class="card-body">
                        <h3 class="card-title">{props.destiny}</h3>
                        <p class="card-text">{props.aboutDestiny}</p>
                        <h2 class="card-text">{props.price}</h2>
                        <a href="#" className="btn btn-primary">Check this destination</a>
                    </div>
                </div>
            </div>
        </div>
    );

}


export default DestinationCard;