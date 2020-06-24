import React from 'react';
import ListingProducts from './listing-products.js';
class Products extends React.Component{
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