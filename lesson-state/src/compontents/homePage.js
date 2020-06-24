import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js';
import Main from './main.js';
import Footer from './footer.js';
class HomePage extends React.Component {
  render() {
    return (
		<div className="site-content">
			<Header />
			<Main />
			<Footer />
		</div>
     
    );
  }
}
export default HomePage;