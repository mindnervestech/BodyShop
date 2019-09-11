import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import '../../../styles/Footer/Footer.css';
import '../../../styles/App.css';
import Promotions from '../common/Promotions/Promotions';
import TextOnRight from '../common/TextOnRight/TextOnRight';
import '../../../styles/homePage/homePage.css';
import { Link, Redirect, withRouter } from 'react-router-dom';
import BannerSlider from '../common/BannerSlider/BannerSlider';
import ProductSlider from '../common/ProductSlider/ProductSlider';
import productImage1 from '../../../assets/images/homePage/productImage1.webp';
import productImage2 from '../../../assets/images/homePage/productImage2.jpg';
import productImage3 from '../../../assets/images/homePage/productImage3.webp';
import productImage4 from '../../../assets/images/homePage/productImage4.webp';
import productImage5 from '../../../assets/images/homePage/productImage5.jpg';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/index';

class Home extends Component {
  constructor(props) {
    super(props);
    console.log("Props Data",props);
  }

  componentWillMount(){
    console.log('wertyu',this.props);
    this.props.onGetHomePageData({store:1});
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
  
  let dataPromo = {};
  if (this.props.home_page_data.data) {
    dataPromo = this.props.home_page_data.data.offersblock;
    console.log('dataaPromoooooo', dataPromo);
  }

  let dataBanner = {};
  if (this.props.home_page_data.data) {
    dataBanner = this.props.home_page_data.data.banners;
    console.log('dataaaaaaaaa', dataBanner);
  }

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
          <TextOnRight heading={this.props.home_page_data.data.textblock1.title} text={this.props.home_page_data.data.textblock1.text} imageSrc={this.props.home_page_data.data.textblock1.image} />
        </div>
        <br />

        <div className="text-align-center">
          <Link to={`/login`}>
            <button className="btn-secondary btnwidth"><FormattedMessage id="home.signin" defaultmessage="SIGN IN/UP"/></button>
          </Link>
        </div>
        <br />

        <div>
          <TextOnRight heading={this.props.home_page_data.data.textblock2.title} text={this.props.home_page_data.data.textblock2.text} imageSrc={this.props.home_page_data.data.textblock2.image} />
        </div>
        <br />
        
        <div className="text-align-center">
          <button className="btn-secondary"><FormattedMessage id="home.readMore" defaultmessage="READ MORE"/></button>
        </div>
      
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    home_page_data: state.global.home_page_data,
  }
}

const mapDispatchToProps = dispatch => {
  return{
    onGetHomePageData: (payload) => dispatch(actions.getHomePageData(payload)),
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
