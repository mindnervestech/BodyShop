import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import '../../../styles/Footer/Footer.css';
import '../../../styles/App.css';
import Promotions from '../common/Promotions/Promotions';
import TextOnRight from '../common/TextOnRight/TextOnRight';
import '../../../styles/homePage/homePage.css';
import { Link, Redirect } from 'react-router-dom';
import BannerSlider from '../common/BannerSlider/BannerSlider';
import tabimg1 from '../../../assets/images/homePage/hometab1.webp';
import tabimg2 from '../../../assets/images/homePage/hometab2.jpg';
import tabimg3 from '../../../assets/images/homePage/hometab3.webp';
import staticimg1 from '../../../assets/images/homePage/staticimg1.webp';
import staticimg2 from '../../../assets/images/homePage/staticimg2.webp';
import ProductSlider from '../common/ProductSlider/ProductSlider';
import productImage1 from '../../../assets/images/homePage/productImage1.webp';
import productImage2 from '../../../assets/images/homePage/productImage2.jpg';
import productImage3 from '../../../assets/images/homePage/productImage3.webp';
import productImage4 from '../../../assets/images/homePage/productImage4.webp';
import productImage5 from '../../../assets/images/homePage/productImage5.jpg';
import sliderimg1 from '../../../assets/images/homePage/slider1.jpg';
import sliderimg2 from '../../../assets/images/homePage/slider2.webp';
import sliderimg3 from '../../../assets/images/homePage/slider3.webp';
import slidermob1 from '../../../assets/images/homePage/slidermob1.jpg';
import slidermob2 from '../../../assets/images/homePage/slidermob2.jpg';
import slidermob3 from '../../../assets/images/homePage/slidermob3.jpg';


class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const dataProduct = [
      {
        url: productImage1,
        name: "product no 1",
        price: "999 SAR",
        link: ""
      },
      {
        url: productImage2,
        name: "product no 2",
        price: "999 SAR",
        link: ""
      },
      {
        url: productImage3,
        name: "product no 3",
        price: "999 SAR",
        link: ""
      },
      {
        url: productImage4,
        name: "product no 4",
        price: "999 SAR",
        link: ""
      },
      {
        url: productImage5,
        name: "product no 5 sdarfhjwqrlfugqlfnbq,kjdhlwqiuefhk",
        price: "999 SAR",
        link: ""
      }
    ]
      
  const dataPromo= [
      {
        url:tabimg1,
        link:""
      },
      {
        url:tabimg2,
        link:""
      },
      {
        url:tabimg3,
        link:""
      }
    ]

  const dataBanner=[
    {
      BLOCK_BANNER:sliderimg1,
      BLOCK_MOBILE_BANNER:slidermob1,
      BLOCK_URL:""
    },
    {
      BLOCK_BANNER:sliderimg2,
      BLOCK_MOBILE_BANNER:slidermob2,
      BLOCK_URL:""
    },
    {
      BLOCK_BANNER:sliderimg3,
      BLOCK_MOBILE_BANNER:slidermob3,
      BLOCK_URL:""
    }
  ]  
    return (
      <div className="home-main">
        
        <BannerSlider bannerData={dataBanner}/>
        <br/>

        <Promotions promoData={dataPromo} />
        <br />
        
        <div className="header4 centre">
          <br />
          <FormattedMessage id="home.bestseller" defaultmessage="OUR BESTSELLERS" />
        </div>
        <br />

        <div>
          <ProductSlider productData={dataProduct} />
        </div>
        <br />

        <div>
          <TextOnRight heading={<FormattedMessage id="home.loveBody" defaultmessage="LOVE YOUR BODY™ CLUB" />} text={<FormattedMessage id="home.statictext1" />} text2={<FormattedMessage id="home.statictext2" />} imageSrc={staticimg1} />
        </div>
        <br />

        <div className="text-align-center">
          <Link to={`/login`}>
            <button className="btn-secondary btnwidth"><FormattedMessage id="home.signin" defaultmessage="SIGN IN/UP"/></button>
          </Link>
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
