import React from 'react';
class Search extends React.Component {
  render() {
    return (
      <div className="vv-search-form"> 
      	<div className="vv-item-search"> 
			<div className="vv-group"> 
				<input type="text" className="vv-input-search-key form-control" placeholder="Enter keywords..." />
				<button className="vv-btn btn-search" type="button">
					<i className="fa fa-search" aria-hidden="true"></i>Search
				</button>
			</div>
		</div>
      </div>
    );
  }
}
export default Search;