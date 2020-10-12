import React from 'react';
import Search from './Search.js';
import Sort from './Sort.js';

class ControlForm extends React.Component {
  setToggleForm = () => {
      this.props.onToggleForm(true);
  };
  onSearch = (key) =>{
   this.props.onSearch(key);
  }
  // onSort = (sortBy, sortValue)=>{
  //   this.props.onSort(sortBy, sortValue);
  // }
  render() {
    let elmDisplayForm = this.props.isDisplayForm;
    return (
      <div className={elmDisplayForm === true ? "column col-xl-6 col-md-6 col-lg-12 col-lg-12" : "column col-xl-12 col-md-12 col-lg-12 col-lg-12"}> 
        <div className="vv-container-control"> 
          <button type="button" 
                  className="vv-btn vv-btn-control"
                  onClick = {this.setToggleForm}
          > 
            <i className="fa fa-plus" aria-hidden="true"></i> Add Jobs 
          </button>
          <div className="vv-content-control"> 
            <div className="row"> 
              <div className="column col-xl-7 col-md-7 col-lg-12 col-lg-12">  <Search  onSearch = {this.onSearch} /> </div>
              <div className="column col-xl-5 col-md-5 col-lg-12 col-lg-12"> 
                <Sort onSort ={this.props.onSort}/> 
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ControlForm;