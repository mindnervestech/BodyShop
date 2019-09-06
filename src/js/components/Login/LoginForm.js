import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Row, Col, Breadcrumb, BreadcrumbItem  } from 'reactstrap';
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
                    <Form>
                        <Row>
                            <Col md="1"></Col>
                            <Col md="10" className="text-align-left pt-4 pl-4">
                                <FormGroup>
                                    <Label for="loginEmailLabel"><b>Email address</b></Label>
                                    <Input type="email" name="email" value={this.state.email} size="40" maxLength="100" onChange={this.onChangeCredintials}/>
                                </FormGroup>
                            </Col>
                            <Col md="1"></Col>
                        </Row>

                        <Row>
                            <Col md="1"></Col>
                            <Col md="10" className="text-align-left pl-4">
                                <FormGroup>
                                    <Label for="loginPasswordLabel"><b>Password</b></Label>
                                    <Input type="password" name="password" size="40" maxLength="100" value={this.state.password} onChange={this.onChangeCredintials}/>
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
                                <Button className="btn-grey" size="md" block onClick={() => this.props.login(this.state.email, this.state.password)}>LOGIN</Button>
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
        );
    }
}

export default LoginForm;