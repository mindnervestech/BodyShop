import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {Picture} from 'react-responsive-picture';
import '../../../../styles/StaticPages/CommunityFair.css';
import '../../../../styles/StaticPages/OurCommitment.css';


class CommunityFair extends Component
{
    render()
    {

        return(
        <div className="commit-main">
            <div className="page-desc-path" id="top-link-part">
            <Link to={`/login`} className="home-link">Home</Link> / Community Fair Trade In Beauty | Commitment | The Body Shop
            </div>
            <div >
                <Picture className="fullimage" 
                 sources = {[
                    { srcSet :"https://assets.thebodyshop.com/medias/high-res-hybris-hero-diy-2.jpg-1272x1272.jpg?context=content-images/he4/hee/30428315320350/high-res-hybris-hero-diy-2.jpg-1272x1272.jpg", 
                        media: "(min-width:641px)"
                    },
                    { srcSet :"https://assets.thebodyshop.com/medias/shea-butter-recipes-19-mob-2.jpg?context=content-images/h43/hd0/30428315516958/shea-butter-recipes-19-mob-2.jpg"
                    }
                ]} />
            </div>
            <div>
                <div className="text-over-banner">
                    <div className="banner-block-textbox">
                        <div className="banner-block-text heading">
                            COMMUNITY TRADE
                        </div>
                            <p className="block-text-2-small">
                                We launched Community Trade in 1987. It is our commitment to trading fairly with suppliers and in exchange we offer good trading practices and independence building prices.
                            </p>
                    </div>
                </div>
            </div>
            <div className="promo-container">  
                <div   className="text-promo-heading">
                    <strong>REDUCING OUR ENVIRONMENTAL FOOTPRINT</strong>
                </div>
                <div className="row nopadding2">
                    <div className="col-md-6  nopadding2">
                        <img className="img-dimensions" src="https://assets.thebodyshop.com/medias/30603980308510.jpg?context=images/hb2/h34/30603980308510.jpg" />
                    </div>
                    <div className="col-md-6 text-right-region banner-block-textbox map-button-container">
                            <p className="text-content-2-cf ">We’ve sustainably sourced our Community Trade shea butter from the Tungteiya Women’s Association in northern Ghana since 1994. 640 women from 11 villages handcraft 390 tons of shea butter for us every year using an 18-stage process passed from mother to daughter for generations. Each woman takes two days to expertly produce our shea in 25kg batches using traditional techniques to ensure the highest quality.</p>
                            <p className="text-content-2-cf">As well as paying a fair price, we pay a premium to help empower these women and help them to achieve an independent income, increased confidence and respect. This premium also helps fund community projects that positively impact the lives of 49,000 people across 11 villages every year. These community projects include building 7 schools that educate 1,200 students and enabling access for the community to safe water and health centres.</p>
                    </div>
                </div>
            </div>
            
            <div className="promo-container">  
                <div   className="text-promo-heading">
                    <strong>EXPLORE OUR SHEA RANGE</strong>
                </div>
                <div className="row nopadding2">
                    <div className="col-md-6 pic-right-region nopadding2">
                        <img className="img-dimensions" src="https://assets.thebodyshop.com/medias/Explore-our-Shea-rangev2.jpg?context=content-images/hd6/hca/30119304462366/Explore-our-Shea-rangev2.jpg" />
                    </div>
                    <div className="col-md-6 text-left-region banner-block-textbox map-button-container">
                            <p className="text-content-2-cf">Enriched with Community Trade shea butter handcrafted in Ghana, our head-to-toe Shea range intensely nourishes dry skin and hair. Our new, richly textured Shea Butter is 100% natural and can be applied to dry face, body, lips and hair or used to create your own DIY beauty recipes. You can also richly replenish dry, prone to damage hair with our new, 3-step Shea haircare routine.</p>
                            <button className="btn-secondary btn-width">SHOP NOW</button>
                    </div>
                </div>
            </div>

            <div className="promo-container">  
                <div   className="text-promo-heading">
                    <strong>THE WORLD IS OUR SOURCE OF BEAUTY</strong>
                </div>
                <div className="row nopadding2">
                    <div className="col-md-6  nopadding2">
                        <img className="img-dimensions" src="https://assets.thebodyshop.com/medias/30603980308510.jpg?context=images/hb2/h34/30603980308510.jpg" />
                    </div>
                    <div className="col-md-6 text-right-region banner-block-textbox map-button-container">
                            <p className="text-content-2-cf">We source some of the finest raw ingredients and hand-crafted accessories from the four corners of the globe. We harness the skills of small-scale farmers, traditional artisans and rural – cooperatives who are experts in their field. We add our expertise to create effective products that are made with love and care.</p>
                            <p className="text-content-2-cf">We pioneered fair trade in beauty and today we have 31 Community Trade suppliers in 23 countries around the world, benefiting 12,450 people. See where our ingredients come from here.</p>
                    </div>
                </div>
                <div className="text-align-center map-button-container">
                <button className="btn-secondary btn-width">VIEW INTERACTIVE MAP</button>
                </div>
            </div>

            <div className="text-on-hover-wrapper">
                <div className="row nopadding2">
                    <div className="col-md-3 image-with-text-transist nopadding2">
                        <img src ="https://assets.thebodyshop.com/medias/29558967631902.jpg?context=images/h0e/h51/29558967631902.jpg" />
                        <div className="transist-contentbox contentbox-alignment">
                            <div className="textbox-alignment">
                                <h2>1987</h2>
                                <h3>Community Trade</h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 image-with-text-transist nopadding2">
                        <img src ="https://assets.thebodyshop.com/medias/29558968090654.jpg?context=images/ha0/h5c/29558968090654.jpg" />
                        <div className="transist-contentbox contentbox-alignment">
                            <div className="textbox-alignment">
                                <h2>1989</h2>
                                <h3>Paper</h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 image-with-text-transist nopadding2">
                        <img src ="https://assets.thebodyshop.com/medias/29558976741406.jpg?context=images/he6/h6a/29558976741406.jpg" />
                        <div className="transist-contentbox contentbox-alignment">
                            <div className="textbox-alignment">
                                <h2>1993</h2>
                                <h3>Sesame Seed Oil</h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 image-with-text-transist nopadding2">
                        <img src ="https://assets.thebodyshop.com/medias/29558975004702.jpg?context=images/h64/h19/29558975004702.jpg" />
                        <div className="transist-contentbox contentbox-alignment">
                            <div className="textbox-alignment">
                                <h2>1998</h2>
                                <h3>Shea Butter</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row nopadding2">
                    <div className="col-md-3 image-with-text-transist nopadding2">
                        <img src ="https://assets.thebodyshop.com/medias/29558975660062.jpg?context=images/he4/h70/29558975660062.jpg" />
                        <div className="transist-contentbox contentbox-alignment">
                            <div className="textbox-alignment">
                                <h2>2007</h2>
                                <h3>Supply Chain Award</h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 image-with-text-transist nopadding2">
                        <img src ="https://assets.thebodyshop.com/medias/29558975856670.jpg?context=images/h0b/h76/29558975856670.jpg" />
                        <div className="transist-contentbox contentbox-alignment">
                            <div className="textbox-alignment">
                                <h2>2008</h2>
                                <h3>Alcohol</h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 image-with-text-transist nopadding2">
                        <img src ="https://assets.thebodyshop.com/medias/29558975922206.jpg?context=images/h72/h18/29558975922206.jpg" />
                        <div className="transist-contentbox contentbox-alignment">
                            <div className="textbox-alignment">
                                <h2>2009</h2>
                                <h3>Ecocert</h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 image-with-text-transist nopadding2">
                        <img src ="https://assets.thebodyshop.com/medias/29558975987742.jpg?context=images/h3c/hf8/29558975987742.jpg" />
                        <div className="transist-contentbox contentbox-alignment">
                            <div className="textbox-alignment">
                                <h2>2011</h2>
                                <h3>Global Shea Alliance</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row nopadding2">
                    <div className="col-md-3 image-with-text-transist nopadding2">
                        <img src ="https://assets.thebodyshop.com/medias/29558976806942.jpg?context=images/h76/hf7/29558976806942.jpg" />
                        <div className="transist-contentbox contentbox-alignment">
                            <div className="textbox-alignment">
                                <h2>2013</h2>
                                <h3>Supply Chain Award</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default CommunityFair;