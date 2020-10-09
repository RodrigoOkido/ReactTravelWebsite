import React from 'react';

// Components 
import Navbar from '../Navbar'
import Header from '../Header'
import Footer from '../Footer'
import HotTripCard from '../cards/HotTripCard'
import FadeIn from 'react-fade-in'

// Stylesheet
import '../../stylesheet/ourDestinations.css'

const OurDestinations = () => {
    return (
        <div>
            <Navbar />
            <FadeIn>
                <Header title="Destinations" />
                <div className="travel-recommendation">
                    <div className="container">
                        <h3>-- Check our destinations available at the moment --</h3>
                        <div className="row">
                            <div className="col show-trips">
                                <HotTripCard 
                                    country="Paris" 
                                    price="R$2400 - 10x de R$240"
                                />                        
                            </div>
                            <div className="col show-trips">
                                <HotTripCard 
                                    country="London" 
                                    price="R$2400 - 10x de R$240"
                                /> 
                            </div>
                            <div className="col show-trips">
                              <HotTripCard 
                                    country="Munich" 
                                    price="R$2400 - 10x de R$240"
                                /> 
                            </div>
                        </div>
                        <div className="row">
                            <div className="col show-trips">
                                <HotTripCard 
                                    country="São Paulo" 
                                    price="R$2400 - 10x de R$240"
                                />                        
                            </div>
                            <div className="col show-trips">
                                <HotTripCard 
                                    country="Rio de Janeiro" 
                                    price="R$2400 - 10x de R$240"
                                /> 
                            </div>
                            <div className="col show-trips">
                              <HotTripCard 
                                    country="Florida" 
                                    price="R$2400 - 10x de R$240"
                                /> 
                            </div>
                        </div>
                        <div className="row">
                            <div className="col show-trips">
                                <HotTripCard 
                                    country="New York" 
                                    price="R$2400 - 10x de R$240"
                                />                        
                            </div>
                            <div className="col show-trips">
                                <HotTripCard 
                                    country="Vancouver" 
                                    price="R$2400 - 10x de R$240"
                                /> 
                            </div>
                            <div className="col show-trips">
                              <HotTripCard 
                                    country="Seattle" 
                                    price="R$2400 - 10x de R$240"
                                /> 
                            </div>
                        </div>
                        <div className="row">
                            <div className="col show-trips">
                                <HotTripCard 
                                    country="Tokyo" 
                                    price="R$2400 - 10x de R$240"
                                />                        
                            </div>
                            <div className="col show-trips">
                                <HotTripCard 
                                    country="Amsterdan" 
                                    price="R$2400 - 10x de R$240"
                                /> 
                            </div>
                            <div className="col show-trips">
                              <HotTripCard 
                                    country="Porto Alegre" 
                                    price="R$2400 - 10x de R$240"
                                /> 
                            </div>
                        </div>
                        <div className="row">
                            <div className="col show-trips">
                                <HotTripCard 
                                    country="Califórnia" 
                                    price="R$2400 - 10x de R$240"
                                />                        
                            </div>
                            <div className="col show-trips">
                                <HotTripCard 
                                    country="Osaka" 
                                    price="R$2400 - 10x de R$240"
                                /> 
                            </div>
                            <div className="col show-trips">
                              <HotTripCard 
                                    country="Lisboa" 
                                    price="R$2400 - 10x de R$240"
                                /> 
                            </div>
                        </div>
                        <div className="row">
                            <div className="col show-trips">
                                <HotTripCard 
                                    country="Frankfurt" 
                                    price="R$2400 - 10x de R$240"
                                />                        
                            </div>
                            <div className="col show-trips">
                                <HotTripCard 
                                    country="Seoul" 
                                    price="R$2400 - 10x de R$240"
                                /> 
                            </div>
                            <div className="col show-trips">
                              <HotTripCard 
                                    country="Hamburg" 
                                    price="R$2400 - 10x de R$240"
                                /> 
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </FadeIn>
        </div>
    )
}

export default OurDestinations;