import React from 'react';
import Main from './components/Main.js';
import './assets/css/grid.css';
import './assets/css/custom.css';
function Job_Management() {
  return (
    <main id="main" className="site-main" role="main">
    	<section className="section section-container-job"> 
    		<div className="container"> 
    			<h1 className="title main-color"> Job Management  </h1>
    		</div>
    		<Main />
    	</section>
    </main>
  );
}
export default Job_Management;
