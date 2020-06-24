import React from 'react';
class MenuMain extends React.Component {
  render() {
    return (
      <div className="bt-menu-main">
          <div className="bt-content-menu-main"> 
            <ul id="menu-main">
              <li> <a>Home</a> </li>
              <li> <a>Services</a> </li>
              <li> <a>Contact</a> </li>
              <li> <a>Book Online</a> </li>
              <li> <a>Forum </a> </li>
              <li> <a>Plan & Pricing</a> </li>
            </ul>
          </div>
      </div>
    );
  }
}
export default MenuMain;