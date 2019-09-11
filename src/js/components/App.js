import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import { BASE_URL, CLONE_BASE_URL, API_TOKEN } from '../api/globals';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/index'
import { store } from '../redux/store/store'

import '../../styles/App.css';

import { Route, Link, Switch } from 'react-router-dom'
import Home from './Home/Home';
import Login from './Login/Login';
// import Register from './Register/RegisterForm';
import AboutUs from './Static/AboutUs/AboutUs';
import AboutNatura from './Static/AboutNatura/AboutNatura';
import AboutVegetarianFriendly from './Static/AboutVegetarianFriendly/AboutVegetarianFriendly';
import AboutOurHeritage from './Static/AboutOurHeritage/AboutOurHeritage';

import OurCommitment from './Static/AboutUsOurCommitment/aboutUsOurCommitment';
import CommunityFair from './Static/AboutUsCommunityFair/aboutUsCommunityFair';
//import StoreLocator from './StoreLocator/store-locator';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import { CookiesProvider } from 'react-cookie';
import en from "react-intl/locale-data/en";
import ar from "react-intl/locale-data/ar"
import cookie from 'react-cookies';
import Axios from 'axios';
import ScrollToTop from '../components/HOC/ScrollToTop';

import { setChangeStore } from '../redux/actions/globals';

import localeData from '../../config/libs/i18n/data.json'
addLocaleData([...en, ...ar]);



