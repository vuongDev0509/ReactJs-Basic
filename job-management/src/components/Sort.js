import React from 'react';
class Sort extends React.Component {
  // componentWillReceiveProps(nextProps){
  //   console.log(nextProps);
  //   console.log("aaa");
  // }

  hanldeSort = (sortBy, sortValue) =>{
    this.props.onSort(sortBy, sortValue);
  }
  render() {
    return (
      <div className="vv-sort-form"> 
      		<button className="vv-btn btn-sort" type="button"> 
            <i className="fa fa-chevron-down" aria-hidden="true"></i> Sort 
          </button>
      		<ul className="vv-nav-sort"> 
      			<li onClick ={ () => this.hanldeSort('name', 1) }> A - Z </li>
      			<li onClick ={ () => this.hanldeSort('name', -1) }> Z - A </li>
      			<li onClick ={ () => this.hanldeSort('status', 1) }> Active </li>
      			<li onClick ={ () => this.hanldeSort('status', -1) }> Deactive </li>
      		</ul>
      </div>
    );
  }
}
export default Sort;