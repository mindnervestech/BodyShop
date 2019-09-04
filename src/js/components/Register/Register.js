import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Form, FormGroup, Label, Input, Button, Row, Col, Breadcrumb, BreadcrumbItem, CustomInput } from 'reactstrap';
import "./Register.css";
class Register extends Component {


	handleAddAddress = () => {
		console.log('add button clicked----');
		document.getElementById("address-btn-add").style.display="none";
		document.getElementById("address-btn-remove").style.display="block";
		document.getElementById("addressForm").style.display="block";
    	// this.setState({
     //  		measurments: this.state.measurments.concat([{ measuringUnitName: "", measuringUnitId: "" }])
    	// });
	};

	handleRemoveAddress = () => {
		console.log('remove button clicked----');
		document.getElementById("address-btn-remove").style.display="none";
		document.getElementById("address-btn-add").style.display="block";
		document.getElementById("addressForm").style.display="none";
    	// this.setState({
     //  		measurments: this.state.measurments.concat([{ measuringUnitName: "", measuringUnitId: "" }])
    	// });
	};

	render() {
		return(
			<div className="register">
				<div className="display-inline register-container">
					<Row>
						<Col md="12">
							<Row>
								<Col md="3"></Col>

								<Col md="5">
									 <div className="header4 signup-title text-align-center">
                                            <span><FormattedMessage id="login.Title" defaultMessage="LOGIN OR REGISTER" /></span>
                                     </div>

                                     <Row>
                                        <Col md="1"></Col>
                                        <Col md="4" className="pt-2">
                                             <Button color="secondary" size="md" block>LOGIN</Button>
                                        </Col>
                                        <Col md="4" className="pt-2">
                                             <Button color="primary" size="md" block>REGISTER</Button>
                                        </Col>
                                        <Col md="2"></Col>
                                      </Row>
								</Col>

								<Col md="3"></Col>
							</Row>

							<Form><Row>
								<Col md="12">
									<Row>
										<Col md="2"></Col>
										<Col md="8">
											
												<Row>
													<Col md="4">
														<FormGroup>
															<Label for="registerTitleLabel">Title</Label>
															<Input type="select" name="title" id="registerTitle">
																<option>Select</option>
													            <option>None</option>
													            <option>Mr</option>
													            <option>Mrs</option>
													            <option>Ms</option>
													            <option>Miss</option>
													            <option>Doctor</option>
															</Input>
														</FormGroup>

														<FormGroup>
															<Label for="registerFirstNameLabel">FirstName</Label>
															<Input type="text" name="firstName" id="registerFirstName" />
														</FormGroup>

														<FormGroup>
															<Label for="registerLastNameLabel">LastName</Label>
															<Input type="text" name="lastName" id="registerLastName" />
														</FormGroup>
													</Col>
													<Col md="2"></Col>
													<Col md="4"> </Col>
												</Row>

												<Row>
													<Col md="4">
														<FormGroup>
															<Label for="registerEmailLabel">Email address</Label>
															<Input type="email" name="email" id="registerEmail" />
														</FormGroup>

														<FormGroup>
															<Label for="registerConfirmEmailLabel">Confirm Email address</Label>
															<Input type="email" name="ConfirmEmail" id="registerConfirmEmail" />
														</FormGroup>
													</Col>
													<Col md="2"></Col>
													<Col md="4" className="tncCheckmark">
														<FormGroup>
															<CustomInput type="checkbox" id="registerCheckout" name="checkout" label="YES, I WANT TO JOIN" />
															<Label for="registerCheckoutLabel">
																<p>
																	Tick to confirm that you are over the age of 16 and that you have read and agreed to the Love Your Body™ Club <a href="#">Terms and Conditions.</a>
																</p>
															</Label>
            											</FormGroup>
													</Col>
												</Row>

												<Row>
													<Col md="4">
														<FormGroup>
															<Label for="registerPasswordLabel">Password</Label>
															<Input type="password" name="password" id="registerPassword" />
														</FormGroup>

														<FormGroup>
															<Label for="registerConfirmPasswordLabel">Confirm Password</Label>
															<Input type="password" name="confirmPassword" id="registerConfirmPassword" />
														</FormGroup>
													</Col>
													<Col md="2"></Col>
													<Col md="4">
														<Row className="pt-4">
														<Label for="registerPostCodeLabel">Postcode (optional)</Label>
															<Col md="6">
																<FormGroup>
																	
																	<Input className="width-75" type="text" name="postcode" id="registerPostcode" />
																</FormGroup>
															</Col>

															
															<Button className="addressBtn" color="secondary" size="md" >FIND ADDRESS</Button>

															<span className="w-100 text-align-center"><b>OR</b></span>
															
															<Col className="mt-2">
																<Button
																	id="address-btn-add" 
																	type="button"
																	color="secondary"
																	size="md"
																	onClick={this.handleAddAddress}
																	block>
																		MANUALLY ENTER YOUR ADDRESS
																</Button>

																<Button
																	id="address-btn-remove" 
																	type="button"
																	color="secondary"
																	size="md"
																	onClick={this.handleRemoveAddress}
																	style={{display:"none"}}
																	block>
																		HIDE ADDRESS Form
																</Button>
															</Col>																
														</Row>

														<div id="addressForm" style={{display:"none"}}>
															<Row className="pt-2">
																<Col>
																	<FormGroup>
																		<Label for="registerAddress1Label">Address Line 1</Label>
																		<Input type="text" name="address1" id="registerAddress1" />
																	</FormGroup>

																	<FormGroup>
																		<Label for="registerAddress2Label">Address Line 2 (optional)</Label>
																		<Input type="text" name="address2" id="registerAddress2" />
																	</FormGroup>

																	<FormGroup>
																		<Label for="registerCityLabel">Town / City</Label>
																		<Input type="text" name="city" id="registerCity" />
																	</FormGroup>

																	<FormGroup>
																		<Label for="registerPostcodeLabel">Postcode</Label>
																		<Input type="text" name="postcode" id="registerPostcode" />
																	</FormGroup>

																	<FormGroup>
																		<Label for="registerCountryLabel">Country</Label>
																		<Input type="text" name="country" id="registerCountry" readOnly  value="United Kingdom"/>
																	</FormGroup>

																	<FormGroup>
																		<Label for="registerCountyLabel">County (optional)</Label>
																		<Input type="text" name="county" id="registerCounty" />
																	</FormGroup>
																</Col>
															</Row>
														</div>
													</Col>
												</Row>												

												<Row>
													<Col md="4">
														<FormGroup>
												          <Label for="registerGender">Gender</Label>
												          <div>
												          	<Row>										          		
												          			<Col md="4"><CustomInput type="radio" id="female" name="gender" label="Female" /></Col>
												            		<Col md="5"><CustomInput type="radio" id="male" name="gender" label="Male" /></Col>										          		
												          	</Row>										            
												            <CustomInput type="radio" id="unspecified" name="gender" label="Unspecified" />
												          </div>
												        </FormGroup>
													</Col>
													<Col md="2"></Col>
													<Col md="4">
														<FormGroup>															
															<Label for="registerUpdateLabel" className="pt-4">
																<p>
																	Yes, please sign me up for exclusive news, updates and offers from The Body Shop by
																</p>
															</Label>

															<div>
												          		<Row>										          		
												          			<Col md="4"><CustomInput type="checkbox" id="registerUpdateNewsemail" name="email" label="Email" /></Col>
												            		<Col md="5"><CustomInput type="checkbox" id="registerUpdateNewssms" name="sms" label="SMS" /></Col>										          		
												          		</Row>										            
												            	<CustomInput type="checkbox" id="registerUpdateNewspostal" name="postal" label="Postal" />
												          	</div>															
            											</FormGroup>
													</Col>
												</Row>

										        <Row>
										        	<Col md="4">
										        		<FormGroup>
												          <Label for="registerDate">Date</Label>
												          <Input
												            type="date"
												            name="date"
												            id="registerDate"
												            placeholder="date"
												          />
												        </FormGroup>
										        	</Col>
													<Col md="2"></Col>
										        	<Col md="4">
										        		<FormGroup>
															<CustomInput className="pt-2" type="checkbox" id="registertncCheckbox" name="tnc" >
															<Label for="registerCheckoutLabel">
																<p>
																		I confirm that I am over the age of 16 and have read and agreed to the <a href="#">Terms of Service</a> 
																</p>
															</Label>
															</CustomInput>
            											</FormGroup>
										        	</Col>
										        </Row>

										        <Row>
										        	<Col md="4">
											        	<FormGroup>
															<Label for="registerMobileLabel">Mobile (optional)</Label>
															<Input type="text" name="Mobile" id="registerMobile" />
														</FormGroup>
										        	</Col>
													<Col md="2"></Col>
										        	<Col md="4"><Button color="secondary" size="md" block>REGISTER</Button></Col>
										        </Row>

										        <Row>
										        	<Col md="4"></Col>
													<Col md="2"></Col>
										        	<Col md="4">
										        		<span>
										        			We will use your information to manage your account and requests and for research and analytics. We may share your information with trusted parties acting on our behalf and other The Body Shop companies. For further information on how we treat your personal information, please see our <a href="#">Privacy Notice</a> 
										        		</span>
										        	</Col>
										        </Row>
											
										</Col>
									</Row>
								</Col>
								
							</Row></Form>
						</Col>
					</Row>
				</div>
			</div>
		);
	}

} 
export default Register;