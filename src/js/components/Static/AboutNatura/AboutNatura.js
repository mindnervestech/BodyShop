import React, { Component } from 'react';
import '../../../../styles/Footer/Footer.css';
import '../../../../styles/App.css';
import '../../../../styles/homePage/homePage.css';
import '../../../../styles/AboutNatura/AboutNatura.css';

class AboutNatura extends Component {	

  	render() {
	    return(
	    	<div className="about-natura-main">
	    		<div className="about-natura-container">
	    			<div className="natura-image">
	    				<img src="https://assets.thebodyshop.com/medias/natura-header.jpg-1272x1272.jpg?context=content-images/h60/h6a/16939036016670/natura-header.jpg-1272x1272.jpg"/>

	    				<div className="natura-image-info">
	    					<div className="natura-image-container">
	    						<h1 className="natura-header-info">NATURA &CO</h1>

	    						<p className="natura-paragraph-info">
	    							Natura &Co represents the three pioneering companies within the Natura group, with a shared purpose and a common commitment to sustainable and ethical business practices.
	    						</p>
	    					</div>
	    				</div>
	    			</div>

	    			<div className="natura-facts-margin">
	    				<center>
	    					<p>We believe that beauty can be a force for good.</p>
	    					<p>That it can be a force for people, a force for change.</p>
	    					<p>It’s in our nature to care.</p>
	    					<p>We’re committed to making a difference to the planet and to people.</p>
	    					<p>By sustainably sourcing our ingredients,</p>
	    					<p>Promoting fair trade with our suppliers,</p>
	    					<p>Always being against animal testing,</p>
	    					<p>And championing ethical beauty.</p>
	    					<p>And championing ethical beauty.</p>
	    				</center>	    		
	    			</div>
	    		</div>
	    		
	    		<hr/>

	    		<div className="row aboutNatura-images-div">
    				<div className="col aboutNatura-image-div-col">
    					<img className="aboutNatura-image-width" src="https://assets.thebodyshop.com/medias/16921144492062.jpg?context=images/he4/ha2/16921144492062.jpg"/>
    				</div>
    				<div className="col aboutNatura-image-div-col">
    					<img className="aboutNatura-image-width" src="https://assets.thebodyshop.com/medias/16921144885278.jpg?context=images/h9a/h63/16921144885278.jpg"/>
    				</div>
    				<div className="col aboutNatura-image-div-col">
    					<img className="aboutNatura-image-width" src="https://assets.thebodyshop.com/medias/16921144819742.jpg?context=images/h02/h73/16921144819742.jpg"/>
    				</div>
	    		</div>
	    		<hr/>
	    	</div>
	    );
  	}

}
export default AboutNatura;