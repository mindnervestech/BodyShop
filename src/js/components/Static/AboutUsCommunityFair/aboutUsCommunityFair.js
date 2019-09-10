import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {Picture} from 'react-responsive-picture';
import '../../../../styles/StaticPages/CommunityFair.css';
import '../../../../styles/StaticPages/OurCommitment.css';
import ReactModal from 'react-modal';


class CommunityFair extends Component
{    constructor () {
        super();
        this.state = {
        showModal1: false, showModal2: false, showModal3: false, showModal4: false, showModal5: false, 
        showModal6: false, showModal7: false, showModal8: false, showModal9: false
        };
        this.handleOpenModal1 = this.handleOpenModal1.bind(this);
        this.handleCloseModal1 = this.handleCloseModal1.bind(this);
        
        this.handleOpenModal2 = this.handleOpenModal2.bind(this);
        this.handleCloseModal2 = this.handleCloseModal2.bind(this);
        
        this.handleOpenModal3 = this.handleOpenModal3.bind(this);
        this.handleCloseModal3 = this.handleCloseModal3.bind(this);
        
        this.handleOpenModal4 = this.handleOpenModal4.bind(this);
        this.handleCloseModal4 = this.handleCloseModal4.bind(this);
        
        this.handleOpenModal5 = this.handleOpenModal5.bind(this);
        this.handleCloseModal5 = this.handleCloseModal5.bind(this);
        
        this.handleOpenModal6 = this.handleOpenModal6.bind(this);
        this.handleCloseModal6 = this.handleCloseModal6.bind(this);
        
        this.handleOpenModal7 = this.handleOpenModal7.bind(this);
        this.handleCloseModal7 = this.handleCloseModal7.bind(this);
        
        this.handleOpenModal8 = this.handleOpenModal8.bind(this);
        this.handleCloseModal8 = this.handleCloseModal8.bind(this);
        
        this.handleOpenModal9 = this.handleOpenModal9.bind(this);
        this.handleCloseModal9 = this.handleCloseModal9.bind(this);
    }
   
    handleOpenModal1 () { this.setState({ showModal1: true });}
    handleCloseModal1 () { this.setState({ showModal1: false });}

    handleOpenModal2 () { this.setState({ showModal2: true });}
    handleCloseModal2 () { this.setState({ showModal2: false });}

    handleOpenModal3 () { this.setState({ showModal3: true });}
    handleCloseModal3 () { this.setState({ showModal3: false });}

    handleOpenModal4 () { this.setState({ showModal4: true });}
    handleCloseModal4 () { this.setState({ showModal4: false });}

    handleOpenModal5 () { this.setState({ showModal5: true });}
    handleCloseModal5 () { this.setState({ showModal5: false });}

    handleOpenModal6 () { this.setState({ showModal6: true });}
    handleCloseModal6 () { this.setState({ showModal6: false });}

    handleOpenModal7 () { this.setState({ showModal7: true });}
    handleCloseModal7 () { this.setState({ showModal7: false });}

    handleOpenModal8 () { this.setState({ showModal8: true });}
    handleCloseModal8 () { this.setState({ showModal8: false });}

    handleOpenModal9 () { this.setState({ showModal9: true });}
    handleCloseModal9 () { this.setState({ showModal9: false });}


