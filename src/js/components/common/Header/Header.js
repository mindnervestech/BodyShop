import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router-dom'
import '../../../../styles/Header/Header.css';
import Input from '../../common/InputBox/Input.js';
import { Link, Redirect } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
      }

      componentDidMount() {
          
      }

      openSection(menuName) {
          if(menuName == 'trending') {
              document.getElementById('trending-section').style.display = 'block';
              document.getElementById('face-section').style.display = 'none';
              document.getElementById('body-section').style.display = 'none';
          }
          if(menuName == 'face') {
            document.getElementById('face-section').style.display = 'block';
            document.getElementById('trending-section').style.display = 'none';
            document.getElementById('body-section').style.display = 'none';
          }
          if(menuName == 'body') {
            document.getElementById('body-section').style.display = 'block';
            document.getElementById('face-section').style.display = 'none';
            document.getElementById('trending-section').style.display = 'none';
          }
      }

      closeSection() {
            document.getElementById('trending-section').style.display = 'none';
            document.getElementById('face-section').style.display = 'none';
            document.getElementById('body-section').style.display = 'none';
    }

  render() {
    return (
        <div className="main">
            <div className="main-inner">
                <div className="sticky-header scroll-to-fixed-fixed">
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
                                <Link className="logo" to={`/home`}>
                                    <img title="The Body Shop" src="https://assets.thebodyshop.com/medias/tbs-logo.svg?context=content-images/h4d/h7c/8796377514014/tbs-logo.svg" alt="The Body Shop" class="loading"/>
                                </Link>
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
                                    <ul className="main-nav ulStyle" onMouseLeave={() => this.closeSection()}>
                                        <li className="section" onMouseOver={() => this.openSection('trending')} style={{paddingLeft:0}}>
                                            <a className="menuitem"><FormattedMessage id="header.menu.trending" /></a>
                                            <div className="main-navigation-desktop-bg" onMouseLeave={() => this.closeSection()} onMouseOver={() => this.openSection('trending')} id="trending-section" style={{display:'none'}}>
                                                <div className="section-categories">
                                                    <div className="section-subcategories">
                                                    <div className="subcategories-container">
                                                        <div className="subcategories-col">
                                                            <div className="subcategory">
                                                                <div className="category-column">
                                                                    <a className="subcategory-link">SHOP TRENDING</a>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">New</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Bestsellers</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Top Rated</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Holiday essentials</a>
                                                                    </div>
                                                                </div>
                                                                <div className="category-column">
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Travel sizes</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Power Couples</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Vegan Products</a>
                                                                    </div>
                                                                </div>
                                                                <div className="category-column">
                                                                    <a className="subcategory-link">CHRISTMAS SNEAK PEAK</a>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Advent Calendars</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Sneak Peak Gifts</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="banners-col">
                                                                    <ul className="banners">
                                                                        <li>
                                                                            <a className="banner-link">
                                                                                <img src="https://assets.thebodyshop.com/medias/Trending-tea-tree2019.jpg?context=content-images/h01/hc3/45090061090846/Trending-tea-tree2019.jpg" />
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                        </div>
                                                    </div>
                                                   </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="section" onMouseOver={() => this.openSection('face')}>
                                            <a className="menuitem"><FormattedMessage id="header.menu.face" /></a>
                                            <div className="main-navigation-desktop-bg" onMouseLeave={() => this.closeSection()} onMouseOver={() => this.openSection('face')} id="face-section" style={{display:'none'}}>
                                                <div className="section-categories">
                                                    <div className="section-subcategories">
                                                    <div className="subcategories-container">
                                                        <div className="subcategories-col">
                                                            <div className="subcategory">
                                                                <div className="category-column">
                                                                    <a className="subcategory-link">BY PRODUCT TYPE</a>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Accessories</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Cleansers & Toners</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Correctors & Blemishes</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Eye Care</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Face Masks</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Lip Care</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Men's Shaving</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Men's Skincare</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Moisturisers</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Moisturisers with SPF</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Night Care</a>
                                                                    </div>
                                                                </div>
                                                                <div className="category-column">
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Scrubs & Exfoliators</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Targeted treatments</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Washes & Makeup</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Remover</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">View all Face</a>
                                                                    </div>
                                                                    <a className="subcategory-link">BY SKIN TYPE</a>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Combination</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Dry</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Sensitive</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Oily</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Normal</a>
                                                                    </div>
                                                                </div>
                                                                <div className="category-column">
                                                                    <a className="subcategory-link">BY SKIN CONCERN</a>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Dull Tired Skin</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Enlarged Pores</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Fine Lines</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">First Signs of Ageing</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Oil Control</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Teen Skincare</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Uneven Skin Tone</a>
                                                                    </div>
                                                                    <a className="subcategory-link">VEGAN</a>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Vegan Skincare</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="banners-col">
                                                                    <ul className="banners">
                                                                        <li>
                                                                            <a className="banner-link">
                                                                                <img src="https://assets.thebodyshop.com/medias/FACE40-Q3-2019-AO-CLEANSERS-MEGA-MENU.jpg?context=content-images/h4b/h0d/45090061156382/FACE40-Q3-2019-AO-CLEANSERS-MEGA-MENU.jpg" />
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                        </div>
                                                    </div>
                                                   </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="section" onMouseOver={() => this.openSection('body')}>
                                            <a className="menuitem"><FormattedMessage id="header.menu.body" /></a>
                                            <div className="main-navigation-desktop-bg" onMouseLeave={() => this.closeSection()} onMouseOver={() => this.openSection('body')} id="body-section" style={{display:'none'}}>
                                                <div className="section-categories">
                                                    <div className="section-subcategories">
                                                    <div className="subcategories-container">
                                                        <div className="subcategories-col">
                                                            <div className="subcategory">
                                                                <div className="category-column">
                                                                    <a className="subcategory-link">BY PRODUCT TYPE</a>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Accessories</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Bath Treats</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Body Butter</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Body Yogurts</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Body & Massage Oils</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Bronzing</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Deodorant</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Feet</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Hand Moisturisers</a>
                                                                    </div>
                                                                </div>
                                                                <div className="category-column">
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Hand Wash</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Hand Treatments</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Lotions & Sorbets</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Men's Body Care</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Nail Care</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Scrubs</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Seasonal Body Care</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Soaps</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Spa & Body Treatments</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Washes & Gels</a>
                                                                    </div>
                                                                </div>
                                                                <div className="category-column">
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">View all Body</a>
                                                                    </div>
                                                                    <a className="subcategory-link">BY SKIN TYPE</a>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Dry Skin</a>
                                                                    </div>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Sensitive Skin</a>
                                                                    </div>
                                                                    <a className="subcategory-link">VEGAN</a>
                                                                    <div className="subcategory-item">
                                                                        <a className="subcategory-item-title">Vegan Bodycare</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="banners-col">
                                                                    <ul className="banners">
                                                                        <li>
                                                                            <a className="banner-link">
                                                                                <img src="https://assets.thebodyshop.com/medias/BODY41-Q3-2019-AO-SCRUBS-MEGA-MENU.jpg?context=content-images/h24/hd8/45090061221918/BODY41-Q3-2019-AO-SCRUBS-MEGA-MENU.jpg" />
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                        </div>
                                                    </div>
                                                   </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="section">
                                            <a className="menuitem"><FormattedMessage id="header.menu.hair" /></a>
                                        </li>
                                        <li className="section">
                                            <a className="menuitem"><FormattedMessage id="header.menu.makeup" /></a>
                                        </li>
                                        <li className="section">
                                            <a className="menuitem"><FormattedMessage id="header.menu.fragrance" /></a>
                                        </li>
                                        <li className="section">
                                            <a className="menuitem"><FormattedMessage id="header.menu.gifts" /></a>
                                        </li>
                                        <li className="section">
                                            <a className="menuitem"><FormattedMessage id="header.menu.range" /></a>
                                        </li>
                                        <li className="section">
                                            <a className="menuitem"><FormattedMessage id="header.menu.tipsAdvice" /></a>
                                        </li>
                                        <li className="section">
                                            <a className="menuitem"><FormattedMessage id="header.menu.aboutUs" /></a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* <div className="search-toggler">
                            <input type="text" className="searchBoxStyle" />
                       
                    </div> */}
                    <p class="delivery-return-msg-desktop">Enjoy free delivery over £25*</p>
                </div>
            </div>
        </div>
    );
  }
}

export default withRouter(Header);
