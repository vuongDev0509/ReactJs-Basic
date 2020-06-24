import React from 'react';
class ListingProducts extends React.Component {
	constructor(props){
		super(props);
		this.addToCart = this.addToCart.bind(this);
	}
	addToCart(){
		console.log(this.props.title);
		alert('bought ' + this.props.title + ' :D')
	}
	// k cần sử dụng constructor
	// addToCart2 = () =>{
	// 	console.log(this.props.title);
	// alert('bought' + this.props.title)
	// }
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
				{/*<div className="bt-btn-products">  <a onClick={() => this.addToCart(this.props.title)}> Add To Cart </a> </div>*/}
				<div className="bt-btn-products">  <a onClick={this.addToCart}> Add To Cart </a> </div>
				{/*<div className="bt-btn-products">  <a onClick={this.addToCart2}> Add To Cart </a> </div>*/}
			</div>
		</div>
    );
  }
}
export default ListingProducts;