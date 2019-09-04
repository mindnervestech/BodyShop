import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../../../styles/Footer/Footer.css';
import '../../../styles/App.css';
import Promotions from '../common/Promotions/Promotions';
import TextOnRight from '../common/TextOnRight/TextOnRight';
import '../../../styles/homePage/homePage.css';
import sliderimg1 from '../../../assets/images/homePage/slider1.jpg'
import sliderimg2 from '../../../assets/images/homePage/slider2.webp'
import sliderimg3 from '../../../assets/images/homePage/slider3.webp'
import tabimg1 from '../../../assets/images/homePage/hometab1.webp'
import tabimg2 from '../../../assets/images/homePage/hometab2.jpg'
import tabimg3 from '../../../assets/images/homePage/hometab3.webp'
import leftArrowImg from '../../../assets/images/homePage/icon-arrow-l-white.svg'
import rightArrowImg from '../../../assets/images/homePage/icon-arrow-r-white.svg'
import staticimg1 from '../../../assets/images/homePage/staticimg1.webp'
import staticimg2 from '../../../assets/images/homePage/staticimg2.webp'

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
        <div className="content-wrapper row">
        <Promotions promoRouteLink="aaa" promoImg={tabimg1} />
        <Promotions promoRouteLink="aaa" promoImg={tabimg2} />
        <Promotions promoRouteLink="aaa" promoImg={tabimg3} />
        </div>
        <br />
        <div className="header4 centre">
        <br />
          <FormattedMessage id="home.bestseller" defaultmessage="OUR BESTSELLERS" />
        </div>
        <br />
        <div>
          Slider to be implemented here
        </div>
        <br />
        <div>
          <TextOnRight heading={<FormattedMessage id="home.loveBody" defaultmessage="LOVE YOUR BODY� CLUB" />} text={<FormattedMessage id="home.statictext1" />} text2={<FormattedMessage id="home.statictext2" />} imageSrc={staticimg1} />
        </div>
        <br />
        <div className="text-align-center">
          <button className="btn-secondary"><FormattedMessage id="home.signin" defaultmessage="SIGN IN/UP"/></button>
        </div>
        <br />
        <div>
          <TextOnRight heading={<FormattedMessage id="home.community" defaultmessage="COMMUNITY TRADE RECYCLED PLASTICS" />} text={<FormattedMessage id="home.statictext3" />} text2={<FormattedMessage id="home.statictext4" />} imageSrc={staticimg2} />
        </div>
        <br />
        <div className="text-align-center">
          <button className="btn-secondary"><FormattedMessage id="home.readMore" defaultmessage="READ MORE"/></button>
        </div>
      
      </div>
    );
  }
}

export default Home;
