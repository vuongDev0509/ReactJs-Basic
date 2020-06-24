import React from 'react';
import FooterTop from './footer/footer-top.js';
import FooterCopyright from './footer/footer-copyright.js';
class Footer extends React.Component {
  render() {
    return (
    <footer id="colophon" className="site-footer bt-footer" role="contentinfo">
        <FooterTop />
        <FooterCopyright />
    </footer>
    );
  }
}
export default Footer;