import React from 'react';
class Sort extends React.Component {
  render() {
    return (
      <div className="vv-sort-form"> 
      		<button className="vv-btn btn-sort" type="button"> <i className="fa fa-chevron-down" aria-hidden="true"></i> Sort </button>
      		<ul className="vv-nav-sort"> 
      			<li> A - Z </li>
      			<li> A - Z </li>
      			<li> Active </li>
      			<li> Deactive </li>
      		</ul>
      </div>
    );
  }
}
export default Sort;