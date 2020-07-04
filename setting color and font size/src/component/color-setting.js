import React from 'react';
import ReactDOM from 'react-dom';
class ColorSetting extends React.Component{
	showColor(color){
		// console.log(this.props.color);
		const  spanStyle = {
			backgroundColor: color
		}
		return spanStyle;
	};
	constructor(porps){
		super(porps);
		this.state = {
			colorsPicker :['#74002d','#1c3c6b', '#ed6923', '#444'],
		};
	};
	setActiveColor = (color) =>{
		this.props.onReceiveColor(color);
		// console.log(color);
		
	}
	render(){
		 var colors = this.state.colorsPicker.map((color, index) =>{
		 	return <span key={index} style = {this.showColor(color)} 
		 				className={this.props.color === color? 'active' : ''} 
		 				onClick = {() => this.setActiveColor(color)} > 
		 		</span>
		 });
		return(
			<div className="bt-container-color-settings"> 
				<div className="bt-content-color-setting"> 
					<h2 className="bt-title"> Color Picker </h2>
					<div className="bt-grid-color"> {colors} </div>
				</div>
			 </div>
		);
	}
} 
export default ColorSetting;