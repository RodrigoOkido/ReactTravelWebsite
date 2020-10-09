import React from 'react';
import ImageCard from './cards/ImageCard'

const ImageGallery = (props) => {

  // Receive the list images by props and generate a whole new array of images
  // in JSX using map statement.
//   const images = props.images.map((image) => {
//     return <ImageCard key={image.id} image={image} />
//   })

  return (    
    <div className="container">
        <h3>Check some amazing places our clients shared with us!</h3>
        {/* Found: {props.length} images
        <div className="image-list"> {images} </div> */}
    </div>
  )
}

export default ImageGallery;
