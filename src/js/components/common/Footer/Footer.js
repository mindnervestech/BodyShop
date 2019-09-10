import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../../../../styles/Footer/Footer.css';
import '../../../../styles/App.css';
import { FormattedMessage } from 'react-intl';
import twitter from '../../../../assets/footerIcons/twitter.webp'
import facebook from '../../../../assets/footerIcons/icon-facebook.svg'
import instagram from '../../../../assets/footerIcons/InstagramLogov4.webp'
import cards from '../../../../assets/footerIcons/cards.png'

class Footer extends Component {

  render() {
    return (
      <div className="footer-region-1">
        <div className="sticky-footer">
          <div className="row">
              <div className="col-md-4 row nopadding">
                <div className ="col-md-6 nopadding" />
                <div className="col-md-6 footer-text nopadding centre">
                  <span><FormattedMessage id="footer.joinus" defaultmessage="JOIN US ON SOCIAL" /></span>
                </div>
              
              </div>
         <div className="col-md-4 footer-text row nopadding">
            <div className="col-md-2 nopadding centre" />
            <div className="col-md-1 nopadding centre">
              <a href ="https://twitter.com/TheBodyShopUK">
                <img src ={twitter} className="footericons"/>
              </a>
            </div>
            <div className="col-md-1 nopadding" />
            <div className="col-md-1 nopadding centre">
              <a href ="https://www.facebook.com/TheBodyShopUK/">
                <img src ={facebook} className="footericons"/>
              </a>
            </div>
            <div className="col-md-1 nopadding" />
            <div className="col-md-1 nopadding centre">
              <a href ="https://www.instagram.com/thebodyshop/">
                <img src ={instagram} className="footericons"/>
              </a>
            </div>
        </div>
        <div className="col-md-4 nopadding">
        <div className="footer-text centre">
          <button className="footer-btn"><FormattedMessage id="footer.signup" defaultmessage="SIGN UP FOR OUR EXCLUSIVE OFFERS" /></button>
        </div>
        </div>
      </div>
    </div>
    <br />
    <div className="footer-region-2 row nopadding tab">
    <div className ="col-md-1 nopadding" />
    <div className = "col-md-11 row nopadding">
      <div className="col-md-3 nopadding">
            <ul className = "list footer-text-2">
              <li ><strong className="list-heading"><FormattedMessage id="footer.helpcenter" defaultmessage="HERE TO HELP" /></strong></li>
              <li ><a href="" className="footer-links"><FormattedMessage id="footer.custcare" defaultmessage = "Customer Care" /></a></li>
              {/* <li ><a href="" className="footer-links"><FormattedMessage id="footer.privacy" defaultmessage = "Privacy Enquiries" /></a></li> */}
              <li ><strong ><a href ="" className="live-link"><FormattedMessage id="footer.contactus" defaultmessage="CONTACT US"  /></a></strong></li>
              <li className="list-heading" ><FormattedMessage id="footer.time" defaultmessage="SUN TO THU: 8AM TO 5PM" /></li>
              <li ><button className="footer-btn-live"><a href="" className="footer-links"></a></button></li>
            </ul>
      </div>
    
      <div className = "col-md-3 nopadding">
       <ul className = "list footer-text-2">
          <li ><strong className="list-heading"><FormattedMessage id="footer.useful" defaultmessage="USEFUL INFORMATION" /></strong></li>
          <li ><a href="" className="footer-links"><FormattedMessage id="footer.delivery" defaultmessage = "Delivery Information" /></a></li>
          {/* <li ><a href="" className="footer-links"><FormattedMessage id="footer.tracking" defaultmessage = "Order Tracking" /></a></li> */}
          <li ><a href="" className="footer-links"><FormattedMessage id="footer.terms" defaultmessage = "Terms and Conditions" /></a></li>
          <li ><a href="" className="footer-links"><FormattedMessage id="footer.privacynotice" defaultmessage = "Privacy Notice" /></a></li>
          <li ><a href="" className="footer-links"><FormattedMessage id="footer.cookies" defaultmessage = "Cookies" /></a></li>
          {/* <li ><a href="" className="footer-links"><FormattedMessage id="footer.mediaenq" defaultmessage = "Media Enquiries" /></a></li>   */}
        </ul>
      </div>
      <div className = "col-md-3 nopadding">
       <ul className = "list footer-text-2">
          <li><strong className="list-heading"><FormattedMessage id="footer.ways" defaultmessage="WAYS TO SHOP" /></strong></li>
          <li><a href="https://www.thebodyshop.com/en-gb/login?loginAccount=x12ef21" className="footer-links"><FormattedMessage id="footer.loyalty" defaultmessage = "Love Your Body Club" /></a></li>
          {/* <li ><a href="" className="footer-links"><FormattedMessage id="footer.sitemap" defaultmessage = "Sitemap" /></a></li>
          <li ><a href="" className="footer-links"><FormattedMessage id="footer.aff" defaultmessage = "Affiliates" /></a></li>
          <li ><a href="" className="footer-links"><FormattedMessage id="footer.student" defaultmessage = "Student Discount" /></a></li>
          <li ><a href="" className="footer-links"><FormattedMessage id="footer.giftcard" defaultmessage = "Gift Cards" /></a></li>
          <li ><a href="" className="footer-links"><FormattedMessage id="footer.home" defaultmessage = "The Body Shop At Home™" /></a></li>   */}
        </ul>
      </div>
      <div className = "col-md-3 nopadding">
       <ul className = "list footer-text-2">
          <li ><strong className="list-heading"><FormattedMessage id="footer.about" defaultmessage="ABOUT US" /></strong></li>
          <li ><a href="" className="footer-links"><FormattedMessage id="footer.whoweare" defaultmessage = "Who We Are" /></a></li>
          <li ><a href="" className="footer-links"><FormattedMessage id="footer.sustainability" defaultmessage = "Sustainability" /></a></li>
          <li ><a href="" className="footer-links"><FormattedMessage id="footer.modern" defaultmessage = "Modern Slavery Statement" /></a></li>
          <li ><a href="" className="footer-links"><FormattedMessage id="footer.plastics" defaultmessage = "Plastics"/></a></li>
          <li ><a href="" className="footer-links"><FormattedMessage id="footer.animal" defaultmessage = "Against Animal Testing" /></a></li>
          <li ><a href="" className="footer-links"><FormattedMessage id="footer.career" defaultmessage = "Careers" /></a></li>
          {/* <li ><a href="" className="footer-links"><FormattedMessage id="footer.tax" defaultmessage = "Tax Stratergy" /></a></li>   */}
        </ul>
      </div>
    </div>  
  </div>
  <div className="footer-region-2 row nopadding tab">
    <div className ="col-md-1 nopadding" />
    <div className = "col-md-11 row nopadding">
      <div className="col-md-9 footer-text-3 nopadding">
        <br />
        <p className ="nopadding">*<FormattedMessage id="footer.exclusion" defaultmessage="Exclusion Apply, see " /> 
         <a href="" className="underline"><FormattedMessage id="footer.terms" defaultmessage="terms and conditions" /></a>
        </p>
        <p className ="nopadding">
          <FormattedMessage id="footer.copyright" defaultmessage=" © 2019 The Body Shop International Limited" />
        </p>
        <p className="footer-text-4 nopadding">
          <FormattedMessage id="footer.trademark1" defaultmessage="® A registered trademark of The Body Shop International Limited; A trademark of The Body Shop International Limited All rights reserved." />
        </p>
        <p className="footer-text-4 nopadding">
          <FormattedMessage id="footer.trademark2" defaultmessage=" Registered Office: Watersmead, Littlehampton, West Sussex, BN17 6LS, United Kingdom; Registered in England No. 1284170" />
        </p>
      </div>
      <div className="col-md-3 nopadding">
        <img src ={cards} className="footer-cards-image" />
      </div>
    </div>
  </div>  
</div>
    );
  }
}

export default withRouter(Footer);
