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
      isDisplayForm: false,
      jobEdit: null, 
      status: -1,
      filter: {
        name: '',
        status: -1
      }
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
      if(this.state.isDisplayForm && this.state.jobEdit !== null){
        this.setState({
          isDisplayForm: true,
          jobEdit: null
        });
      }else{
        this.setState({
          isDisplayForm: !this.state.isDisplayForm,
          jobEdit: null
        });
      }
      
    }
  }
  onShowForm = () =>{
    this.setState({
        isDisplayForm: true
      });
  }
  onCloseForm = () =>{
    this.setState({
        isDisplayForm: false
      });
  }
  onSubmit = (data) =>{
    let jobs = this.state.jobs;
    console.log(jobs);
    if(data.id === ''){
      // add job
      data.id = this.generateDataId();
      jobs.push(data);
    }else{
      // edit job
       let index = this.findIndex(data.id);
       jobs[index] = data;
    }
    
    this.setState({
      jobs: jobs,
      jobEdit: null
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
    this.onCloseForm();
  }

  onEditJob = (id) =>{
    let jobs = this.state.jobs;
    let index = this.findIndex(id);
    let jobEdit = jobs[index];
    this.setState({
      jobEdit: jobEdit  
    });
    this.onShowForm();
  }

  // filter job by name and status
  onFilterAll = (name, status) =>{
    let jobs = JSON.parse(localStorage.getItem('jobs'));
   
    let newsJobs = jobs.filter((item) =>{
      
      if(name.trim() == "" &&  status !== -1){

        if(item.status == status){
          return item;
        } 

      }else if(name.trim() == "" &&  status == -1){

        return item = JSON.parse(localStorage.getItem('jobs'));
      
      }else if(name.trim !== "" && status == -1){
        
        if(item.name.toLowerCase().indexOf(name) !== -1 && status == status){
          return item;
        }

      }else if(name.trim !== "" && status !== -1){
        
        if(item.name.toLowerCase().indexOf(name) !== -1 && status == status){
          return item;
        }

      }else{
        return alert("Sorry, the filter cannot be used ^__^ ");
      }

    });

    this.setState({
      jobs: newsJobs,
      status: status
    });
  }
  render() {
    const {jobEdit, filter, status } = this.state;
    let jobs = this.state.jobs;
    let isDisplayForm = this.state.isDisplayForm;
    let elmDisplayForm = isDisplayForm === true ? <TaskForm jobEdit={jobEdit}  onToggleForm = {this.onToggleForm}  onSubmit={this.onSubmit} />  : "";
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
                          onEditJob = {this.onEditJob}
                          onFilterAll = {this.onFilterAll}
                          status = {status}
                /> 
              </div>
            </div>
          </div>
      </div>
    );
  }
}
export default Main;