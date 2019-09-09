import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Row, Col, Breadcrumb, BreadcrumbItem, CustomInput } from 'reactstrap';
import '../../../styles/Register/Register.css';

class RegisterForm extends Component {
	handleAddAddress = () => {
		document.getElementById("address-btn-add").style.display="none";
		document.getElementById("address-btn-remove").style.display="block";
		document.getElementById("addressForm").style.display="block";
	};

	handleRemoveAddress = () => {
		document.getElementById("address-btn-remove").style.display="none";
		document.getElementById("address-btn-add").style.display="block";
		document.getElementById("addressForm").style.display="none";
	};

	render() {
		return(
			<div>
					<Row>
						<Col md="12" className="text-align-left">
							<Form>
								<Row>
									<Col md="6">
										<Row>
											<Col md="4"></Col>
											<Col md="8">
												<Row>
										<Col md="9">
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
													<Label for="registerEmailLabel">Email address</Label>
													<Input type="email" name="email" id="registerEmail" />
												</FormGroup>

												<FormGroup>
													<Label for="registerConfirmEmailLabel">Confirm Email address</Label>
													<Input type="email" name="ConfirmEmail" id="registerConfirmEmail" />
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
											<CustomInput className="register-info" type="checkbox" id="registerCheckout" name="checkout" label="YES, I WANT TO JOIN" />
											<Label for="registerCheckoutLabel">
												<p className="register-info-size">
													Tick to confirm that you are over the age of 16 and that you have read and agreed to the Love Your Body™ Club <a href="#">Terms and Conditions.</a>
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
													<Label for="registerPasswordLabel">Password</Label>
													<Input type="password" name="password" id="registerPassword" />
												</FormGroup>

												<FormGroup>
													<Label for="registerConfirmPasswordLabel">Confirm Password</Label>
													<Input type="password" name="confirmPassword" id="registerConfirmPassword" />
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
															<Col md="6">
																<Row className="pt-4">
																	<Col>
																		<FormGroup>
													<Label for="registerPostCodeLabel">Postcode (optional)</Label>
													<Input className="width-75" type="text" name="postcode" id="registerPostcode" />
												</FormGroup>
																	</Col>
																	<Button className="btntopMargin" color="secondary" size="md" >FIND ADDRESS</Button>

																	<span className="w-100 text-align-center"><b>OR</b></span>

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
										</Row>
															</Col>
															<Col md="2"></Col>
														</Row>

														<Row>
															<Col md="2"></Col>
															<Col className="pl-0 pr-0">
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
															<Col md="4"></Col>
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
															<Label for="registerGender">Gender</Label>
															<div>
																<Row>										          		
																		<Col md="4"><CustomInput type="radio" id="female" name="gender" label="Female" /></Col>
																		<Col md="5"><CustomInput type="radio" id="male" name="gender" label="Male" /></Col>										          		
																</Row>										            
																<CustomInput type="radio" id="unspecified" name="gender" label="Unspecified" />
															</div>
														</FormGroup>

														<FormGroup className="mt-5">
															<Label for="registerDate">Date</Label>
															<Input
																type="date"
																name="date"
																id="registerDate"
																placeholder="date"
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
															<Col md="6">
																<FormGroup>															
											<Label for="registerUpdateLabel" className="pt-4">
												<p className="updatesNews">
													<b>Yes, please sign me up for exclusive news, updates and offers from The Body Shop by</b>
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

												<FormGroup>
											<CustomInput className="pt-2" type="checkbox" id="registertncCheckbox" name="tnc" >
												<Label for="registerCheckoutLabel">
													<p className="updatesNews">
															I confirm that I am over the age of 16 and have read and agreed to the <a className="register-info" href="#">Terms of Service</a> 
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
														<Row>
															<Col md="4"></Col>
															<Col md="8">
																<Row>
											<Col md="9">
												<FormGroup>
													<Label for="registerMobileLabel">Mobile (optional)</Label>
													<Input type="text" name="Mobile" id="registerMobile" />
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
											<Col md="6" className="mt-3">
												<Button className="btn-grey" size="md" block>REGISTER</Button>
											</Col>
											<Col md="2"></Col>
										</Row>
									</Col>
								</Row>
							</Form>
						</Col>
					</Row>
			</div>
		);
	}
}
export default RegisterForm;