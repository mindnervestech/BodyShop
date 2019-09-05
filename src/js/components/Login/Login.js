import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Form, FormGroup, Label, Input, Button, Row, Col, Breadcrumb, BreadcrumbItem  } from 'reactstrap';
import '../../../styles/Login/Login.css';
class Login extends Component {


    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         signUpState: 'login'
    //     }
    // }

    setSignUp = (state) => {
        console.log('state',state);
        // this.setState({
        //     signUpState: state
        // })
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
                            <a href="/login"><button type="button" className="primary-tab-selected widthBtn">
                                <span>
                                    <FormattedMessage id="login.Login" className="primary-tab-selected" defaultMessage="LOGIN" />
                                </span>
                            </button></a>
                            <a href="/register"><button type="button" className="primary-tab-normal widthBtn" onClick={this.setSignUp('register')}>
                                <span>
                                    <FormattedMessage id="login.Register" defaultMessage="REGISTER" />
                                </span>
                            </button></a>
                          </Col>
                          <Col md="3"></Col>
                        </Row>
                        
                        <Row>
                          <Col md="4"></Col>
                          <Col md="4">
                            <Form>
                              <Row>
                                <Col md="1"></Col>
                                <Col md="10" className="text-align-left pt-4 pl-4">
                                  <FormGroup>
                                    <Label for="loginEmailLabel"><b>Email address</b></Label>
                                    <Input type="email" name="email" id="loginEmail" />
                                  </FormGroup>
                                </Col>
                                <Col md="1"></Col>
                              </Row>

                              <Row>
                                <Col md="1"></Col>
                                <Col md="10" className="text-align-left pl-4">
                                  <FormGroup>
                                    <Label for="loginPasswordLabel"><b>Password</b></Label>
                                    <Input type="password" name="password" id="loginPassword"/>
                                  </FormGroup>
                                </Col>
                                <Col md="1"></Col>
                              </Row>

                              <Row>
                                <Col md="1"></Col>
                                <Col md="10" className="text-align-left register-link pl-4">
                                  <a  className="register-info" href="#">Forgot your password?</a>
                                </Col>
                                <Col md="1"></Col>
                              </Row>

                              <Row>
                                <Col md="1"></Col>
                                <Col md="10" className="text-align-left pt-4 pl-4">
                                  <Button className="btn-grey" size="md" block>LOGIN</Button>
                                </Col>
                                <Col md="1"></Col>
                              </Row>

                              <Row>
                                <Col md="1"></Col>
                                <Col md="10" className="pt-4 register-link pl-4">
                                  <span>Not registered yet?</span><a className="register-info" href="/register">Register now</a>
                                </Col>
                                <Col md="1"></Col>
                              </Row>
                            </Form>
                          </Col>
                          <Col md="4"></Col>
                        </Row>
                    </div>
                </div>
            </div>
      );
  }
}
export default Login;
