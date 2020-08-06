import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskForm from './taskForm.js';
import ControlForm from './ControlForm.js';
import JobLists from './JobLists.js';
class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      jobs: []
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
  onGenerateData = () =>{
    var jobs = [
      {
        id: this.generateDataId(),
        name: "vda",
        user: "admin",
        pass: "111",
        status: true,
      },
      {
        id: this.generateDataId(),
        name: "vda2",
        user: "admin",
        pass: "222",
        status: false,
      },
    ];
    this.setState({
      jobs: jobs
    });
    localStorage.setItem('jobs', JSON.stringify(jobs));
    // console.log("aa");
    console.log(jobs);
  }

  generateDataId = () =>{
    let a = "vv";
    return a + "-" + uuidv4();
  }
  render() {
    // let jobs =  this.state.jobs;
    return (
      <div className="vv-container-main-job-managements"> 
          <div className="container"> 
            <div className="vv-content-main-job-managements"> 
                <button type="button" 
                        className="vv-btn vv-btn-control vv-btn-generate"
                        onClick = {this.onGenerateData}
                > 
                  <i className="fa fa-plus" aria-hidden="true"></i> Generate Data
                </button>
                <div className="row"> 
                    <TaskForm />
                    <ControlForm />
                </div>
            </div>
            <div className="vv-container-list-job-managements"> 
               <div className="vv-grid-list-jobs-management"> <JobLists jobs = {this.state.jobs}/> </div>
            </div>
          </div>
      </div>
    );
  }
}
export default Main;