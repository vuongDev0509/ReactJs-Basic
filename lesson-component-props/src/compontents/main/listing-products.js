import React from 'react';
class ListingProducts extends React.Component {
  render() {
    return(
		<div className="bt-item-products"> 
			<div className="bt-container-product"> 
				<div className="bt-thumbnail-products">
					<img  src={ this.props.img } alt={this.props.title} />
				</div>
				<div className="bt-content-products"> 
					<h2 className="bt-title"> {this.props.title} </h2>
				</div>
				<div className="bt-prices"> {this.props.price} </div>
			</div>
		</div>
    );
  }
}
export default ListingProducts;