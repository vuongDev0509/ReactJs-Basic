import React from 'react';
class TaskForm extends React.Component {
  render() {
    return (
      <div className="column col-xl-4 col-md-5 col-lg-12 col-lg-12"> 
        <div className="vv-container-taskForm"> 
            <h3 className="vv-title main-color"> Add Job </h3>
            <div className="vv-content-task-form"> 
                <form>
                  <div className="vv-group"> 
                    <label> Name: </label>
                    <input type="text" className="form-control main-color" placeholder="Please Enter Name" />
                  </div>
                  <div className="vv-group"> 
                    <label> Status: </label>
                    <select className="form-control" required="required">
                      <option value="1">Active</option>
                      <option value="0">Deactive</option>
                    </select>
                  </div>
                  <div className="vv-group vv-group-submit"> 
                        <button type="submit" className="vv-btn btn-add">Add</button>
                        <button type="submit" className="vv-btn btn-remove">Remove</button>
                  </div>
                </form>
            </div>
        </div>
      </div>
    );
  }
}
export default TaskForm;