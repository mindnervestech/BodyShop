import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Row, Col, Breadcrumb, BreadcrumbItem, CustomInput , FormFeedback } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import '../../../styles/Register/Register.css';

class RegisterForm extends Component {

	constructor(props) {
		super(props);

		this.state = {
			
				firstName: '',
		        lastName: '',
		        email: '',
		        contactNumber: '',
		        carrierCode: '',
		        password: '',
		        confirmPassword: '',
		        currentStore: '1',


		        fields: {},
        		errors: {}
		        // errors: {
		        // 	firstName: false,
		        // 	lastName: false,
		        // }
		}

		this.handleValidation = this.handleValidation.bind(this);
	}

	
	

	onChangeCredintials = (e) => {
		
        	this.setState({ [e.target.name]: e.target.value });
    }

    cpasswordKeyPress = (e) => {
    		var pass = document.getElementById("registerPassword").value;
    		var cpass = document.getElementById("registerConfirmPassword").value;

    		if(pass.length < 8 || pass.length > 24) 
    			document.getElementById("password-message-display").style.display='block';
    		else{
    			if (!pass.match(/(?=^.{8,24}$)(?=.*\d)(?=.*[a-z])(?!.*\s)[0-9a-zA-Z!@#$%^&*()]*$$/)) 
    				document.getElementById("password-message-display").style.display='block';
	        	else
	        		document.getElementById("password-message-display").style.display='none';
    		}

    		if(cpass !=='') {
				if(pass !== cpass) 
					document.getElementById("message-display").style.display='block';
				else 
					document.getElementById("message-display").style.display='none';
			}
    }

	handleSubmit = (e) => {
		let result=this.handleValidation();
		if(result) {
			this.registerUser();
		}
	}
	
	handleValidation () {
		let errors = {};
		let { firstName, lastName, email, contactNumber, password, confirmPassword } = this.state;
    	let formIsValid = true;

    	
      	if (firstName !== "undefined") {
	        if (!firstName.match(/^[a-zA-Z ]*$/)) {
		          formIsValid = false;
		          errors["firstName"] = <FormattedMessage id="register.validation.firstName.invalid" defaultMessage="Please enter alphabet characters only." />;
	        }
	    }

      	if (lastName !== "undefined") {
	        if (lastName.match(/^[a-zA-Z ]*$/)) {
		          formIsValid = false;
		          errors["lastName"] = <FormattedMessage id="register.validation.lastName.invalid" defaultMessage="Please enter alphabet characters only." />;
	        }
	    }
	    
	    if (email !== "undefined") {
	        //regular expression for email validation
	        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	        if (!pattern.test(email)) {
	          formIsValid = false;
	          errors["email"] = <FormattedMessage id="register.validation.email.invalid" defaultMessage="Email address is not valid" />;
	        }
	     }
	    
        if (contactNumber !== "undefined") {
	        if (contactNumber.match(/^[0-9]{10}$/)) {
	          	formIsValid = false;
	          	errors["contactNumber"] = <FormattedMessage id="register.validation.contactNumber.invalid" defaultMessage="Mobile number is Invalid" />;
	        }
	    }

        if (password !== "undefined") {
	        if (password.match(/(?=^.{8,24}$)(?=.*\d)(?=.*[a-z])(?!.*\s)[0-9a-zA-Z!@#$%^&*()]*$/)) {
	          formIsValid = true;
	          //errors["password"] = <FormattedMessage id="register.validation.password.invalid" defaultMessage="Password must be atleast 8  and 24 characters long" />;
	        }
	        else
	        	formIsValid = false;
	      }

	    if (confirmPassword !== password ) {
	      formIsValid = false;
	      errors["confirmPassword"] = <FormattedMessage id="register.validation.confirmPassword.empty" defaultMessage="Passwords not matched" />;
	    }

	  this.setState({ errors: errors });
      return formIsValid;
	}

	registerUser = () => {
	    let quest_quote = "";
	    // if (this.props.guestUser.new_quote_id !== null) {
	    //   quest_quote = this.props.guestUser.new_quote_id;
	    // }


	    const data = {
	      firstname: this.state.firstName,
	      lastname: this.state.lastName,
	      contact_number: this.state.contactNumber,
	      email: this.state.email,
	      carrier_code: this.state.carrierCode,
	      password: this.state.password,
	      confirmpassword: this.state.confirmPassword,
	      // store_id: this.props.lobals.currentStore,
	      store_id: this.state.currentStore,

	      quest_quote: quest_quote
	      
	    }
	    this.props.register(data);
	}

	render() {
		return(
			<div>
				<Row>
					<Col md="12" className="text-align-left">
						
        				<AvForm onValidSubmit={this.handleSubmit}>
							<Row>
								<Col md="6">
									<Row>
										<Col md="4"></Col>
										<Col md="8">
											<Row>
                                                <Col md="9">                                                        
                                                    <FormGroup>
                                                        <Label for="registerFirstNameLabel"><FormattedMessage id="register.firstName" className="primary-tab-selected" defaultMessage="FirstName" /></Label>
                                                        <AvField type="text" name="firstName" id="registerFirstName" value={this.state.firstName} onChange={this.onChangeCredintials} 
                                                        validate={{
									                        required: { value: true, errorMessage: <FormattedMessage id="register.validation.firstName.empty" defaultMessage="First Name cannot be empty" /> },
									                        pattern: { value: /[a-zA-Z]/, errorMessage: <FormattedMessage id="register.validation.firstName.invalid" defaultMessage="First Name must be letters only" /> }
									                        }}
                                                        />
														
                                                    </FormGroup>
														
                                                    <FormGroup>
                                                        <Label for="registerLastNameLabel"><FormattedMessage id="register.lastName" className="primary-tab-selected" defaultMessage="LastName" /></Label>
                                                        <AvField type="text" name="lastName" id="registerLastName" value={this.state.lastName} onChange={this.onChangeCredintials} 
                                                        validate={{
									                        required: { value: true, errorMessage: <FormattedMessage id="register.validation.lastName.empty" defaultMessage="Last Name cannot be empty" /> },
									                        pattern: { value: /[a-zA-Z]/, errorMessage: <FormattedMessage id="register.validation.lastName.invalid" defaultMessage="Last Name must be letters only" /> }
									                        }}

                                                        />
                                                        
                                                    </FormGroup>

                                                    <FormGroup>
                                                        <Label for="registerEmailLabel"><FormattedMessage id="register.email" className="primary-tab-selected" defaultMessage="Email address" /></Label>
                                                        <AvField type="email" name="email" id="registerEmail" value={this.state.email} onChange={this.onChangeCredintials} 
                                                        validate={{
									                          required: { value: true, errorMessage: <FormattedMessage id="register.validation.email.empty" defaultMessage="Email address cannot be empty" /> },
									                          pattern: { value: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/, errorMessage: <FormattedMessage id="register.validation.email.invalid" defaultMessage="Email address is not valid" /> }
									                        }}

                                                        />
                                                    </FormGroup> 
                                                </Col>										
									            <Col md="2"> </Col>
											</Row>
										</Col>
									</Row>
								</Col>

                                <Col md="6">
                                    <Row>
                                        <Col md="2"></Col>
                                        <Col md="6"></Col>
                                        <Col md="2"></Col>
                                    </Row>
                                </Col>
							</Row>

							<Row>
								<Col md="6">
									<Row>
										<Col md="4"></Col>
										<Col md="8">
											<Row>
                                                <Col md="9">
                                                    <FormGroup>
                                                        <Label for="registerPasswordLabel"><FormattedMessage id="register.password" className="primary-tab-selected" defaultMessage="Password" /></Label>
                                                        <AvField type="password" name="password" id="registerPassword" value={this.state.password} onChange={this.onChangeCredintials} onKeyUp={this.cpasswordKeyPress}
                                                        validate={{
									                          required: { value: true, errorMessage: <FormattedMessage id="register.validation.password.empty" defaultMessage="Password cannot be empty" /> },
									                          pattern: { value: /[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]$/, errorMessage: <FormattedMessage id="register.validation.password.invalid" defaultMessage="Password must be atleast 8 and 24 characters long" /> }, 
									                          minLength: { value: 8, errorMessage: <FormattedMessage id="register.validation.password.invalid" defaultMessage="Password must be atleast 8 and 24 characters long" /> }, 
									                          maxlength: { value: 24, errorMessage: <FormattedMessage id="register.validation.password.invalid" defaultMessage="Password must be atleast 8 and 24 characters long" /> }
									                        }}
                                                        />
                                                        <span id="password-message-display" className="invalid-feedback"><FormattedMessage id="register.validation.password.minLength" defaultMessage="Password must be 8 and 24 characters long and must contain letters and numbers" /></span>
                                                    </FormGroup>

                                                    <FormGroup>
                                                        <Label for="registerConfirmPasswordLabel"><FormattedMessage id="register.confirmPassword" className="primary-tab-selected" defaultMessage="Confirm Password" /></Label>
                                                        <AvField type="password" name="confirmPassword" id="registerConfirmPassword" value={this.state.confirmPassword} onChange={this.onChangeCredintials} onKeyUp={this.cpasswordKeyPress}
                                                        validate={{
									                          required: { value: true, errorMessage: <FormattedMessage id="register.validation.password.empty" defaultMessage="Confirm Password cannot be empty" /> },
									                          pattern: { value: /[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]$/, errorMessage: <FormattedMessage id="register.validation.password.invalid" defaultMessage="Passwords not matched" /> }
									                        }}
                                                        />
                                                        <span id="message-display" className="invalid-feedback"><FormattedMessage id="register.validation.password.notMatched" defaultMessage="Passwords not matched" /></span>
                                                    </FormGroup>
                                                </Col>
											
											    <Col md="2"> </Col>
										    </Row>
										</Col>
									</Row>
								</Col>

								<Col md="6">
									<Row>
										<Col md="2"></Col>
										<Col md="6" className="tncCheckmark">
											<FormGroup>
                                                <CustomInput className="register-info" type="checkbox" id="registerCheckout" name="checkout"><Label><FormattedMessage id="register.wantToJoin" className="primary-tab-selected" defaultMessage="YES, I WANT TO JOIN" /></Label></CustomInput>
                                                <Label for="registerCheckoutLabel">
                                                    <p className="register-info-size">
                                                        <FormattedMessage id="register.termsNconditionsInfo" className="primary-tab-selected" defaultMessage="Tick to confirm that you are over the age of 16 and that you have read and agreed to the Love Your Body\99 Club" /> <a href="#"><FormattedMessage id="register.termsNconditions" className="primary-tab-selected" defaultMessage="Terms and Conditions." /></a>
                                                    </p>
                                                </Label>
											</FormGroup>
										</Col>
										<Col md="2"></Col>
									</Row>
								</Col>
							</Row>

							<Row>
								<Col md="6">
									<Row>
										<Col md="4"></Col>
                                        <Col md="8">
                                            <Row>
                                                <Col md="9">
                                                    <FormGroup>
                                                        <Label for="registerMobileLabel"><FormattedMessage id="register.mobile" className="primary-tab-selected" defaultMessage="Mobile" /></Label>
                                                        <AvField type="text" name="contactNumber" id="registerMobile" value={this.state.contactNumber} onChange={this.onChangeCredintials} 
                                                        validate={{
									                          required: { value: true, errorMessage: <FormattedMessage id="register.validation.contactNumber.empty" defaultMessage="Mobile number cannot be empty" /> },
									                          pattern: { value: /[0-9]/, errorMessage: <FormattedMessage id="register.validation.contactNumber.invalid" defaultMessage="Mobile number is Invalid" /> },
									                          minLength: { value :10, errorMessage: <FormattedMessage id="register.validation.contactNumber.invalid" defaultMessage="Mobile number is Invalid" /> },
									                          maxLength: { value :10, errorMessage: <FormattedMessage id="register.validation.contactNumber.invalid" defaultMessage="Mobile number is Invalid" /> }
									                        }}
                                                        />
                                                    </FormGroup>
                                                </Col>																			
                                            </Row>
                                        </Col>
									</Row>
								</Col>

								<Col md="6">
									<Row>
										<Col md="2"></Col>
										<Col md="6">
											<FormGroup>															
                                                <Label for="registerUpdateLabel" className="pt-4">
                                                    <p className="updatesNews">
                                                        <b><FormattedMessage id="register.news" className="primary-tab-selected" defaultMessage="Yes, please sign me up for exclusive news, updates and offers from The Body Shop by" /></b>
                                                    </p>
                                                </Label>

											    <div>
                                                    <Row>										          		
                                                        <Col md="4"><CustomInput type="checkbox" id="registerUpdateNewsemail" name="email"><FormattedMessage id="register.emailNews" className="primary-tab-selected" defaultMessage="Email" /></CustomInput></Col>
                                                        <Col md="5"><CustomInput type="checkbox" id="registerUpdateNewssms" name="sms"><FormattedMessage id="register.smsNews" className="primary-tab-selected" defaultMessage="SMS" /></CustomInput></Col>										          		
                                                    </Row>										            
                                                    <CustomInput type="checkbox" id="registerUpdateNewspostal" name="postal"><FormattedMessage id="register.postalNews" className="primary-tab-selected" defaultMessage="Postal" /></CustomInput>
                                                </div>															
											</FormGroup>

											<FormGroup>
                                                <CustomInput className="pt-2" type="checkbox" id="registertncCheckbox" name="tnc" >
                                                    <Label for="registerCheckoutLabel">
                                                        <p className="updatesNews">
                                                                <b><FormattedMessage id="register.overAge" className="primary-tab-selected" defaultMessage="I confirm that I am over the age of 16 and have read and agreed to the" /> <a className="register-info" href="#"><FormattedMessage id="register.termsNconditions" className="primary-tab-selected" defaultMessage="Terms and Conditions" /></a> </b>
                                                        </p>
                                                    </Label>
                                                </CustomInput>
											</FormGroup>
										</Col>
										<Col md="2"></Col>
									</Row>
								</Col>												
							</Row>

							<Row>
								<Col md="6">
									
								</Col>
								
							</Row>

							<Row>
								<Col md="6">
									<Row>
										<Col md="4"></Col>
										<Col md="8">
											<Row>                                                									
											    <Col md="2"> </Col>
										    </Row>
										</Col>
									</Row>
								</Col>
								<Col md="6">
                                    <Row>
                                        <Col md="2"></Col>
                                        <Col md="6" className="mt-3">
                                            <Button className="btn-grey" size="md" block onClick={this.handleSubmit} ><FormattedMessage id="register.register" className="primary-tab-selected" defaultMessage="REGISTER" /></Button>
                                        </Col>
                                        <Col md="2"></Col>
                                    </Row>

                                    <Row>
                                    	<Col md="2"></Col>
                                        <Col md="6" className="mt-3">
                                            <p className="updatesNews">
                                            	<b><FormattedMessage id="register.note" className="primary-tab-selected" defaultMessage="We will use your information to manage your account and requests and for research and analytics. We may share your information with trusted parties acting on our behalf and other The Body Shop companies. For further information on how we treat your personal information, please see our Privacy Notice" /> </b>
                                            </p>
                                        </Col>
                                        <Col md="2"></Col>
                                    </Row>
								</Col>
							</Row>
						</AvForm>
					</Col>
				</Row>
			</div>
		);
	}
}

export default RegisterForm;