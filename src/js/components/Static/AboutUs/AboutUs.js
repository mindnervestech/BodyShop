import React, { Component } from 'react';
import '../../../../styles/Footer/Footer.css';
import '../../../../styles/App.css';
import '../../../../styles/homePage/homePage.css';
import '../../../../styles/AboutUs/AboutUs.css';
import { Button } from 'reactstrap';
class AboutUs extends Component {	

  	render() {
	    return(
	    	<div className="aboutUs-main">
	    		<div className="aboutUs-container">
	    			<div className="aboutUs-image">
	    				<img src="https://assets.thebodyshop.com/medias/HEADER-01.jpg-1272x1272.jpg?context=content-images/h99/h36/29001677078558/HEADER_01.jpg-1272x1272.jpg"/>

	    				<div className="aboutUs-image-info">
	    					<div className="aboutUs-image-container">
	    						<h1 className="aboutUs-header-info">ABOUT US</h1>

	    						<h2 className="aboutUs-paragraph-info">
	    							'MY PASSIONATE BELIEF IS THAT BUSINESS CAN BE FUN, IT CAN BE CONDUCTED WITH LOVE AND A POWERFUL FORCE FOR GOOD.' – ANITA RODDICK
	    						</h2>
	    					</div>
	    				</div>
	    			</div>

	    			<div className="aboutUs-margin-top aboutUs-qa">
	    				<div className="aboutUs-margin-top row nopadding">
		    				<div className="col-md-6 nopadding">
	                        	<div className="aboutUs-qa-col-div">
	                        		<h2>OUR STORY</h2>
	                        		<p className="aboutUs-qa-col-paragraph">
	                        			Our story started in Brighton, England in 1976. It began with our founder, Anita Roddick, and her belief in something revolutionary: that business could be a force for good. Following her vision, we’ve been rule breaking, never faking and change making for over 40 years.
	                        		</p>

	                        		<div className="aboutUs-discover-more-btn">
	                        			<Button type="button" color="secondary">
											DISCOVER MORE
										</Button>
	                        		</div>
	                        	</div>
	                    	</div>
		    				<div className="col-md-6 nopadding">
		    					<img src="https://assets.thebodyshop.com/medias/28871658078238.jpg?context=images/hfb/hea/28871658078238.jpg"/>
	                    	</div>
		    			</div>

		    			<div className="row nopadding">
		    				<div className="col-md-6 nopadding">
	                        	<img src="https://assets.thebodyshop.com/medias/28871660371998.jpg?context=images/h8d/hb0/28871660371998.jpg"/>
	                    	</div>
		    				<div className="col-md-6 nopadding">
	                        	<div className="aboutUs-qa-col-div">
	                        		<h2>COMMUNITY TRADE</h2>
	                        		<p className="aboutUs-qa-col-paragraph">
	                        			In 1987, we launched Community Trade, pioneering fair trade in the beauty industry. Today, we have suppliers in over 20 countries around the world, sourcing the finest raw ingredients and traditional skills from around the planet – benefiting local communities in return.
	                        		</p>

	                        		<div className="aboutUs-discover-more-btn">
	                        			<Button type="button" color="secondary">
											DISCOVER MORE
										</Button>
	                        		</div>
	                        		
	                        	</div>
	                    	</div>
		    			</div>
		    			<hr/>
	    			</div>

	    			<div className="aboutUs-margin-top aboutUs-qa">
	    				<div className="aboutUs-margin-top row nopadding">
		    				<div className="col-md-6 nopadding">
	                        	<div className="aboutUs-qa-col-div">
	                        		<h2>FOREVER AGAINST ANIMAL TESTING</h2>
	                        		<p className="aboutUs-qa-col-paragraph">
	                        			We’ve campaigned for a cruelty-free beauty industry since 1989. First, we helped ban animal testing in the UK. Next, we took our fight to the EU. Now, we’re setting our sights on the UN, where we’re aiming to stamp out this cruel practice everywhere and forever.
	                        		</p>

	                        		<div className="aboutUs-discover-more-btn">
	                        			<Button type="button" color="secondary">
											DISCOVER MORE
										</Button>
	                        		</div>
	                        	</div>
	                    	</div>
		    				<div className="col-md-6 nopadding">
		    					<img src="https://assets.thebodyshop.com/medias/28871676035102.jpg?context=images/hee/hcf/28871676035102.jpg"/>
	                    	</div>
		    			</div>

		    			<div className="row nopadding">
		    				<div className="col-md-6 nopadding">
	                        	<img src="https://assets.thebodyshop.com/medias/28873182642206.jpg?context=images/h67/h9a/28873182642206.jpg"/>
	                    	</div>
		    				<div className="col-md-6 nopadding">
	                        	<div className="aboutUs-qa-col-div">
	                        		<h2>A NEW FORCE FOR GOOD IN BEAUTY</h2>
	                        		<p className="aboutUs-qa-col-paragraph">
	                        			In 2017, we found a new home with other like-minded souls at Natura and Aesop. We're now part of Natura&Co, a global cosmetics group committed to cruelty-free beauty and ethical business. Together, we're working hand in hand to make beauty a force for good.
	                        		</p>

	                        		<div className="aboutUs-discover-more-btn">
	                        			<Button type="button" color="secondary">
											DISCOVER MORE
										</Button>
	                        		</div>
	                        	</div>
	                    	</div>
		    			</div>
		    			<hr/>
	    			</div>

	    			<div className="row aboutUs-images-div">
	    				<div className="col aboutUs-image-div-col">
	    					<img className="aboutUs-image-width" src="https://assets.thebodyshop.com/medias/29000567226398.jpg?context=images/h44/hb3/29000567226398.jpg"/>

	    					<h3>OUR COMMITMENT</h3>
	    					<p>
	    						We aim to be the world’s most ethical and sustainable global business. Find out how.
	    					</p>
	    					<div className="aboutUs-discover-more-btn">
                    			<Button type="button" color="secondary">
									DISCOVER MORE
								</Button>
                    		</div>
	    				</div>
	    				<div className="col aboutUs-image-div-col">
	    					<img className="aboutUs-image-width" src="https://assets.thebodyshop.com/medias/28873435807774.jpg?context=images/h71/h6c/28873435807774.jpg"/>
	    					<h3>FIGHT FOR THE WILD</h3>
	    					<p>
	    						Help us build bridges in nature to protect endangered species and re-wild the world.
							</p>

							<div className="aboutUs-discover-more-btn">
                    			<Button type="button" color="secondary">
									DISCOVER MORE
								</Button>
                    		</div>
	    				</div>
	    				<div className="col aboutUs-image-div-col">
	    					<img className="aboutUs-image-height-width" src="https://assets.thebodyshop.com/medias/plastics-for-change-v2.jpg?context=content-images/h49/h5a/31087971696670/plastics-for-change-v2.jpg"/>
	    					<h3>PLASTICS FOR CHANGE</h3>
	    					<p>
	    						Help empower with plastic, fight for people & the planet.
	    					</p>

	    					<div className="aboutUs-discover-more-btn">
                    			<Button type="button" color="secondary">
									DISCOVER MORE
								</Button>
                    		</div>
	    				</div>
	    			</div>
	    			<hr/>
	    		</div>
	    	</div>
	    );
  	}

}
export default AboutUs;