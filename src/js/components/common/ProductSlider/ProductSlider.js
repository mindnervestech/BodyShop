import React, { Component } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './ProductSlider.css';
import '../../../../styles/App.css';
import '../../../../styles/homePage/homePage.css'
import leftArrowImg from '../../../../assets/images/homePage/icon-arrow-l-black.png';
import rightArrowImg from '../../../../assets/images/homePage/icon-arrow-r-black.png';
import { FormattedMessage } from '../../../../../node_modules/react-intl';

function LeftNavButton(props) {
    const {className, style, onClick} = props;
    return (
        <div className="slick-arrow slick-prev" style={{...style, display: 'block'}} onClick={onClick} >
            <img src={leftArrowImg} alt="Prev" style={{width:30}}/>
        </div>
    );
}
            
function RightNavButton(props) {
    const {className, style, onClick} = props;
    return (
        <div className="slick-arrow slick-next" style={{...style, display: 'block'}} onClick={onClick}>
            <img src={rightArrowImg} alt="Next" style={{width:30}}/>
        </div>
    );
}

class ProductSlider extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        const { productData } = this.props;
        var settings = {
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: <LeftNavButton />,
            nextArrow: <RightNavButton />,
            responsive: [
                {
                    breakpoint: 641,
                    settings: {
                        slidesToShow: 1,            
                        prevArrow: <LeftNavButton />,
                        nextArrow: <RightNavButton />,
                    }
                }
            ]
            
        };
        

        

        
        return(
            <div className="text-align-center">
                <Slider {...settings} className="slider-box"> 
                {   productData.map(dataProduct => 
                    {
                        return(
                            <div>
                                <div>
                                    <img src ={dataProduct.url} className="product-images" />
                                </div>

                                <div className="product-names">
                                    {dataProduct.name}
                                </div>

                                <div className="product-prices">
                                    {dataProduct.price}
                                </div>

                                <div className="btn">
                                    <button className="btn-secondary">
                                        <FormattedMessage id="home.view" defaultmessage="VIEW" />
                                        <a href={dataProduct.link} />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
                </Slider>
            </div>

        )
    }
}

export default ProductSlider;