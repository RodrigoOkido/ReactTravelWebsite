import React from 'react';

// Components 
import Navbar from '../Navbar'
import Header from '../Header'
import Footer from '../Footer'
import HotTripCard from '../cards/HotTripCard'
import FadeIn from 'react-fade-in'

// Stylesheet
import '../../stylesheet/ourDestinations.css'

// Importing all city images. This webpage its not using DB. 
import Amsterdam from '../../assets/images/cities/amsterdam.jpg'
import California from '../../assets/images/cities/california.jpg'
import Curitiba from '../../assets/images/cities/curitiba.jpg'
import Frankfurt from '../../assets/images/cities/frankfurt.jpg'
import Hamburg from '../../assets/images/cities/hamburg.jpg'
import Lisboa from '../../assets/images/cities/lisboa.jpg'
import London from '../../assets/images/cities/london.jpg'
import Miami from '../../assets/images/cities/miami.jpg'
import Munich from '../../assets/images/cities/munich.jpg'
import NewYork from '../../assets/images/cities/newyork.jpg'
import Osaka from '../../assets/images/cities/osaka.jpg'
import Paris from '../../assets/images/cities/paris.jpg'
import PortoAlegre from '../../assets/images/cities/porto-alegre.jpg'
import RioDeJaneiro from '../../assets/images/cities/rio-de-janeiro.jpg'
import SaoPaulo from '../../assets/images/cities/saopaulo.jpg'
import Seattle from '../../assets/images/cities/seattle.jpg'
import Seoul from '../../assets/images/cities/seoul.jpg'
import Tokyo from '../../assets/images/cities/tokyo.jpg'
import Vancouver from '../../assets/images/cities/vancouver.jpg'
import Vegas from '../../assets/images/cities/vegas.jpg'
import Montevideo from '../../assets/images/cities/montevideo.jpg'


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
                                    thumb={Paris}
                                    country="Paris" 
                                    price="R$2400 - 10x de R$240"
                                />                        
                            </div>
                            <div className="col show-trips">
                                <HotTripCard 
                                    thumb={London}
                                    country="London" 
                                    price="R$2400 - 10x de R$240"
                                /> 
                            </div>
                            <div className="col show-trips">
                              <HotTripCard 
                                    thumb={Munich}
                                    country="Munich" 
                                    price="R$2400 - 10x de R$240"
                                /> 
                            </div>
                        </div>
                        <div className="row">
                            <div className="col show-trips">
                                <HotTripCard 
                                    thumb={SaoPaulo}
                                    country="São Paulo" 
                                    price="R$2400 - 10x de R$240"
                                />                        
                            </div>
                            <div className="col show-trips">
                                <HotTripCard 
                                    thumb={RioDeJaneiro}
                                    country="Rio de Janeiro" 
                                    price="R$2400 - 10x de R$240"
                                /> 
                            </div>
                            <div className="col show-trips">
                              <HotTripCard 
                                    thumb={Miami}
                                    country="Miami" 
                                    price="R$2400 - 10x de R$240"
                                /> 
                            </div>
                        </div>
                        <div className="row">
                            <div className="col show-trips">
                                <HotTripCard 
                                    thumb={NewYork}
                                    country="New York" 
                                    price="R$2400 - 10x de R$240"
                                />                        
                            </div>
                            <div className="col show-trips">
                                <HotTripCard 
                                    thumb={Vancouver}
                                    country="Vancouver" 
                                    price="R$2400 - 10x de R$240"
                                /> 
                            </div>
                            <div className="col show-trips">
                              <HotTripCard 
                                    thumb={Seattle}
                                    country="Seattle" 
                                    price="R$2400 - 10x de R$240"
                                /> 
                            </div>
                        </div>
                        <div className="row">
                            <div className="col show-trips">
                                <HotTripCard 
                                    thumb={Tokyo}
                                    country="Tokyo" 
                                    price="R$2400 - 10x de R$240"
                                />                        
                            </div>
                            <div className="col show-trips">
                                <HotTripCard 
                                    thumb={Amsterdam}
                                    country="Amsterdan" 
                                    price="R$2400 - 10x de R$240"
                                /> 
                            </div>
                            <div className="col show-trips">
                              <HotTripCard 
                                    thumb={PortoAlegre}
                                    country="Porto Alegre" 
                                    price="R$2400 - 10x de R$240"
                                /> 
                            </div>
                        </div>
                        <div className="row">
                            <div className="col show-trips">
                                <HotTripCard 
                                    thumb={California}
                                    country="Califórnia" 
                                    price="R$2400 - 10x de R$240"
                                />                        
                            </div>
                            <div className="col show-trips">
                                <HotTripCard 
                                    thumb={Osaka}
                                    country="Osaka" 
                                    price="R$2400 - 10x de R$240"
                                /> 
                            </div>
                            <div className="col show-trips">
                              <HotTripCard 
                                    thumb={Lisboa}
                                    country="Lisboa" 
                                    price="R$2400 - 10x de R$240"
                                /> 
                            </div>
                        </div>
                        <div className="row">
                            <div className="col show-trips">
                                <HotTripCard 
                                    thumb={Frankfurt}
                                    country="Frankfurt" 
                                    price="R$2400 - 10x de R$240"
                                />                        
                            </div>
                            <div className="col show-trips">
                                <HotTripCard 
                                    thumb={Seoul}
                                    country="Seoul" 
                                    price="R$2400 - 10x de R$240"
                                /> 
                            </div>
                            <div className="col show-trips">
                              <HotTripCard
                                    thumb={Hamburg}
                                    country="Hamburg" 
                                    price="R$2400 - 10x de R$240"
                                /> 
                            </div>
                        </div>
                        <div className="row">
                            <div className="col show-trips">
                                <HotTripCard 
                                    thumb={Vegas}
                                    country="Las Vegas" 
                                    price="R$2400 - 10x de R$240"
                                />                        
                            </div>
                            <div className="col show-trips">
                                <HotTripCard 
                                    thumb={Curitiba}
                                    country="Curitiba" 
                                    price="R$2400 - 10x de R$240"
                                /> 
                            </div>
                            <div className="col show-trips">
                                <HotTripCard 
                                    thumb={Montevideo}
                                    country="Montevideo" 
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