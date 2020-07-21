import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './css/custom.css';
class Form extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			txtName: '',
			txtPassword: '',
			txtDescription: '', 
			sltGender: '0',
			rStatus: '0',
			chkLan: true
		};
	}
	onHandleChange = (event) =>{
		var target = event.target;
		console.log(target);
		var name = target.name;
		// console.log(name);
		// var value = target.value;

		var value = target.type === 'checkbox' ? target.checked : target.value;

		// console.log(value);
		this.setState({
			[name] : value
		});
	};
	onHandleSubmit = (event) =>{
		event.preventDefault();
		console.log(this.state);
	};
	render(){
		return (
		    <div className="vv-container-form"> 
		        <div className="vv-content-form">
		        	<label className="bt-title"> Form In React: </label>
		            <form onSubmit={this.onHandleSubmit}>  
		            	<div className="bt-group"> 
		            		<label className="item-title"> UserName: </label> 
		            		<input className="item-form" 
		            			type="text" 
		            			name="txtName"
		            			onChange ={this.onHandleChange}
		            			/>
		            	</div>
		            	<div className="bt-group"> 
		            		<label className="item-title"> Password: </label> 
		            		<input className="item-form" 
		            			type="password" 
		            			name="txtPassword"
		            			onChange ={this.onHandleChange}
		            			/>
		            	</div>

		            	<div className="bt-group"> 
		            		<label className="item-title"> Description: </label> 
		            		<textarea value={this.state.txtDescription} className="item-form" name="txtDescription" onChange ={this.onHandleChange}> </textarea>
		            	</div>

		            	<div className="bt-group"> 
		            		<label className="item-title"> Gender: </label> 
		            		<select className="item-form" onChange ={this.onHandleChange} name="sltGender" value={this.state.sltGender}>
							  <option value={1}>Male</option>
							  <option value={0}>Female</option>
							</select>
		            	</div>

		            	<div className="bt-group"> 
		            		<label className="item-title"> Status: </label> 
		            		<div className="bt-item-radio"> 
		            			<label className="item-title"> Active: </label> 
		            			<input className="item-form" 
		            			type="radio" 
		            			name="rStatus"
		            			value="1"
		            			onChange ={this.onHandleChange}
		            			checked = {this.state.rStatus === "1"}	
		            			/>
		            		</div>
		            		<div className="bt-item-radio">
		            			<label className="item-title"> Deactive: </label> 
		            			<input className="item-form" 
		            			type="radio" 
		            			name="rStatus"	
		            			value="0"
		            			onChange ={this.onHandleChange}
		            			checked = {this.state.rStatus === "0"}
		            			/>
		            		</div>
		            	</div>

		            	<div className="bt-group bt-group-checkbox"> 
		            		<label className="item-title"> Language:</label> 
		            		<div className="bt-content-groupp-checkbox"> 
		            			<label className="item-title"> VN </label> 
			            		<input className="item-form" 
			            			type="checkbox" 
			            			name="chkLan"
			            			value={true}
			            			onChange ={this.onHandleChange}
			            			/>

		            		</div>
		            		
		            	</div>

		            	<div className="bt-btn-group bt-group-raido"> 
		            		<button type="submit" className="bt-item-btn btn-btn-save"> Save </button>
		            		<button type="submit" className="bt-item-btn btn-btn-restart"> Restart </button>
		            	</div>
		            </form>
		        </div>
		    </div>
  		);
	}
  
}

export default Form;
