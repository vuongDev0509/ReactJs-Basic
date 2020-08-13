import React from 'react';
class TaskForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      name: '',
      user: '',
      pass: '',
      status: false
    };
  };
  onHandleChange = (event) =>{
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if(name === "status"){
      value = target.value === 'true' ? true : false;
    }
    this.setState({
      [name] : value
    });
  };
  setCloseForm = () => {
      this.props.onToggleForm(true);
  };
  onSubmit = (event) =>{
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.onCloseForm();
    this.setCloseForm();
  };
  onCloseForm = () =>{
    this.setState({
      name: '',
      user: '',
      pass: '',
      status: false
    });
  }
  componentWillMount = () =>{
    if(this.props.jobEdit){
      this.setState({
        id: this.props.jobEdit.id,
        name: this.props.jobEdit.name,
        user: this.props.jobEdit.user,
        pass: this.props.jobEdit.pass,
        status: this.props.jobEdit.status
      });
    }
  }
  componentWillReceiveProps =(nextProps) =>{
    if(nextProps && nextProps.jobEdit){
      this.setState({
        id: nextProps.id,
        name: nextProps.jobEdit.name,
        user: nextProps.jobEdit.user,
        pass: nextProps.jobEdit.pass,
        status: nextProps.jobEdit.status
      });
    }else if(!nextProps.jobs){
      // does not exist jobs
      this.setState({
        id: '',
        name: '',
        user: '',
        pass: '',
        status: false
      });
    }
  }
  render() {
    let { id } = this.state;
    console.log(id);
    return (
      <div className="column col-xl-6 col-md-6 col-lg-12 col-lg-12"> 
        <div className="vv-container-taskForm"> 
            <h3 className="vv-title main-color">
              {id ===  '' ? 'Add Job' : 'Update Job'}
              <i className="fa fa-times" 
                  aria-hidden="true"
                  onClick  = {this.setCloseForm}
              ></i>
            </h3>
            <div className="vv-content-task-form"> 
                <form onSubmit = {this.onSubmit}>
                  <div className="row"> 
                      <div className="column col-xl-6 col-md-6 col-lg-12 col-lg-12"> 
                        <div className="vv-group"> 
                            <label> Name: </label>
                            <input type="text" 
                                   className="form-control main-color" 
                                   placeholder="Please Enter Name" 
                                   name="name"
                                   value={this.state.name}
                                   onChange ={this.onHandleChange}
                            />
                        </div>
                      </div>
                      <div className="column col-xl-6 col-md-6 col-lg-12 col-lg-12">
                         <div className="vv-group"> 
                            <label> User: </label>
                            <input type="text" 
                                   className="form-control main-color" 
                                   placeholder="Please Enter User" 
                                   name="user"
                                   value={this.state.user}
                                   onChange ={this.onHandleChange}
                            />
                        </div>
                      </div>
                  </div>
                  <div className="row">
                    <div className="column col-xl-6 col-md-6 col-lg-12 col-lg-12"> 
                      <div className="vv-group"> 
                          <label> Password: </label>
                          <input type="text" 
                                 className="form-control main-color" 
                                 placeholder="Please Enter Password"
                                 name="pass"
                                 value={this.state.pass}
                                 onChange ={this.onHandleChange} 
                          />
                      </div>
                    </div>
                    <div className="column col-xl-6 col-md-6 col-lg-12 col-lg-12">
                      <div className="vv-group"> 
                        <label> Status: </label>
                        <select className="form-control" 
                                required="required"
                                name="status"
                                value={this.state.status}
                                onChange ={this.onHandleChange} 
                        >
                          <option value="true">Active</option>
                          <option value="false" >Deactive</option>
                        </select>
                      </div>
                    </div>
                  </div>
                 
                  <div className="vv-group vv-group-submit"> 
                        <button type="submit" className="vv-btn btn-add">Add</button>
                        <button type="button" className="vv-btn btn-remove" onClick={this.onCloseForm}>Remove</button>
                  </div>
                </form>
            </div>
        </div>
      </div>
    );
  }
}
export default TaskForm;