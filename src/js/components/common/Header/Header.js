import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router-dom'
import '../../../../styles/Header/Header.css';
import Input from '../../common/InputBox/Input.js';

class Header extends Component {
  render() {
    return (
        <div className="main">
            <div className="main-inner">
                <div className="sticky-header">
                    <header className="wrapper-global-header-desktop"></header>
                    <div className="sticky-header-row">
                        <div className="sticky-header-col sticky-header-col-one">
                        <ul className="ulStyle">
                            <li class="content">
                                <a aria-label="Store finder">
                                    <span class="icons store-finder"></span><span class="text-store-finder"><FormattedMessage id="header.stores" /></span> 
                                </a>
                            </li>
                            <li class="content">
                                <a>
                                    <span class="icons tbs-at-home"></span>
                                    <span class="text-store-finder"><FormattedMessage id="header.theBodyShopAtHome" /></span>
                                </a>
                            </li>
                            <li class="content last customerCareLinkComponent">
                                <a id="customerCareIcon">
                                    <span class="icons customer-care"></span><span class="text-store-finder"><FormattedMessage id="header.customerCare" /></span>
                                </a>
                            </li>
                        </ul>
                        </div>
                        <div className="sticky-header-col sticky-header-col-two">
                            <a className="logo">
                                <img title="The Body Shop" src="https://assets.thebodyshop.com/medias/tbs-logo.svg?context=content-images/h4d/h7c/8796377514014/tbs-logo.svg" alt="The Body Shop" class="loading"/>
                            </a>    
                        </div>
                        <div className="sticky-header-col sticky-header-col-three">
                            <ul className="ulStyle">
                                <li className="content headerUserGreeting"><FormattedMessage id="header.hiThere" /> xyzqwertyyuu</li>
                                <li className="content">
                                    <a>
                                        <span className="icons my-account"></span>
                                    </a>
                                </li>
                                <li className="content">
                                    <a>
                                        <span className="icons wish-list"></span>
                                    </a>
                                </li>
                                <li className="content last">
                                    <a>
                                        <span className="icons mini-basket"></span>
                                        <span className="basket-icon-circle">1</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="main-navigation-desktop">
                        <div className="dynamic-area">
                            <div className="navigation-container">
                                <nav className="navigation-bar">
                                    <ul className="main-nav ulStyle">
                                        <li className="section" style={{paddingLeft:0}}>
                                            <a className="menuitem">TRENDING</a>
                                        </li>
                                        <li className="section">
                                            <a className="menuitem">FACE</a>
                                        </li>
                                        <li className="section">
                                            <a className="menuitem">BODY</a>
                                        </li>
                                        <li className="section">
                                            <a className="menuitem">HAIR</a>
                                        </li>
                                        <li className="section">
                                            <a className="menuitem">MAKE UP</a>
                                        </li>
                                        <li className="section">
                                            <a className="menuitem">FRAGRANCE</a>
                                        </li>
                                        <li className="section">
                                            <a className="menuitem">GIFTS</a>
                                        </li>
                                        <li className="section">
                                            <a className="menuitem">RANGE</a>
                                        </li>
                                        <li className="section">
                                            <a className="menuitem">TIPS & ADVICE</a>
                                        </li>
                                        <li className="section">
                                            <a className="menuitem">ABOUT US</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="search-toggler">
                            <input type="text" className="searchBoxStyle" />
                       
                    </div>
                    <p class="delivery-return-msg-desktop">3 for 2* use code: 19820 &nbsp;&nbsp; |&nbsp;&nbsp;  Free delivery over £25*</p>
                </div>
            </div>
        </div>
      
    );
  }
}

export default withRouter(Header);
