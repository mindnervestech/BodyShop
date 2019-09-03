import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../../../styles/Footer/Footer.css';
import '../../../styles/App.css';
import homePage from '../../../styles/homePage/homePage.css';
import sliderimg1 from '../../../assets/images/homePage/slider1.jpg'
import sliderimg2 from '../../../assets/images/homePage/slider2.webp'
import sliderimg3 from '../../../assets/images/homePage/slider3.webp'
import tabimg1 from '../../../assets/images/homePage/hometab1.webp'
import tabimg2 from '../../../assets/images/homePage/hometab2.jpg'
import tabimg3 from '../../../assets/images/homePage/hometab3.webp'
import leftArrowImg from '../../../assets/images/homePage/icon-arrow-l-white.svg'
import rightArrowImg from '../../../assets/images/homePage/icon-arrow-r-white.svg'


function LeftNavButton(props) {
  const {className, style, onClick} = props
  return (
  <div
  className="slick-arrow slick-prev"
  style={{...style, display: 'block'}}
  onClick={onClick}
  >
  <img src={leftArrowImg} alt="Prev" style={{width:50}}/>
  </div>
  );
  }
  
  function RightNavButton(props) {
  const {className, style, onClick} = props
  return (
  <div
  className="slick-arrow slick-next"
  style={{...style, display: 'block'}}
  onClick={onClick}
  >
  <img src={rightArrowImg} alt="Next" style={{width:50}}/>
  </div>
  );
  }
  
  


class Home extends Component {
  render() {

    var settings = {
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      prevArrow: <LeftNavButton />,
      nextArrow: <RightNavButton />
       };
      
    return (
        /* <p >
          <FormattedMessage id="home.Title" defaultMessage="Home Page" />
        </p> */
      <div className="home-main">
        <div>
         <Slider {...settings}> 
            <div>
              <img src ={sliderimg1} className="slider-images" />
            </div>
            <div>
              <img src ={sliderimg2} className="slider-imgages"/>
            </div>
            <div>
              <img src ={sliderimg3} className="slider-imgages"/>
            </div>
          </Slider>
          </div>
        <br/>
        <div className="row content-wrapper">
            <div className="col-md-4 nopadding">
              <a href="aaa">
                <img src={tabimg1} className="tab"/>
              </a>
            </div>
            <div className="col-md-4 nopadding">
              <a href="aaa">
                <img src={tabimg2} className="tab" />
              </a>
            </div>
            <div className="col-md-4 nopadding">
              <a href="aaa">
                <img src={tabimg3} className="tab"/>
              </a>
            </div>
        </div>
        <br />
        <div className="h2-hero-header centre">
          <FormattedMessage id="home.bestseller" defaultmessage="BESTSELLERS" />
        </div>
      </div>
    );
  }
}

export default Home;
