import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router-dom'
import '../../../../styles/Header/Header.css';
import Input from '../../common/InputBox/Input.js';
import { Link, Redirect } from 'react-router-dom';
import iconNavLeft from '../../../../../src/assets/images/icons/icon-nav-left.png';
import iconNavRight from '../../../../../src/assets/images/icons/icon-nav-right.png';
import iconCloseWhite from '../../../../../src/assets/images/icons/icon-close-white.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuList: [],
            selectedMenuName:""
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

    translate = (lang, dir) => {
        this.props.handleLanguageSelection(lang, dir);
    }

    openMobileMenubar() {
        document.getElementById('mobileMenuBar').style.display = 'block';
        document.getElementById('mobileMenuBar').style.left = '0px';
        document.getElementById('pageOverlay').style.display = 'block';
        // document.getElementsByClassName('home-main')[0].style.display = 'none';
        // document.getElementsByClassName('footer-region-1')[0].style.display = 'none';
        console.log(window.screen.availWidth);
        if(window.screen.availWidth <1025 && window.screen.availWidth >= 768) {
            document.getElementById('mainDiv').style.left = '50%';
        }
        if(window.screen.availWidth <= 767) {
           
            document.getElementById('mainDiv').style.left = '85%';
            document.getElementById('mainDiv').style.height = '100vh';
            document.getElementById('mobileNavWraper').style.height = '572px'
        }
        if(window.screen.availWidth >= 768 && window.screen.availWidth <= 1024) {
            document.getElementById('mobileMenuBar').style.width = '33%';
            document.getElementById('mainDiv').style.left = '50%';
            document.getElementById('mainDiv').style.height = '100vh';
            document.getElementById('mobileNavWraper').style.height = '920px'
        }
        //document.getElementById('mainDiv').style.left = '50%';
    }
    closeMenuBar() {
        document.getElementById('mobileMenuBar').style.display = 'none';
        document.getElementById('pageOverlay').style.display = 'none';
        document.getElementById('mainDiv').style.left = '0';
        document.getElementById('mainDiv').style.height = 'auto';
        document.getElementById('mobileNavWraper').style.removeProperty('height');
        // document.getElementsByClassName('home-main')[0].style.display = 'block';
        // document.getElementsByClassName('footer-region-1')[0].style.display = 'block';
    }

    openSubmenu(menuName) {
        console.log(menuName);
        document.getElementById('menuCategories').style.display = 'none';
        document.getElementById('menuSecondarySections').style.display = 'none';
        document.getElementById('menuSubcategories').style.display = 'block';
        this.setState({selectedMenuName:menuName});
        if(menuName == 'trending') {
            this.setState({menuList: ["shop trending","christmas sneak peak"]});
        }
        if(menuName == 'face') {
            this.setState({menuList: ["by product type","by skin type","by skin concern","vegan"]});
        }
        if(menuName == 'bode') {
            this.setState({menuList: ["by product type","by skin type","vegan"]});
        }
        if(menuName == 'hair') {
            this.setState({menuList: ["by product type","by hair concern","vegan"]});
        }
        if(menuName == 'makeup') {
            this.setState({menuList: ["by product type","this seasons trends","vegan"]});
        }
        if(menuName == 'fragrance') {
            this.setState({menuList: ["by product type"," by recipient","home fragrance"]});
        }
        if(menuName == 'gifts') {
            this.setState({menuList: ["by product type"," by price","by recipient","christmas gifts"]});
        }
        if(menuName == 'range') {
            this.setState({menuList: ["range","tailored for men"]});
        }
        if(menuName == 'tipsAdvice') {
            this.setState({menuList: ["skin care articles","body care articles","make-up articles","lifestyle articles","ingredient benefits","christmas ideas"]});
        }
        if(menuName == 'aboutUs') {
            this.setState({menuList: ["who we are","loyalty program","sustainability","plastics","the body shop at home"]});
        }
        
    }

    openPrevMenu() {
        document.getElementById('menuCategories').style.display = 'block';
        document.getElementById('menuSecondarySections').style.display = 'block';
        document.getElementById('menuSubcategories').style.display = 'none';
    }

  render() {
    return (
        <div className="main" id="mainDiv">
            <div className="main-inner">
                <div className="sticky-header scroll-to-fixed-fixed" >
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
                                    <a title="Click to open your account">
                                        <span className="icons my-account"></span>
                                    </a>
                                    <div id="my-account-tooltip">

                                    </div>
                                </li>
                                <li className="content">
                                    <a>
                                        <span className="icons wish-list"></span>
                                    </a>
                                </li>
                                <li className="content">
                                    <a>
                                        <span className="icons mini-basket"></span>
                                        <span className="basket-icon-circle">1</span>
                                    </a>
                                </li>
                                <li className="content last">
                                    <a href="javascript:void(0);" onClick={(e) => this.translate('en', 'ltr')}>
                                        <span class="text-store-finder">English</span>
                                    </a>
                                    <a href="javascript:void(0);" onClick={(e) => this.translate('ar', 'rtl')}>
                                        <span class="text-store-finder">| العربية</span>
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

            <div className="sticky-header-mobile">
                    <header className="wrapper-global-header-mobile">
                        <div style={{height:34}}>
                            <ul className="row wrapper-sticky-search-toggle-mobile">
                                <li className="col-header">
                                    <a onClick={this.openMobileMenubar}>
                                        <span className="icons mobile-nav"></span>
                                    </a>
                                </li>
                                <li className="col-header">
                                    <span>
                                        <a>
                                            <span className="icons icon-header-search"></span>
                                        </a>
                                    </span>
                                </li>
                                <li className="col-header">
                                    <a className="logo">
                                        <Link className="logo" to={`/home`}>
                                            <img title="The Body Shop" src="https://assets.thebodyshop.com/medias/tbs-logo.svg?context=content-images/h4d/h7c/8796377514014/tbs-logo.svg" alt="The Body Shop" class="loading" />
                                        </Link>
                                    </a>
                                </li>
                                <li className="col-header">
                                    <a>
                                        <span className="icons store-finder"></span>
                                    </a>
                                </li>
                                <li className="col-header">
                                    <a className="full-basket">
                                        <span className="icons mini-basket"></span>
                                        <span className="basket-icon-circle">1</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="head-menu-item">
                            <p class="delivery-return-msg-mobile">Enjoy free delivery over £25*</p>
                        </div>


                        <div className="yCmsComponent megamenu_mobile">
                            <div className="dynamic-area"></div>
                            <div className="main-navigation" id="mobileMenuBar">
                                <div className="main-navigation-inner">
                                    <div className="mobile-nav-wrapper" id="mobileNavWraper">
                                        <div className="dynamic-area">
                                            <div className="white-line-wrapper">
                                                <div className="white-line">

                                                </div>
                                                <ul className="menu-items-list categories menu-mobile" id="menuCategories">
                                                    <li className="menu-item ">
                                                        <div className="mobile-nav-logo">
                                                            <a className="logo">
                                                                <img title="The Body Shop" src="https://assets.thebodyshop.com/medias/tbs-logo.svg?context=content-images/h4d/h7c/8796377514014/tbs-logo.svg" alt="The Body Shop" />
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li className="menu-item-category" onClick={() => this.openSubmenu('trending')}>
                                                        <a className="menu-item-title category-title">
                                                            <span><FormattedMessage id="header.menu.trending" /></span>
                                                            <img className="arrow arrow-right" src={iconNavRight} />
                                                        </a>
                                                    </li>
                                                    <li className="menu-item-category" onClick={() => this.openSubmenu('face')}>
                                                        <a className="menu-item-title category-title">
                                                            <span><FormattedMessage id="header.menu.face" /></span>
                                                            <img className="arrow arrow-right" src={iconNavRight} />
                                                        </a>
                                                    </li>
                                                    <li className="menu-item-category" onClick={() => this.openSubmenu('body')}>
                                                        <a className="menu-item-title category-title">
                                                            <span><FormattedMessage id="header.menu.body" /></span>
                                                            <img className="arrow arrow-right" src={iconNavRight} />
                                                        </a>
                                                    </li>
                                                    <li className="menu-item-category" onClick={() => this.openSubmenu('hair')}>
                                                        <a className="menu-item-title category-title">
                                                            <span><FormattedMessage id="header.menu.hair" /></span>
                                                            <img className="arrow arrow-right" src={iconNavRight} />
                                                        </a>
                                                    </li>
                                                    <li className="menu-item-category" onClick={() => this.openSubmenu('makeup')}>
                                                        <a className="menu-item-title category-title">
                                                            <span><FormattedMessage id="header.menu.makeup" /></span>
                                                            <img className="arrow arrow-right" src={iconNavRight} />
                                                        </a>
                                                    </li>
                                                    <li className="menu-item-category" onClick={() => this.openSubmenu('fragrance')}>
                                                        <a className="menu-item-title category-title">
                                                            <span><FormattedMessage id="header.menu.fragrance" /></span>
                                                            <img className="arrow arrow-right" src={iconNavRight} />
                                                        </a>
                                                    </li>
                                                    <li className="menu-item-category" onClick={() => this.openSubmenu('gifts')}>
                                                        <a className="menu-item-title category-title">
                                                            <span><FormattedMessage id="header.menu.gifts" /></span>
                                                            <img className="arrow arrow-right" src={iconNavRight} />
                                                        </a>
                                                    </li>
                                                    <li className="menu-item-category" onClick={() => this.openSubmenu('range')}>
                                                        <a className="menu-item-title category-title">
                                                            <span><FormattedMessage id="header.menu.range" /></span>
                                                            <img className="arrow arrow-right" src={iconNavRight} />
                                                        </a>
                                                    </li>
                                                    <li className="menu-item-category" onClick={() => this.openSubmenu('tipsAdvice')}>
                                                        <a className="menu-item-title category-title">
                                                            <span><FormattedMessage id="header.menu.tipsAdvice" /></span>
                                                            <img className="arrow arrow-right" src={iconNavRight} />
                                                        </a>
                                                    </li>
                                                    <li className="menu-item-category" onClick={() => this.openSubmenu('aboutUs')}>
                                                        <a className="menu-item-title category-title">
                                                            <span><FormattedMessage id="header.menu.aboutUs" /></span>
                                                            <img className="arrow arrow-right" src={iconNavRight} />
                                                        </a>
                                                    </li>
                                                </ul>
                                                <ul className="menu-items-list subcategories" id="menuSubcategories" style={{display:'none'}}>
                                                    <li className="menu-item" onClick={() => this.openPrevMenu()}>
                                                        <a className="nav-return">
                                                            <img className="arrow arrow-left" src={iconNavLeft} />
                                                            Go Back
                                                        </a>
                                                        <div className="nav-breadcrumb">
                                                            <a>{this.state.selectedMenuName}</a>
                                                        </div>

                                                    </li>
                                                    {
                                                        this.state.menuList.map((name) =>
                                                        <li className="menu-item subcategory">
                                                            <a className="menu-item-title subcategory-title">
                                                                <span>{name}</span>
                                                                <img className="arrow arrow-right" src={iconNavRight} />
                                                            </a>
                                                        </li>
                                                        )
                                                    }
                                                    
                                                    {/* <li className="menu-item subcategory">
                                                        <a className="menu-item-title subcategory-title">
                                                            <span>Christmas Sneak Peak</span>
                                                            <img className="arrow arrow-right" src={iconNavRight} />
                                                        </a>
                                                    </li> */}
                                                </ul>
                                                <ul className="menu-items-list secondary-sections" id="menuSecondarySections">
                                                    <li className="menu-item">
                                                        <a className="menu-item-title secondary-section-title">
                                                        ------------ <FormattedMessage id="header.secondaryMenu.usefulInformation" /> ------------
                                                        </a>
                                                    </li>
                                                    <li className="menu-item">
                                                        <a className="menu-item-title secondary-section-title">
                                                        <FormattedMessage id="header.secondaryMenu.helpAndFaqs" />
                                                        </a>
                                                    </li>
                                                    <li className="menu-item">
                                                        <a className="menu-item-title secondary-section-title">
                                                        <FormattedMessage id="header.secondaryMenu.liveChat" />
                                                        </a>
                                                    </li>
                                                    <li className="menu-item">
                                                        <a className="menu-item-title secondary-section-title">
                                                        <FormattedMessage id="header.secondaryMenu.deliveryInformation" />
                                                        </a>
                                                    </li>
                                                    <li className="menu-item">
                                                        <a className="menu-item-title secondary-section-title">
                                                        <FormattedMessage id="header.secondaryMenu.termsAndConditions" />
                                                        </a>
                                                    </li>
                                                    <li className="menu-item">
                                                        <a className="menu-item-title secondary-section-title">
                                                        <FormattedMessage id="header.secondaryMenu.loyaltyClub" />
                                                        </a>
                                                    </li>
                                                    <li className="menu-item">
                                                        <a className="menu-item-title secondary-section-title">
                                                        <FormattedMessage id="header.secondaryMenu.studentDiscounts" />
                                                        </a>
                                                    </li>
                                                    <li className="menu-item">
                                                        <a className="menu-item-title secondary-section-title">
                                                        <FormattedMessage id="header.secondaryMenu.cookies" />
                                                        </a>
                                                    </li>
                                                    <li className="menu-item">
                                                        <a className="menu-item-title secondary-section-title">
                                                        <FormattedMessage id="header.secondaryMenu.taxStrategy" />
                                                        </a>
                                                    </li>
                                                    <li className="menu-item">
                                                        <a className="menu-item-title secondary-section-title">
                                                        <FormattedMessage id="header.secondaryMenu.privacyNotice" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mobile-nav-spacer"></div>
                                    <div className="wrapper-mob-nav-sticky-links">
                                        <div className="account-tooltip my-account-overlay-mobile">
                                        </div>
                                        <ul>
                                            <li>
                                                <a className="my-account-trigger">
                                                    <span className="icons my-account"></span>
                                                    <span className="accessibility"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a>
                                                    <span className="icons wish-list"></span>
                                                    <span className="accessibility"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a>
                                                    <span className="icons customer-care"></span>
                                                    <span className="accessibility"></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </header>
                </div>
                <div className="sticky-header-mobile-spacer"></div>
                <div className="page-overlay" id="pageOverlay" onClick={this.closeMenuBar} style={{display:'none'}}>
                    <div className="close-overlay">
                        <a onClick={this.closeMenuBar} style={{cursor:'pointer'}}>
                            <img className="svg loading" src={iconCloseWhite} />
                        </a>
                    </div>
                </div>

        </div>
    );
  }
}

export default withRouter(Header);
