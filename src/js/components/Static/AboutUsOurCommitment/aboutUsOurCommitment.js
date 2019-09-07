import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../../../../styles/AboutUsOurCommitment/OurCommitment.css';

class OurCommitment extends Component
{
    render()
    {

        return(
        <div>
            <div className="commit-main">
                <div className="header-block">
                    <div className="heading">OUR COMMITMENT</div>
                    <div className="heading-two">“THE BUSINESS OF BUSINESS SHOULD NOT BE ABOUT MONEY. IT SHOULD BE ABOUT RESPONSIBILITY. IT SHOULD BE ABOUT PUBLIC GOOD, NOT PRIVATE GREED.” – ANITA RODDICK</div>
                    <br />
                </div>   
                 
                <div className="heading-text">
                        <p>
                            We aim to be the world’s most ethical and sustainable global business. Our Enrich Not Exploit™ Commitment includes 14 targets for The Body Shop to achieve by 2020. The targets are the clearest manifestation of who we are and what we stand for as a business.
                        </p><br />
                        <strong><b>OUR COMMITMENT TO… ENRICH NOT EXPLOIT™</b></strong>
                        <br /><br />
                        <p>
                        Our story started with Anita Roddick's belief in something revolutionary; that business could be a force for good. We've always done things differently, broken the mould, been bold, been brave. Today, our commitment is stronger than ever; to Enrich Not Exploit™. It’s in our hands.
                        </p>
                </div>

                <div className="video-container">
                    <img src="https://assets.thebodyshop.com/medias/28903225753630.jpg?context=images/h6f/hce/28903225753630.jpg"  className="fullimage"/>                    
                   
                    <div className="play-icon-positioner row nopadding2">
                        <div className="col-md-4 nopadding2" />
                        <a href="https://youtu.be/tJi9Klh5YTs" className="col-md-3 nopadding2">
                            <div className="play-button-icon "></div>
                        </a>
                        <div className="col-md-4 nopadding2 " />      
                    </div>
                </div>

                <div className="promo-container">   
                    <div className="row nopadding2">
                        <div className="col-md-6 pic-right-region  nopadding2">
                            <img className="img-dimensions" src="https://assets.thebodyshop.com/medias/28903436877854.jpg?context=images/h33/h15/28903436877854.jpg" />
                        </div>
                        <div className="col-md-6 text-left-region nopadding2">
                            <div>
                                <strong  className="text-content-1">OUR COMMITMENT TO… ENRICH OUR PEOPLE</strong>
                                <p className="text-content-2">We celebrate the diversity of people and reject a stereotype of beauty. Paying fair prices to our community trade partners is central to everything we do. We campaign for what’s right. We help our employees grow as people. </p>
                                <button className="btn-secondary btn-width">SEE THE TARGETS</button>
                            </div>
                        </div>
                    </div>

                    <div className="row nopadding2">
                        <div className="col-md-6 nopadding2">
                            <img className="img-dimensions" src="https://assets.thebodyshop.com/medias/28903606157342.jpg?context=images/ha1/h20/28903606157342.jpg"/>
                        </div>
                        <div className="col-md-6 text-right-region nopadding2">
                            <div>
                                <strong  className="text-content-1">OUR COMMITMENT TO… ENRICH OUR PRODUCTS</strong>
                                <p className="text-content-2">Our products nourish, enrich and uplift but never make false promises and are never tested on animals. Our products are inspired by the diversity of nature and customs of people around the world. We are experts in caring for all different skin types and take pride in knowing how to make them feel so good. </p>
                                <button className="btn-secondary btn-width">SEE THE TARGETS</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="promo-container">   
                    <div className="row nopadding2">
                        <div className="col-md-6 pic-right-region  nopadding2">
                            <img className="img-dimensions" src="https://assets.thebodyshop.com/medias/28903611858974.jpg?context=images/hda/hce/28903611858974.jpg" />
                        </div>
                        <div className="col-md-6 text-left-region nopadding2">
                            <div>
                                <strong  className="text-content-1">OUR COMMITMENT TO… ENRICH OUR PLANET</strong>
                                <p className="text-content-2">The world is our source of beauty, but it’s facing devastation. We actively help enrich the biodiversity where we grow our ingredients. We act and campaign to enrich and support threatened areas of outstanding natural value to the planet.</p>
                                <button className="btn-secondary btn-width">SEE THE TARGETS</button>
                            </div>
                        </div>
                    </div>

                    <div className="row nopadding2">
                        <div className="col-md-6 nopadding2">
                            <img className="img-dimensions" src="https://assets.thebodyshop.com/medias/28903619592222.jpg?context=images/hde/hce/28903619592222.jpg"/>
                        </div>
                        <div className="col-md-6 text-right-region nopadding2">
                            <div>
                                <strong  className="text-content-1">THE ENRICH NOT EXPLOIT™ 2018 REPORT</strong>
                                <p className="text-content-2">We publish annual Commitment reports to ensure we’re transparent about our business practices and progress towards our targets. Read our full 2018 report here and find out how we’re doing. </p>
                                <button className="btn-secondary btn-width">DISCOVER MORE</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="promo-container">   
                    <div className="row nopadding2">
                        <div className="col-md-6 pic-right-region  nopadding2">
                            <img className="img-dimensions" src="https://assets.thebodyshop.com/medias/28903623720990.jpg?context=images/h0d/ha8/28903623720990.jpg" />
                        </div>
                        <div className="col-md-6 text-left-region nopadding2">
                            <div>
                                <strong  className="text-content-1">REDUCING OUR ENVIRONMENTAL FOOTPRINT</strong>
                                <p className="text-content-2">We’re working towards being a truly sustainable business, and that means reviewing our products for biodegradability and water footprint, and sourcing ingredients from ‘green chemistry’ and renewable nature origin.</p>
                                <button className="btn-secondary btn-width">DISCOVER MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default OurCommitment;