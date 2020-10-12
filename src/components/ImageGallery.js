import React from 'react';
import ImageCard from './cards/ImageCard'

// Importing all city images. This webpage its not using DB. 
import Amsterdam from '../assets/images/cities/amsterdam.jpg'
import California from '../assets/images/cities/california.jpg'
import Curitiba from '../assets/images/cities/curitiba.jpg'
import Frankfurt from '../assets/images/cities/frankfurt.jpg'
import Hamburg from '../assets/images/cities/hamburg.jpg'
import Lisboa from '../assets/images/cities/lisboa.jpg'
import London from '../assets/images/cities/london.jpg'
import Miami from '../assets/images/cities/miami.jpg'
import Munich from '../assets/images/cities/munich.jpg'
import NewYork from '../assets/images/cities/newyork.jpg'
import Osaka from '../assets/images/cities/osaka.jpg'
import Paris from '../assets/images/cities/paris.jpg'
import PortoAlegre from '../assets/images/cities/porto-alegre.jpg'
import RioDeJaneiro from '../assets/images/cities/rio-de-janeiro.jpg'
import SaoPaulo from '../assets/images/cities/saopaulo.jpg'
import Seattle from '../assets/images/cities/seattle.jpg'
import Seoul from '../assets/images/cities/seoul.jpg'
import Tokyo from '../assets/images/cities/tokyo.jpg'
import Vancouver from '../assets/images/cities/vancouver.jpg'
import Vegas from '../assets/images/cities/vegas.jpg'
import Montevideo from '../assets/images/cities/montevideo.jpg'

// Stylesheet
import '../stylesheet/imageGallery.css'

const ImageGallery = (props) => {

  // Receive the list images by props and generate a whole new array of images
  // in JSX using map statement.
//   const images = props.images.map((image) => {
//     return <ImageCard key={image.id} image={image} />
//   })

  return (    
    <div className="container">
      <div className="image-gallery">
      <h3>-- Check some amazing places our clients shared with us! --</h3>
          <div className="row">
              <div className="col show-trips">
                  <ImageCard 
                      thumb={Paris}
                  />                        
              </div>
              <div className="col show-trips">
                  <ImageCard 
                      thumb={London}
                  /> 
              </div>
              <div className="col show-trips">
                  <ImageCard 
                      thumb={Munich}
                  /> 
              </div>
          </div>
          <div className="row">
              <div className="col show-trips">
                  <ImageCard 
                      thumb={SaoPaulo}
                  />                        
              </div>
              <div className="col show-trips">
                  <ImageCard 
                      thumb={RioDeJaneiro}
                  /> 
              </div>
              <div className="col show-trips">
                <ImageCard 
                      thumb={Miami}
                  /> 
              </div>
          </div>
          <div className="row">
              <div className="col show-trips">
                  <ImageCard 
                      thumb={NewYork}
                  />                        
              </div>
              <div className="col show-trips">
                  <ImageCard 
                      thumb={Vancouver}
                  /> 
              </div>
              <div className="col show-trips">
                <ImageCard 
                      thumb={Seattle}
                  /> 
              </div>
          </div>
          <div className="row">
              <div className="col show-trips">
                  <ImageCard 
                      thumb={Tokyo}
                  />                        
              </div>
              <div className="col show-trips">
                  <ImageCard 
                      thumb={Amsterdam}
                  /> 
              </div>
              <div className="col show-trips">
                <ImageCard 
                      thumb={PortoAlegre}
                  /> 
              </div>
          </div>
          <div className="row">
              <div className="col show-trips">
                  <ImageCard 
                      thumb={California}
                  />                        
              </div>
              <div className="col show-trips">
                  <ImageCard 
                      thumb={Osaka}
                  /> 
              </div>
              <div className="col show-trips">
                <ImageCard 
                      thumb={Lisboa}
                  /> 
              </div>
          </div>
          <div className="row">
              <div className="col show-trips">
                  <ImageCard 
                      thumb={Frankfurt}
                  />                        
              </div>
              <div className="col show-trips">
                  <ImageCard 
                      thumb={Seoul}
                  /> 
              </div>
              <div className="col show-trips">
                <ImageCard
                      thumb={Hamburg}
                  /> 
              </div>
          </div>
          <div className="row">
              <div className="col show-trips">
                  <ImageCard 
                      thumb={Vegas}
                  />                        
              </div>
              <div className="col show-trips">
                  <ImageCard 
                      thumb={Curitiba}
                  /> 
              </div>
              <div className="col show-trips">
                  <ImageCard 
                      thumb={Montevideo}
                  /> 
              </div>
          </div>
      </div>    
    </div>
  )
}

export default ImageGallery;
