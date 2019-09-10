
import React, { Component } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './BannerSlider.css';
import leftArrowImg from '../../../../assets/images/homePage/icon-arrow-l-white.svg'
import rightArrowImg from '../../../../assets/images/homePage/icon-arrow-r-white.svg'

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


    class BannerSlider extends Component{
        render() {
          const { bannerData } = this.props;
          var settings = {
            dots: true,
            dotsClass: "slick-dots slick-thumbs",
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2500,
            prevArrow: <LeftNavButton />,
            nextArrow: <RightNavButton />,
            responsive:[
              { breakpoint:1025,
                setting:{
                  prevArrow: 0,
                  nextArrow: 0
                }
              }
            ]
          }
          
          

        return(
            <div>
         <Slider {...settings}>
            {   bannerData.map(dataBanner => 
                {
                  return(
                      <div>
                        <a href ={dataBanner.link}>
                          <img src ={dataBanner.url} className="slider-images" />
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