    render()
    { 
        return(
        <div className="commit-main">
            <div className="page-desc-path" id="top-link-part">
            <Link to={`/home`} className="home-link">Home</Link> / Community Fair Trade In Beauty | Commitment | The Body Shop
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
                    <div className="col-md-3 image-with-text-transist nopadding2" onClick={this.handleOpenModal1} >
                        <img src="https://assets.thebodyshop.com/medias/29558967631902.jpg?context=images/h0e/h51/29558967631902.jpg" />                
                        <div className="transist-contentbox contentbox-alignment">
                            <div className="textbox-alignment">
                                <h2>1987</h2>
                                <h3>Community Trade</h3>
                            </div>
                        </div>
                    </div>
                    <ReactModal id="Community_Trade" isOpen={this.state.showModal1} onRequestClose={this.handleCloseModal1} className="modal-container" >
                            <div className="modal-container-box">
                                <div className="close-button-modal-container">
                                    <button className="close-button-modal" onClick={this.handleCloseModal1}><img src="https://assets.thebodyshop.com/_ui/responsive/theme-tbs/assets/svg/icon-close-white.svg"  /></button>
                                </div>
                                <div>
                                    <div className="modal-image-container">
                                        <img className="modal-image" src="https://assets.thebodyshop.com/medias/29558967631902.jpg?context=images/h0e/h51/29558967631902.jpg" />                
                                    </div>
                                    <div className="modal-text-container">
                                        <h2>1987</h2>
                                        <p>Community Trade</p>
                                        <br />
                                        <p>Our pioneering Community Fair Tradeprogramme started when The Body Shopstarted sourcing ‘footsie’ massage rollersfrom an education and employment charityin India, which became a best-selling line. </p>
                                    </div>
                                </div>
                            </div>
                    </ReactModal>

                    <div className="col-md-3 image-with-text-transist nopadding2" onClick={this.handleOpenModal2}>
                        <img src ="https://assets.thebodyshop.com/medias/29558968090654.jpg?context=images/ha0/h5c/29558968090654.jpg" />
                        <div className="transist-contentbox contentbox-alignment">
                            <div className="textbox-alignment">
                                <h2>1989</h2>
                                <h3>Paper</h3>
                            </div>
                        </div>
                    </div>
                    
                    <ReactModal  isOpen={this.state.showModal2} onRequestClose={this.handleCloseModal2} className="modal-container" >
                            <div className="modal-container-box">
                                <div className="close-button-modal-container">
                                    <button className="close-button-modal" onClick={this.handleCloseModal2}><img src="https://assets.thebodyshop.com/_ui/responsive/theme-tbs/assets/svg/icon-close-white.svg"  /></button>
                                </div>
                                <div>
                                    <div className="modal-image-container">
                                        <img className="modal-image" src="https://assets.thebodyshop.com/medias/29558968090654.jpg?context=images/ha0/h5c/29558968090654.jpg" />                
                                    </div>
                                    <div className="modal-text-container">
                                        <h2>1989</h2>
                                        <p>Paper</p>
                                        <br />
                                        <p>We bought Nepalese sustainable paper gifts made from plants clogging local waterways, leading to new employment for people and seed funding for community projects</p>
                                    </div>
                                </div>
                            </div>
                    </ReactModal>

                    <div className="col-md-3 image-with-text-transist nopadding2" onClick={this.handleOpenModal3}>
                        <img src ="https://assets.thebodyshop.com/medias/29558976741406.jpg?context=images/he6/h6a/29558976741406.jpg" />
                        <div className="transist-contentbox contentbox-alignment">
                            <div className="textbox-alignment">
                                <h2>1993</h2>
                                <h3>Sesame Seed Oil</h3>
                            </div>
                        </div>
                    </div>
                    <ReactModal  isOpen={this.state.showModal3} onRequestClose={this.handleCloseModal3} className="modal-container" >
                            <div className="modal-container-box">
                                <div className="close-button-modal-container">
                                    <button className="close-button-modal" onClick={this.handleCloseModal3}><img src="https://assets.thebodyshop.com/_ui/responsive/theme-tbs/assets/svg/icon-close-white.svg"  /></button>
                                </div>
                                <div>
                                    <div className="modal-image-container">
                                        <img className="modal-image" src="https://assets.thebodyshop.com/medias/29558976741406.jpg?context=images/he6/h6a/29558976741406.jpg"/>                
                                    </div>
                                    <div className="modal-text-container">
                                        <h2>1993</h2>
                                        <p>Sesame Seed Oil</p>
                                        <br />
                                        <p>We sourced our first Community Fair Trade ingredient – sesame seed oil</p>
                                    </div>
                                </div>
                            </div>
                    </ReactModal>

                    <div className="col-md-3 image-with-text-transist nopadding2"onClick={this.handleOpenModal4}>
                        <img src ="https://assets.thebodyshop.com/medias/29558975004702.jpg?context=images/h64/h19/29558975004702.jpg" />
                        <div className="transist-contentbox contentbox-alignment">
                            <div className="textbox-alignment">
                                <h2>1998</h2>
                                <h3>Shea Butter</h3>
                            </div>
                        </div>
                    </div>
                    <ReactModal  isOpen={this.state.showModal4} onRequestClose={this.handleCloseModal4} className="modal-container" >
                            <div className="modal-container-box">
                                <div className="close-button-modal-container">
                                    <button className="close-button-modal" onClick={this.handleCloseModal4}><img src="https://assets.thebodyshop.com/_ui/responsive/theme-tbs/assets/svg/icon-close-white.svg"  /></button>
                                </div>
                                <div>
                                    <div className="modal-image-container">
                                        <img className="modal-image" src="https://assets.thebodyshop.com/medias/29558975004702.jpg?context=images/h64/h19/29558975004702.jpg" />                
                                    </div>
                                    <div className="modal-text-container">
                                        <h2>1998</h2>
                                        <p>Shea Butter</p>
                                        <br />
                                        <p>Anita discovered shea butter from Tamale, northern Ghana</p>
                                    </div>
                                </div>
                            </div>
                    </ReactModal>
                </div> 

                <div className="row nopadding2">
                    <div className="col-md-3 image-with-text-transist nopadding2" onClick={this.handleOpenModal5}>
                        <img src ="https://assets.thebodyshop.com/medias/29558975660062.jpg?context=images/he4/h70/29558975660062.jpg" />
                        <div className="transist-contentbox contentbox-alignment">
                            <div className="textbox-alignment">
                                <h2>2007</h2>
                                <h3>Supply Chain Award</h3>
                            </div>
                        </div>
                    </div>
                    <ReactModal  isOpen={this.state.showModal5} onRequestClose={this.handleCloseModal5} className="modal-container" >
                            <div className="modal-container-box">
                                <div className="close-button-modal-container">
                                    <button className="close-button-modal" onClick={this.handleCloseModal5}><img src="https://assets.thebodyshop.com/_ui/responsive/theme-tbs/assets/svg/icon-close-white.svg"  /></button>
                                </div>
                                <div>
                                    <div className="modal-image-container">
                                        <img className="modal-image" src="https://assets.thebodyshop.com/medias/29558975660062.jpg?context=images/he4/h70/29558975660062.jpg" />                
                                    </div>
                                    <div className="modal-text-container">
                                        <h2>2007</h2>
                                        <p>Supply Chain Award </p>
                                        <br />
                                        <p>We were awarded ‘The Big Tick’ Business In The Community Supply Chain Award</p>
                                    </div>
                                </div>
                            </div>
                    </ReactModal>

                    <div className="col-md-3 image-with-text-transist nopadding2" onClick={this.handleOpenModal6}>
                        <img src ="https://assets.thebodyshop.com/medias/29558975856670.jpg?context=images/h0b/h76/29558975856670.jpg" />
                        <div className="transist-contentbox contentbox-alignment">
                            <div className="textbox-alignment">
                                <h2>2008</h2>
                                <h3>Alcohol</h3>
                            </div>
                        </div>
                    </div>
                    <ReactModal  isOpen={this.state.showModal6} onRequestClose={this.handleCloseModal6} className="modal-container" >
                            <div className="modal-container-box">
                                <div className="close-button-modal-container">
                                    <button className="close-button-modal" onClick={this.handleCloseModal6}><img src="https://assets.thebodyshop.com/_ui/responsive/theme-tbs/assets/svg/icon-close-white.svg"  /></button>
                                </div>
                                <div>
                                    <div className="modal-image-container">
                                        <img className="modal-image" src="https://assets.thebodyshop.com/medias/29558975856670.jpg?context=images/h0b/h76/29558975856670.jpg" />                
                                    </div>
                                    <div className="modal-text-container">
                                        <h2>2008</h2>
                                        <p>Alcohol</p>
                                        <br />
                                        <p>We were the first to use fair trade organic alcohol in cosmetics</p>
                                    </div>
                                </div>
                            </div>
                    </ReactModal>

                    <div className="col-md-3 image-with-text-transist nopadding2" onClick={this.handleOpenModal7}>
                        <img src ="https://assets.thebodyshop.com/medias/29558975922206.jpg?context=images/h72/h18/29558975922206.jpg" />
                        <div className="transist-contentbox contentbox-alignment">
                            <div className="textbox-alignment">
                                <h2>2009</h2>
                                <h3>Ecocert</h3>
                            </div>
                        </div>
                    </div>
                    <ReactModal  isOpen={this.state.showModal7} onRequestClose={this.handleCloseModal7} className="modal-container" >
                            <div className="modal-container-box">
                                <div className="close-button-modal-container">
                                    <button className="close-button-modal" onClick={this.handleCloseModal7}><img src="https://assets.thebodyshop.com/_ui/responsive/theme-tbs/assets/svg/icon-close-white.svg"  /></button>
                                </div>
                                <div>
                                    <div className="modal-image-container">
                                        <img className="modal-image" src="https://assets.thebodyshop.com/medias/29558975922206.jpg?context=images/h72/h18/29558975922206.jpg" />                
                                    </div>
                                    <div className="modal-text-container">
                                        <h2>2009</h2>
                                        <p>Ecocert</p>
                                        <br />
                                        <p>Our Community Trade programme has been verified by third party organisations since 2009. Since 2017 our programme has been verified by Ecocert.</p>
                                    </div>
                                </div>
                            </div>
                    </ReactModal>

                    <div className="col-md-3 image-with-text-transist nopadding2" onClick={this.handleOpenModal8}>
                        <img src ="https://assets.thebodyshop.com/medias/29558975987742.jpg?context=images/h3c/hf8/29558975987742.jpg" />
                        <div className="transist-contentbox contentbox-alignment">
                            <div className="textbox-alignment">
                                <h2>2011</h2>
                                <h3>Global Shea Alliance</h3>
                            </div>
                        </div>
                    </div>
                    <ReactModal  isOpen={this.state.showModal8} onRequestClose={this.handleCloseModal8} className="modal-container" >
                            <div className="modal-container-box">
                                <div className="close-button-modal-container">
                                    <button className="close-button-modal" onClick={this.handleCloseModal8}><img src="https://assets.thebodyshop.com/_ui/responsive/theme-tbs/assets/svg/icon-close-white.svg"  /></button>
                                </div>
                                <div>
                                    <div className="modal-image-container">
                                        <img className="modal-image" src="https://assets.thebodyshop.com/medias/29558975987742.jpg?context=images/h3c/hf8/29558975987742.jpg" />                
                                    </div>
                                    <div className="modal-text-container">
                                        <h2>2011</h2>
                                        <p>Global Shea Alliance</p>
                                        <br />
                                        <p>We helped establish the Global Shea Alliance, bringing industry members together to improve benefits for producers and increase the number of women involved in the trade</p>
                                    </div>
                                </div>
                            </div>
                    </ReactModal>
                </div>
                
                <div className="row nopadding2">
                    <div className="col-md-3 image-with-text-transist nopadding2" onClick={this.handleOpenModal9}>
                        <img src ="https://assets.thebodyshop.com/medias/29558976806942.jpg?context=images/h76/hf7/29558976806942.jpg" />
                        <div className="transist-contentbox contentbox-alignment">
                            <div className="textbox-alignment">
                                <h2>2013</h2>
                                <h3>Supply Chain Award</h3>
                            </div>
                        </div>
                    </div>
                    <ReactModal  isOpen={this.state.showModal9} onRequestClose={this.handleCloseModal9} className="modal-container" >
                            <div className="modal-container-box">
                                <div className="close-button-modal-container">
                                    <button className="close-button-modal" onClick={this.handleCloseModal9}><img src="https://assets.thebodyshop.com/_ui/responsive/theme-tbs/assets/svg/icon-close-white.svg"  /></button>
                                </div>
                                <div>
                                    <div className="modal-image-container">
                                        <img className="modal-image" src="https://assets.thebodyshop.com/medias/29558976806942.jpg?context=images/h76/hf7/29558976806942.jpg" />                
                                    </div>
                                    <div className="modal-text-container">
                                        <h2>2013</h2>
                                        <p>Supply Chain Award</p>
                                        <br />
                                        <p>BITC named The Body Shop International Responsible Business 2013, based on our Community Fair Trade programme</p>
                                    </div>
                                </div>
                            </div>
                    </ReactModal>

                </div>
            </div>
        </div>
        )
    }
}

export default CommunityFair;