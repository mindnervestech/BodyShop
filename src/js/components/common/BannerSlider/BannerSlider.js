
import React, { Component } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './BannerSlider.css';
import leftArrowImg from '../../../../assets/images/homePage/icon-arrow-l-white.svg'
import rightArrowImg from '../../../../assets/images/homePage/icon-arrow-r-white.svg'
import {Picture} from 'react-responsive-picture';


function LeftNavButton(props) {
  const {className, style, onClick} = props
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <img src={leftArrowImg} alt="Prev" style={{width:50}}/>
    </div>
  );
}
    
function RightNavButton(props) {
  const {className, style, onClick} = props 
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <img src={rightArrowImg} alt="Next" style={{width:50}}/>
    </div>
  );
}


class BannerSlider extends Component{
render() {
  const { bannerData } = this.props;
  var settings = {
    dotsClass: "slick-dots slick-thumbs",
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive:[
      { breakpoint:1025,
        setting:{
          prevArrow: <LeftNavButton />,
          nextArrow: <RightNavButton />,
          dots: true,
        }
      }
    ]
  }
  
  let BannerData = {};
  if (this.props.bannerData) {
    BannerData = Object.values(this.props.bannerData);
  }

  return(
      <div>
    <Slider {...settings}>
      {   BannerData.map(dataBanner => 
          {
            return(
                <div>
                  <a href ={dataBanner.url}>
                  <Picture className="slider-images" 
                    sources = {[
                        { srcSet :dataBanner.image, 
                            media: "(min-width:641px)"
                        },
                        { srcSet :dataBanner.mobile_image
                        }
                    ]} />
                  </a>
                </div>
              )
          }
      )}
    </Slider>
    </div>
  )
}
}

export default BannerSlider;