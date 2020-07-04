import React from 'react';
import ReactDOM from 'react-dom';
class FontSizeSetting extends React.Component{
	setFontSize = (values) =>{
		this.props.onSetFontSize(values);
	}
	render(){
		return(
			<div className="bt-container-font-size-settings">
				<div className="bt-content-font-size-settings"> 
					<h2 className="bt-title"> Font Size Picker </h2>
					<div className="bt-grid-font-size"> 
						<button className="bt-btn btn-btn-increase" onClick = {() => this.setFontSize(Number(2))}> increase </button>
						<button className="bt-btn btn-btn-reduction" onClick = {() => this.setFontSize(Number(-2))}> reduction </button>
					</div>
				</div>
			</div>
		);
	}
} 
export default FontSizeSetting;