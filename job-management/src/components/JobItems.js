import React from 'react';
class JobItems extends React.Component {
  onChangeStatus = () =>{
    this.props.onChangeStatus(this.props.id);
  }
  onDeleteJob = () =>{
    this.props.onDeleteJob(this.props.id);
  }
  onEditJob = () =>{
    this.props.onEditJob(this.props.id);
  }
  render() {
    return (
      <tr>
        <td>{this.props.stt + 1}</td>
        <td>{this.props.name}</td>
        <td>{this.props.user}</td>
        <td>{this.props.pass}</td>
        <td className="text-center">
           <span onClick={this.onChangeStatus} className={this.props.status === true ? 'vv-btn vv-btn-active' : 'vv-btn vv-btn-deactive'} >
            {this.props.status === true ? 'Active' : 'Deactive'}
          </span>
          
        </td>
        <td className="text-center">
          <button type="button" 
                  className="vv-btn btn-edit"
                  onClick = {this.onEditJob}
          >
            <span className="fa fa-pencil mr-5"></span> Edit
          </button>
          <button type="button" 
                  className="vv-btn btn-remove"
                  onClick = {this.onDeleteJob}
          >
            <span className="fa fa-trash mr-5"></span> Remove
          </button>
        </td>
      </tr>
    );
  }
}
export default JobItems;