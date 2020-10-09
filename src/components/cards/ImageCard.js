import React from 'react'

class ImageCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = { spans: 0 }
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans) // Listen load, and executes setSpans function callback
  }

  // This function is a callback used in the event listener in componentDidMount().
  // Defines how many spans each img need to occupy in the page based on the
  // image height. Once defined, the value is passed through setState spans
  // property.
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1);
    this.setState( {spans: spans});
  }

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img
          ref={this.imageRef} // <== HERE IS WHERE REACT REFS ENTERS
          alt={description}
          src={urls.regular}
        />
      </div>
    )
  }
}

export default ImageCard
