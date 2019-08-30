import React, { Component } from 'react';
//import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './js/components/common/Header/Header';
import './App.css';
import Footer from './js/components/common/Footer/Footer';
import Home from './js/components/common/Home/Home';

class App extends Component {
  render() {
    return (
      <div>
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <BrowserRouter>
          <div>
            <Header/>
            <Switch>
              <Route path="/home" component={Home} />
            </Switch>
            <Footer/>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
