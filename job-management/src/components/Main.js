import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskForm from './taskForm.js';
import ControlForm from './ControlForm.js';
import JobLists from './JobLists.js';
class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      jobs: [],
      isDisplayForm: false
    }
  }
  componentWillMount(){
    if(localStorage && localStorage.getItem('jobs')){
      var jobs = JSON.parse(localStorage.getItem('jobs'));
      this.setState({
       jobs: jobs
      });
    }
  }
  generateDataId = () =>{
    let a = "vv";
    return a + "-" + uuidv4();
  }
  onToggleForm = (values) =>{
    if(values){
      this.setState({
        isDisplayForm: !this.state.isDisplayForm
      });
    }
  }
  onSubmit = (data) =>{
    let jobs = this.state.jobs;
    data.id = this.generateDataId();
    jobs.push(data);
    this.setState({
      jobs: jobs
    });
    localStorage.setItem('jobs', JSON.stringify(jobs));
    // localStorage.clear();
  }
  onChangeStatus = (id) =>{
    let jobs = this.state.jobs;
    let index = this.findIndex(id);
    if (index !== -1){
      jobs[index].status = !jobs[index].status;
      this.setState({
        jobs: jobs
      });
      localStorage.setItem('jobs', JSON.stringify(jobs));
    }
  }
  findIndex = (id) =>{
    let jobs = this.state.jobs;
    var result = -1;
    jobs.forEach((job, index) =>{
      if(job.id === id){
        result = index;
      }
    });
    return result;
  }
  onDeleteJob = (id) =>{
    let jobs = this.state.jobs;
    let index = this.findIndex(id);
    if (index !== -1){
      jobs.splice(index, 1);
      this.setState({
        jobs: jobs
      });
      localStorage.setItem('jobs', JSON.stringify(jobs));
    }
    this.onToggleForm(true);
  }
  render() {
    let isDisplayForm = this.state.isDisplayForm;
    let elmDisplayForm = isDisplayForm === true ? <TaskForm  onToggleForm = {this.onToggleForm}  onSubmit={this.onSubmit} />  : "";
    return (
      <div className="vv-container-main-job-managements"> 
          <div className="container"> 
            <div className="vv-content-main-job-managements">                
                <div className="row"> 
                    {elmDisplayForm}
                    <ControlForm  isDisplayForm ={isDisplayForm} 
                                  onToggleForm = {this.onToggleForm} 
                />
                </div>
            </div>
            <div className="vv-container-list-job-managements"> 
              <div className="vv-grid-list-jobs-management"> 
                <JobLists jobs = {this.state.jobs}
                          onChangeStatus={this.onChangeStatus}
                          onDeleteJob = {this.onDeleteJob}
                /> 
              </div>
            </div>
          </div>
      </div>
    );
  }
}
export default Main;