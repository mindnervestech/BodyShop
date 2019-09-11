import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Row, Col, Breadcrumb, BreadcrumbItem  } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import '../../../styles/Login/Login.css';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: ''
        }
    }

    onChangeCredintials = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
    return (
            <div>
                <Row>
                    <Col md="4"></Col>
                    <Col md="4">
                    <AvForm>
                        <Row>
                            <Col md="1"></Col>
                            <Col md="10" className="text-align-left pt-4 pl-4">
                                <FormGroup>
                                    <Label for="loginEmailLabel"><b><FormattedMessage id="login.email" defaultMessage="Email address" /></b></Label>

                                    <AvField type="email" name="email" value={this.state.email} size="40" maxLength="100" onChange={this.onChangeCredintials}
                                    validate={{
                                              required: { value: true, errorMessage: <FormattedMessage id="register.validation.email.empty" defaultMessage="Email address cannot be empty" /> },
                                              pattern: { value: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/, errorMessage: <FormattedMessage id="register.validation.email.invalid" defaultMessage="Email address is not valid" /> }
                                            }}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md="1"></Col>
                        </Row>

                        <Row>
                            <Col md="1"></Col>
                            <Col md="10" className="text-align-left pl-4">
                                <FormGroup>
                                    <Label for="loginPasswordLabel"><b><FormattedMessage id="login.password" defaultMessage="Password" /></b></Label>
                                    <AvField type="password" name="password" size="40" maxLength="100" value={this.state.password} onChange={this.onChangeCredintials}
                                        validate = {{
                                            required:{value: true, errorMessage: <FormattedMessage id="register.validation.password.empty" defaultMessage="Password cannot be empty" /> }
                                        }}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md="1"></Col>
                        </Row>

                        <Row>
                            <Col md="1"></Col>
                            <Col md="10" className="text-align-left register-link pl-4">
                                <a  className="register-info" href="#"><FormattedMessage id="login.forgotPassword" defaultMessage="Forgot your password?" /></a>

                            </Col>
                            <Col md="1"></Col>
                        </Row>

                        <Row>
                            <Col md="1"></Col>
                            <Col md="10" className="text-align-left pt-4 pl-4">
                                <Button className="btn-grey" size="md" block onClick={() => this.props.login(this.state.email, this.state.password)}><FormattedMessage id="login.loginBtn" defaultMessage="LOGIN" /></Button>

                            </Col>
                            <Col md="1"></Col>
                        </Row>

                        <Row>
                            <Col md="1"></Col>
                            <Col md="10" className="pt-4 register-link pl-4">
                                <span><FormattedMessage id="login.notRegisteredYet" defaultMessage="Not registered yet?" /></span><a className="register-info" href="/register"><FormattedMessage id="login.registerNow" defaultMessage="Register now" /></a>
                            </Col>
                            <Col md="1"></Col>
                        </Row>
                    </AvForm>
                    </Col>
                    <Col md="4"></Col>
                </Row>
            </div>
        );
    }
}

export default LoginForm;