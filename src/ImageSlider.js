import React from 'react'

class ImageSlider extends React.Component {
  constructor() {
    super();
      this.state= {
        currentSlideIndex: 0
      }
  }
  
   render() {
    return(
      <div>
        <p>I am on slide {this.state.currentSlideIndex}, where {this.state.currentSlideIndex} is the value of {this.state.currentSlideIndex}.
      </div>
    );
  }
}

export default ImageSlider;