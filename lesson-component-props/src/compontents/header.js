import React from 'react';
import LoGo from './header/logo.js';
import MenuMain from './header/menu-main.js';
import HeaderBottom from './header/header-bottom.js';
class Header extends React.Component {
  render() {
    return (
      <header id="masthead" className="bt-header-main" role="banner">
      	<div className="container">
			   <div className="bt-container-header-main">
      			<div className="row">
  	    			<div className="bt-content-header-main">
  	    				<LoGo />
      					<MenuMain />
  	    			</div>
      			</div>
    		</div>	
    	</div>	
    	<div className="bt-header-bottom"> 
    		<div className="container">
    			<div className="row">
	    			<div className="bt-content-header-bottom">
	    				<HeaderBottom />
	    			</div>
	    		</div>	
    		</div>
    	</div>
      </header>
    );
  }
}
export default Header;