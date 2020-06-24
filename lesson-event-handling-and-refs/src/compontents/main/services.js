import React from 'react';
class Services extends React.Component {
  render() {
  	let services = [
  		{
  			id: '1',
  			name: 'Patient or Families',
  			excerpt: 'We are passionate about you or your loved one receiving as many days of care as possible.',
  			button: 'Read More',
  			image: '../../image/image-slider-01.jpg',
  			link: '#!'
  		},
  		{
  			id: '2',
  			name: 'Providers',
  			excerpt: 'Whether you run an inpatient facility, outpatient program or a private practice we are the most dedicated and comprehensive solution you will ever find',
  			button: 'Read More',
  			link: '#!'
  		},
  		{
  			id: '3',
  			name: 'Clinical Leadership',
  			excerpt: 'Whether you manage a team of clinicians or run a UR Department we can help bridge your training gaps and ensure your clinician success',
  			button: 'Read More',
  			link: '#!'
  		}
  	];
  	let elementsServices = services.map((services, 	index) =>{
  		return <div className="bt-item-services" key={services.id}> 
  			<div className="bt-thumbnail-service"> </div>
  			<div className="bt-content-service"> 
  				<h2 className="bt-title"> {services.name} </h2>
				<div className="bt-excerpt"> {services.excerpt} </div>
				<div className="bt-btn"> <a > {services.button} </a></div>
  			</div>
		</div>
  	});
    return(
      <section className="bt-section bt-ss-services">
      	<div className="container"> 
      		<div classs="row"> 
      			<div className="bt-container-services-listing"> 
      				{elementsServices}
      			</div>
      		</div>
      	</div>
      	
      </section>
    );
  }
}
export default Services;