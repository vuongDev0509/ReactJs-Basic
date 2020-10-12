import React from 'react';
class Search extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			keywords: ""
		}
	}
	
	hanldeSearch = (event) =>{
		var target = event.target;
	    var name = target.name;
	    var value = target.value;
		this.setState({
			keywords : value
		});
	}

	onSearch = () =>{
		this.props.onSearch(this.state.keywords);
	}
  render() {
    return (
      <div className="vv-search-form"> 
      	<div className="vv-item-search"> 
			<div className="vv-group"> 
				<input type="text" 
						className="vv-input-search-key form-control" 
						placeholder="Enter keywords..." 
						value = {this.state.keywords}
						onChange = {this.hanldeSearch}
				/>
				<button className="vv-btn btn-search" 
						type="button"
						onClick = {this.onSearch}

				>
					<i className="fa fa-search" aria-hidden="true"></i>Search
				</button>
			</div>
		</div>
      </div>
    );
  }
}
export default Search;