//const language = 'en';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'en',
      dir: '',
      changeData: false,
      store_id: '',
      toHome: false,
      selectedStore: ''
    }
  }


  static getDerivedStateFromProps = (props, state) => {
    if (props.changeData) {
      // console.log("props", props);
      //console.log("state", state);
      let lang;
      //console.log('statechangeData', state.changeData);

      if (state.changeData) {
        lang = state.language;
        //console.log("true");
      }
      else {
        lang = props.selectedLang;
        //console.log("false");
      }

      //console.log("Lang", lang);

      let toHome = props.toHome;

      let dir = lang === 'en' ? 'ltr' : 'rtl';
      return { language: lang, dir: dir, toHome: toHome }
    }
    return null;
  }

  _changeStoreId = (store_id, quote_id, store_locale) => {
    const API = Axios.create({
      baseURL: CLONE_BASE_URL,
      headers: { Authorization: `Bearer ${API_TOKEN}`, "Content-Type": "application/json" }
    });

    const reqdata = {
      store_id: store_id,
      quote_id: quote_id
    };

    API.post('/Storechange', reqdata).then(res => {
      // console.log('Storechange API called', res);
     
      this._redirectWithLocale(store_locale);   //Change URL Location based on new Locale
    })

  }

  getStoreId = (country, lang) => {
    //const { store } = this.props;
    //console.log('STORE' ,store);
    //console.log('STORE state' ,store.getState());
    //let store_data = country + "_" + lang;

    let store_data = country + "_" + lang;
    // let store_data = cookie.load('country') + "_" + lang;

    const API = Axios.create({
      baseURL: CLONE_BASE_URL,
      headers: { Authorization: `Bearer ${API_TOKEN}`, "Content-Type": "application/json" }
    });

    const reqdata = {
      store_data: store_data
    };

    API.post('/storeinfo', reqdata).then(res => {
      console.log('STOREINFO res', res);
      localStorage.setItem('tempstoreid', res.data.store_id);
      localStorage.setItem('templang', lang);

      const country_name = this.getCountryName(country);
      const store_locale = ((country_name === '') || (country_name === null) || (country_name === undefined)) ? lang : country_name + "-" + lang;

      cookie.save('storeid', res.data.store_id, { path: '/' });
      cookie.save('language', lang, { path: '/' });
      cookie.save('country', country, { path: '/' });
      cookie.save('country_name', country_name, { path: '/' });
      cookie.save('store_locale', store_locale, { path: '/' });

      localStorage.setItem('storeid', res.data.store_id);
      localStorage.setItem('store_locale', store_locale);

      this.setState({ selectedStore: store_data, store_id: res.data.store_id, language: lang, changeData: true });
      store.dispatch(setChangeStore({ store_id: res.data.store_id, language: lang }));

      let { guest_user, login } = store.getState();
      let quote_id;

      if (login.customer_details.quote_id) {
        quote_id = login.customer_details.quote_id;
      } else {
        quote_id = (guest_user.new_quote_id) ? guest_user.new_quote_id : guest_user.temp_quote_id;
      }

      // quote_id = (guest_user.new_quote_id) ? guest_user.new_quote_id : guest_user.temp_quote_id;

      this._changeStoreId(res.data.store_id, quote_id, store_locale);

    })
  }

  _redirectWithLocale = (newLocale) => {
    // console.log('window.location.pathname', window.location.pathname);
    const curr_pathname = window.location.pathname;
    let new_path = curr_pathname.split('/');
    let new_pathname;
    if (new_path.length > 0) {
      new_path[1] = newLocale;
      new_pathname = new_path.join('/');
      console.log('window.location.pathname', new_pathname);
      window.location.pathname = new_pathname;
    }
  }

  handleLanguageSelection = (language) => {
    localStorage.setItem('templang', language);
   // this.getStoreId(country, language);
    this.handleDir(language);
  }

  handleDir = (language) => {
    if (language === 'ar') {
      document.getElementById("dir").classList.add("u-RTL");
      document.getElementById("dir").lang = 'ar';
      document.getElementById("dir").dir = 'rtl';
    } else {
      document.getElementById("dir").lang = 'en';
      document.getElementById("dir").classList.remove("u-RTL");
      document.getElementById("dir").removeAttribute('dir');
    }
  }

  getStoreLocale(storeid) {
    var str_lc;

    if (storeid === '1') {
      str_lc = 'saudi-ar';
    } else if (storeid === '2') {
      str_lc = 'saudi-en';
    } else if (storeid === '3') {
      str_lc = 'uae-ar';
    } else if (storeid === '4') {
      str_lc = 'uae-en';
    } else if (storeid === '5') {
      str_lc = 'ar';
    } else if (storeid === '6') {
      str_lc = 'en';
    }
    return str_lc;
  }

  getCountryName(country) {
    var country_name;

    switch (country) {
      case 'KSA':
        country_name = 'saudi';
        break;
      case 'UAE':
        country_name = 'uae';
        break;
      case 'International':
        country_name = '';
        break;
      default:
        country_name = '';
    }
    return country_name;
  }

  componentDidMount() {
    //console.log('LOCAL APP mounted');

    let changedLang = localStorage.getItem('tempstoreid');
    if (changedLang) {
      let templang = localStorage.getItem('templang');

      this.setState({ store_id: changedLang, language: templang, changeData: true });
    }
    else {

    }
  }



  render() {
    // document.getElementById("dir").dir = this.state.dir;
    let { language } = this.state;
    //console.log('In App Render', this.state);
    //const messages = localeData[language] || localeData.en;
    const messages = localeData[language] || localeData.en;

    //console.log('Inside Render', this.props);
    //let dir = this.props.selectedLang === 'ar' ? 'rtl' : 'ltr';
    this.handleDir(language);


    return (
      <>
        <CookiesProvider>
          <IntlProvider locale={language} messages={messages}>
            <BrowserRouter>
              <ScrollToTop>
                <>
                  <Header handleLanguageSelection={this.handleLanguageSelection} />
                  <Switch>
                    <Route path="/home" component={Home} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />

                    <Route exact path="/aboutus" component={AboutUs} />
                    <Route exact path="/aboutus-natura" component={AboutNatura} />
                    <Route exact path="/aboutus-vegetarian-friendly" component={AboutVegetarianFriendly} />
                    <Route exact path="/aboutus-our-heritage" component={AboutOurHeritage} />

                    <Route exact path="/AboutUs-OurCommitment" component={OurCommitment} />
                    <Route exact path="/AboutUs-CommunityFair" component={CommunityFair} />
                    {/* <Route exact path="/register" component={Register} /> */}

                  </Switch>
                  <Footer />
                </>
              </ScrollToTop>
            </BrowserRouter>
          </IntlProvider>
        </CookiesProvider>
      </>
    );
  }
}

export default App;