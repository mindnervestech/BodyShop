import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Form, FormGroup, Label, Input, Button, Row, Col, Breadcrumb, BreadcrumbItem  } from 'reactstrap';
import "./Login.css";
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

    render () {

        return (
            // <div className="text-align-center login">
            //     <div className="display-inline login-container">
            //         <div className="header4 signup-title">
            //             <span><FormattedMessage id="login.Title" defaultMessage="LOGIN OR REGISTER" /></span>
            //         </div>
            //         <div>
            //             <button type="button" className="primary-tab-selected" onClick={this.setSignUp('login')}>
            //                 <span>
            //                     <FormattedMessage id="login.Login" className="primary-tab-selected" defaultMessage="LOGIN OR REGISTER" />
            //                 </span>
            //             </button>
            //             <button className="primary-tab-normal" onClick={this.setSignUp('register')}>
            //                 <span>
            //                     <FormattedMessage id="login.Register" defaultMessage="LOGIN OR REGISTER" />
            //                 </span>
            //             </button>
            //         </div>

                   
            //     </div>
            // </div>
            <div className="login">


      <Breadcrumb>
        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
        <BreadcrumbItem active>Login</BreadcrumbItem>
      </Breadcrumb>
                <div className="display-inline login-container">
                        <Row>
                            <Col md="12">
                                <Row>
                                    <Col md="3">

                                    </Col>

                                    <Col md="5">
                                        <div className="header4 signup-title text-align-center">
                                            <span><FormattedMessage id="login.Title" defaultMessage="LOGIN OR REGISTER" /></span>
                                        </div>

                                        
                                           <Row>
                                                <Col md="1"></Col>
                                                <Col md="4" className="pt-2">
                                                      <a href="/login"><Button color="secondary" size="md" block>LOGIN</Button></a>
                                                </Col>
                                                <Col md="4" className="pt-2">
                                                      <a href="/register"><Button color="primary" size="md" block>REGISTER</Button></a>
                                                </Col>
                                                <Col md="2"></Col>
                                           </Row>
                                        

                                        <Form>
                                            <FormGroup>
                                                <Row>
                                                    <Col md="2"></Col>
                                                    <Col md="6" className="pt-4">
                                                        <Label for="loginEmailLabel">Email address</Label>
                                                        <Input type="email" name="email" id="loginEmail" />
                                                    </Col>
                                                    <Col md="3"></Col>
                                                </Row>
                                            </FormGroup>

                                            <FormGroup>
                                                <Row>
                                                    <Col md="2"></Col>
                                                    <Col md="6" className="pt-2">
                                                        <Label for="loginPasswordLabel">Password</Label>
                                                        <Input type="password" name="password" id="loginPassword" />
                                                    </Col>
                                                    <Col md="3"></Col>
                                                </Row>
                                            </FormGroup>


                                                    <Row>
                                                        <Col md="2"></Col>
                                                        <Col md="6" className="register-link"><a  className="register-info" href="#">Forgot your password?</a></Col>
                                                    </Row>

                                            <FormGroup>
                                                <Row>
                                                    <Col md="2"></Col>
                                                    <Col md="6" className="pt-4">
                                                         <Button className="btn-grey" size="md" block>LOGIN</Button>
                                                    </Col>
                                                    <Col md="3"></Col>
                                                </Row>
                                            </FormGroup>

                                             <Row>
                                                    <Col md="3"></Col>
                                                    <Col md="6" className="register-link"><span>Not registered yet?</span><a className="register-info" href="/register">Register now</a></Col>
                                               </Row>
                                        </Form>                      
                                    </Col>

                                    <Col md="3">
                                    
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                </div>
            </div>
        );
    }
}  
export default Login;