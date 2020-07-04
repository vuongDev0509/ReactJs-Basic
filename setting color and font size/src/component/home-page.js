import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ColorSetting from './color-setting';
import FontSizeSetting from './font-size-setting';
import MetaSetting from './meta-setting';
class HomePage extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			color:'#74002d',
			fontSize: Number(12),
		};
		// this.onSetColor = this.onSetColor.bind(this);
	}
	onSetColor = (params) =>{
		// console.log(params);
		this.setState({
			color: params
		});
	}
	onSetFontSize =  (values) =>{
		
		if(this.state.fontSize + values >= 8 && this.state.fontSize  + values  <=38){
			this.setState({
				fontSize: this.state.fontSize + values
			});
		}else{
			console.log("no work");
		}
	}
	onSettingDefault = (values) =>{
		if(values){
			this.setState({
				color:'#74002d',
				fontSize: Number(12),
			});
		}
	}
	render(){
		return(
			<section className="bt-section bt-section-setting-color-and-font"> 
				<div className="container">
					<div className="bt-content-setting-color-and-font">
						<div className="row">
							<div className="bt-color-settings bt-column col-sm-6">
								<ColorSetting color={this.state.color} onReceiveColor = {this.onSetColor} />
							</div>
							<div className="bt-font-size-settings bt-column col-sm-6 "> 
								<FontSizeSetting onSetFontSize ={this.onSetFontSize} fontSize={this.state.fontSize}/> 
							</div>
							<div className="bt-meta-setting bt-column col-sm-12" > 
								<MetaSetting color={this.state.color}  fontSize={this.state.fontSize} onSettingDefault ={this.onSettingDefault}/> 
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
} 
export default HomePage;