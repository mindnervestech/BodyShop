import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col } from 'reactstrap';
import '../../../styles/Login/Login.css';
import { Link } from 'react-router-dom';
import * as actions from '.././../redux/actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import LoginForm from './LoginForm.js';
import RegisterForm from '../Register/RegisterForm.js';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpState: 'login'
    }
  }

  setSignUp = (state) => {
      this.setState({
          signUpState: state
      })
  }

  login = (email, password) => {
    const payload = {
        email: email,
        password: password,
        guestquote: ''
    }

    this.props.onLoginUser(payload);
  }

  register = (data) => {
    const payload = data;
      this.props.onRegisterUserUser(payload);
  }

  render() {
    return (
            <div className="text-align-center login paddingTopCustom">
                <div className="display-inline login-container">
                    <div className="header4 title-size signup-title">
                        <span><FormattedMessage id="login.Title" defaultMessage="LOGIN OR REGISTER" /></span>
                    </div>
                    <div className="mt-4">
                        <Row>                          
                          <Col md="3"></Col>
                          <Col md="6">
                              <button type="button" className={(this.state.signUpState == 'login' ? "primary-tab-selected " : "primary-tab-normal") + ' widthBtn'} 
                                onClick={() => this.setSignUp('login')}>
                                  <span>
                                      <FormattedMessage id="login.Login" className="primary-tab-selected" defaultMessage="LOGIN" />
                                  </span>
                              </button>
                              <button type="button" className={(this.state.signUpState == 'register' ? "primary-tab-selected " : "primary-tab-normal") + ' widthBtn'} 
                                onClick={() => this.setSignUp('register')}>
                                  <span>
                                      <FormattedMessage id="login.Register" defaultMessage="REGISTER" />
                                  </span>
                              </button>
                          </Col>
                          <Col md="3"></Col>
                        </Row>
                        {this.state.signUpState == 'login' && <LoginForm login={this.login}/>}
                        {this.state.signUpState == 'register' && <RegisterForm register={this.register} />}
                    </div>
                </div>
            </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    guestUser: state.guest_user,
    customer_details: state.customer_details,
    login_error: state.invalidLogin,
    globals: state.global,
  };
}

const mapDispatchToProps = dispatch => {
  return {
      onLoginUser: (payload) => dispatch(actions.loginUser(payload)),
      onRegisterUserUser: (payload) => dispatch(actions.registerUser(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
