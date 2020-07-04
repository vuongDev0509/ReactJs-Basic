import React from 'react';
import ReactDOM from 'react-dom';
class MetaSetting extends React.Component{
	showStyle = () =>{
		// console.log(this.props.color);
		const  contentStyle = {
			color: this.props.color,
			fontWeight: 700,
			borderColor: this.props.color,
			fontSize: this.props.fontSize
		}
		return contentStyle;
	};
	setDefault = () =>{
		this.props.onSettingDefault(true);
	}
	render(){
		return(
			<div className="bt-container-meta-settings">
				<button type="button" className="bt-btn btn-btn-restart" onClick = { this.setDefault}> Restart </button>	
				<div className="bt-content-meta-settings"> 
					<div className="bt-item-meta"> color {this.props.color} - font - size: {this.props.fontSize}px </div>
					<div className="bt-text-cotent" style={this.showStyle()}> conent settings color and fonts size </div>
				</div>
			</div>
		);
	}
} 
export default MetaSetting;