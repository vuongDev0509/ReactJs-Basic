import React from 'react';
import ListingProducts from './listing-products.js';
class Products extends React.Component{
  addProducts = () =>{
    var aa  = this.refs.name.value;
    console.log(aa);
    alert('you have saved ' + aa)
  }
  render() {
    var products = [
      {
        id: "1",
        title: "Mesut Ozil",
        price: "800000",
        img: "https://cauthu.com.vn/wp-content/uploads/2020/06/Mesut-Ozil.jpg",
        status: true
      },
      {
        id: "2",
        title: "Ronaldo",
        price: "1200000",
        img:"https://cauthu.com.vn/wp-content/uploads/2020/06/Mesut-Ozil.jpg",
        status: true
      },      
      {
        id: "3",
        title: "F4",
        price: "40000",
        img:"https://cauthu.com.vn/wp-content/uploads/2020/06/Mesut-Ozil.jpg",
        status: false
      }
    ];
    var elementsProducts = products.map((item, index) =>{
      let result =  <ListingProducts
                      key   = {item.id} 
                      title = {item.title}
                      price = {item.price}
                      img   = {item.img}
                    /> 
      if(item.status){
          return result;
      }              
    });
    return(
      <section className="bt-section bt-ss-products">
      	<div className="container"> 
      		<div className="row"> 
      			<div className="bt-container-products-listing"> 
              <div className="bt-add-products"> 
                <label>ADD PRODUCTS </label>
                <div className="bt-content-add-products"> 
                  <input type="text" class="bt-input-add-products bt-input" ref="name" />
                  <button type="submit" className="bt-submit-add-products" onClick = { this.addProducts } > Save </button>
                </div>
              </div>
              <div className="bt-content-grid-products"> 
                {elementsProducts}
              </div>  
            </div>
      		</div>
      	</div>
      </section>
    );
  }
}
export default Products;