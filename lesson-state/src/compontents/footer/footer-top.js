import React from 'react';
import LoGo from '../header/logo.js';
import Background from '../../image/bkg-footer.jpg';
const footerStyle = {
  width: '100%',
  padding: '0',
  margin: '0',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundImage: "url("+Background+")"
};
class FooterTop extends React.Component {
  render() {
    return(
      <section className="bt-section bt-ss-footer-top" style={footerStyle}>
      	<div className="container"> 
      		<div className="row"> 
            <div className="bt-content-footer-top"> 
              <div className="bt-items-footer-top"> <LoGo /> </div>
              <div className="bt-items-footer-top"> 
                <ul className="bt-nav-link-footer">
                  <li> Meet The Team </li>
                  <li> What We Offer </li>
                  <li> Our CLients </li>
                  <li> Visit Our Blog </li>
                  <li> FAQ </li>
                  <li> Contact Us </li>
                </ul>
              </div>
            </div>
      		</div>  
      	</div>
      </section>
    );
  }
}
export default FooterTop;