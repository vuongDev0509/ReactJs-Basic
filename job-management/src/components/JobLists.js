import React from 'react';
import JobItems from './JobItems.js';
class JobLists extends React.Component {
  render() {
    let itemJobs = this.props.jobs;
    console.log(itemJobs);
    let elmJob = itemJobs.map((job, index) =>{
        let result =  <JobItems key={index} 
                                id={index} 
                                name={job.name} 
                                user={job.user}
                                pass={job.pass}
                                status={job.status}
                                jobs={itemJobs} />;
        return result;
    });
    return (
      <div className="vv-content-list-jobs"> 
        <div className="row"> 
          <div className="column col-xl-12 col-md-12 col-lg-12 col-lg-12"> 
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th className="text-center">STT</th>
                  <th className="text-center">Name</th>
                  <th className="text-center">User</th>
                  <th className="text-center">Pass</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td> <input type="text" className="vv-input-search-table form-control" /> </td>
                  <td></td>
                  <td></td>
                  <td>
                    <select className="vv-select-status form-control">
                      <option value="-1">ALL</option>
                      <option value="0">Active</option>
                      <option value="1">Deactive</option>
                    </select>
                  </td>
                  <td></td>
                </tr>
                  {elmJob}
                </tbody>
            </table>
          </div>
        </div>
       </div>
    );
  }
}
export default JobLists;