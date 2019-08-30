import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import '../../../../styles/Header/Header.css';

class Header extends Component {
  render() {
    return (
        <div className="main">
            <div className="main-inner">
                <div className="sticky-header">
                    <header className="wrapper-global-header-desktop"></header>
                    <div className="sticky-header-row">
                        <div className="sticky-header-col sticky-header-col-one">
                        <ul>
                            <li className="content">
                                <a href="/en-gb/store-finder" aria-label="Store finder">
                                    <span className="icons store-finder"></span><span className="text-store-finder">Stores</span> 
                                </a>
                            </li>
                            <li className="content">
                                <a href="">
                                    <span className="icons tbs-at-home"></span>
                                    <span className="text-tbs-at-home">The Body Shop At Home ™</span>
                                </a>
                            </li>
                            <li className="content last customerCareLinkComponent">
                                <a id="customerCareIcon" href="">
                                    <span className="icons customer-care"></span><span className="text-customer-care">Customer Care</span>
                                </a>
                            </li>
                        </ul>
                        </div>
                        <div className="sticky-header-col sticky-header-col-two">
                            <a className="logo">
                                <img title="The Body Shop" src="https://assets.thebodyshop.com/medias/tbs-logo.svg?context=content-images/h4d/h7c/8796377514014/tbs-logo.svg" alt="The Body Shop" className="loading"/>
                            </a>    
                        </div>
                        <div className="sticky-header-col sticky-header-col-three">

                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    );
  }
}

export default withRouter(Header);
