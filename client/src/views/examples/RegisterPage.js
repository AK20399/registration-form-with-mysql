import React, { Component } from 'react';
import './RegisterPage.css';
import axios from 'axios';

// Components
import InputGroup from '../../common/InputGroup';
import SelectGroup from '../../common/SelectGroup';

import lists from 'country-region-data';

// reactstrap components
import { Button, Card, Form, Container, Row, Col } from 'reactstrap';

// core components
import ExamplesNavbar from 'components/Navbars/ExamplesNavbar.js';

class RegisterPage extends Component {
	constructor(props) {
		super(props);

		let countryList = [];

		countryList = lists.map(country => {
			return country.countryName;
		});

		this.state = {
			firstname: '',
			lastname: '',
			username: '',
			email: '',
			countryList: countryList,
			country: 'Select Country',
			stateList: ['select Country First'],
			state: '',
			zip: '',
			aadhar: '',
			verified: false,
			dropdownOpen: false,
			errors: '',
		};
		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
		this.selectCountry = this.selectCountry.bind(this);
		this.selectState = this.selectState.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit(e) {
		e.preventDefault();
		const registrationData = {
			firstname: this.state.firstname,
			lastname: this.state.lastname,
			username: this.state.username,
			email: this.state.email,
			country: this.state.country,
			state: this.state.state,
			zip: this.state.zip,
			aadhar: this.state.aadhar,
		};

		axios
			.post('/register', registrationData)
			.then(res => {
				this.setState({ verified: true });
				setTimeout(() => {
					this.props.history.push('/index');
				}, 3000);
			})
			.catch(error => {
				console.log(error);
				console.log(error.response.data);
				this.setState({ errors: error.response.data });
			});
	}

	selectCountry(e) {
		this.setState({ country: e.target.value });
		let stateList;
		let country = e.target.value;
		let countryIndex = lists.findIndex(x => x.countryName === country);

		stateList = lists[countryIndex].regions.map(d => {
			return d.name;
		});
		this.setState({ stateList });
	}
	selectState(e) {
		this.setState({ state: e.target.value });
	}

	render() {
		let content;
		const { errors } = this.state;

		if (!this.state.verified) {
			content = (
				<Row>
					<Col className='ml-auto mr-auto'>
						<Card className='card-register ml-auto mr-auto'>
							<Form
								noValidate
								className='register-form'
								onSubmit={this.onSubmit}>
								{/* FirstName */}
								<InputGroup
									name='firstname'
									placeholder='Enter Your FirstName'
									value={this.state.firstname}
									onChange={this.onChange}
									errors={errors.firstname}
								/>
								{/* LastName */}
								<InputGroup
									name='lastname'
									placeholder='Enter Your LastName'
									value={this.state.lastname}
									onChange={this.onChange}
									errors={errors.lastname}
								/>
								{/* Username */}
								<InputGroup
									name='username'
									placeholder='Enter Your UserName'
									value={this.state.username}
									onChange={this.onChange}
									errors={errors.username}
								/>
								{/* Email */}
								<InputGroup
									name='email'
									placeholder='Enter Your Email'
									value={this.state.email}
									onChange={this.onChange}
									errors={errors.email}
								/>
								{/* Country */}
								<SelectGroup
									title='Country'
									onChange={this.selectCountry}
									list={this.state.countryList}
									errors={errors.country}
								/>
								{/* State */}
								<SelectGroup
									title='State'
									onChange={this.selectState}
									list={this.state.stateList}
									errors={errors.state}
								/>
								{/* <FormGroup>
									<span>
										<b>State</b>
									</span>
									<Input type='select' onChange={this.selectState}>
										{this.state.stateList.map(options => (
											<option key={options}>{options}</option>
										))}
									</Input>
									<FormFeedback>
										<b>{errors.state}</b>
									</FormFeedback>
								</FormGroup> */}

								{/* Zip */}
								<InputGroup
									name='zip'
									placeholder='Enter Your Zip'
									value={this.state.zip}
									onChange={this.onChange}
									errors={errors.zip}
								/>
								{/* aadhar */}
								<InputGroup
									name='aadhar'
									placeholder='Enter Your Aadhar'
									value={this.state.aadhar}
									onChange={this.onChange}
									errors={errors.aadhar}
								/>
								<Button className='btn-round' color='danger' size='lg' block>
									Register
								</Button>
							</Form>
						</Card>
					</Col>
				</Row>
			);
		} else {
			content = (
				<Card
					body
					// inverse
					color='success'>
					<h2 className='ml-auto mr-auto' style={{ marginBottom: '20px' }}>
						Registration Successful
					</h2>
				</Card>
			);
		}

		return (
			<>
				<ExamplesNavbar />
				<div
					className='page-header'
					style={{
						backgroundImage:
							'url(' + require('assets/img/login-image.jpg') + ')',
					}}>
					<div className='filter' />
					<Container>{content}</Container>
					<div className='footer register-footer text-center'>
						<h6>
							© {new Date().getFullYear()}, made with{' '}
							<i className='fa fa-heart heart' /> by BookMyMedia
						</h6>
					</div>
				</div>
			</>
		);
	}
}

export default RegisterPage;
