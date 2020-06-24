import React from 'react';
import ListingProducts from './listing-products.js';
class Products extends React.Component{
  addProducts = () =>{
    var aa  = this.refs.name.value;
    console.log(aa);
    alert('you have saved ' + aa);
  };
  onSetState = () =>{
    if(this.state.isActive === true){
      this.setState({
        isActive: false
      });
    }else{
      this.setState({
        isActive: true
      });
    }
  };
  // start state
  constructor(props){
    super(props);
    this.state ={
      itemTable : [
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
      ],
      isActive: true
    };
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

    var elementsTable = this.state.itemTable.map((tables, index) =>{
      let result  =  <tr key= {index}>
                        <td> { index } </td>
                        <td> {tables.title} </td>
                        <td> {tables.price} </td>
                      </tr>
      if(this.state.isActive === true){
        if(tables.status){
          return result;
        }
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
                  <input type="text" className="bt-input-add-products bt-input" ref="name" />
                  <button type="submit" className="bt-submit-add-products" onClick = { this.addProducts } > Save </button>
                </div>
              </div>
              <div className="bt-table-grid-porducts">
                  <table className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th> STT </th>
                        <th> Name </th>
                        <th> Price </th>
                      </tr>
                    </thead>
                    <tbody>
                     {elementsTable}
                    </tbody> 
                  </table>
                  <button type="button" className="bt-btn bt-btn-table" onClick={this.onSetState}> 
                    Active: {this.state.isActive ===  true ? 'false' : 'true'}
                  </button>
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