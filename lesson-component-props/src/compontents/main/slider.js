import React from 'react';
import Background from '../../image/image-slider-01.jpg';
const  divStyle = {
	width: '100%',
	minHeight: '600px',
	padding: '0',
	margin: '0',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	backgroundImage: "url("+Background+")"
};
class Slider extends React.Component {
  render() {
    return (
      <section className="bt-section bt-ss-slider-home-page" style={divStyle}></section>
    );
  }
}
export default Slider;