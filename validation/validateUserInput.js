const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateUserInput(data) {
	let errors = {};

	data.firstname = !isEmpty(data.firstname) ? data.firstname : '';
	data.lastname = !isEmpty(data.lastname) ? data.lastname : '';
	data.username = !isEmpty(data.username) ? data.username : '';
	data.email = !isEmpty(data.email) ? data.email : '';
	data.country = !isEmpty(data.country) ? data.country : '';
	data.state = !isEmpty(data.state) ? data.state : '';
	data.zip = !isEmpty(data.zip) ? data.zip : '';
	data.aadhar = !isEmpty(data.aadhar) ? data.aadhar : '';

	// Firstname
	if (!Validator.isLength(data.firstname, { min: 3, max: 30 })) {
		errors.firstname = 'FirstName Must be between 3 and 30 characters';
	}
	if (Validator.isEmpty(data.firstname)) {
		errors.firstname = 'FirstName Field Is Required';
	}
	// Lastname
	if (!Validator.isLength(data.lastname, { min: 3, max: 30 })) {
		errors.lastname = 'LastName Must be between 3 and 30 characters';
	}
	if (Validator.isEmpty(data.lastname)) {
		errors.lastname = 'LastName Field Is Required';
	}
	// username
	if (!Validator.isLength(data.username, { min: 5, max: 30 })) {
		errors.username = 'Username Must be between 5 and 30 characters';
	}
	if (Validator.isEmpty(data.username)) {
		errors.username = 'Username Field Is Required';
	}
	// email
	if (!Validator.isEmail(data.email)) {
		errors.email = 'Email is Invalid';
	}
	if (Validator.isEmpty(data.email)) {
		errors.email = 'Email Field Is Required';
	}
	// country
	if (Validator.isEmpty(data.country)) {
		errors.country = 'Please Select Country';
	}
	// state
	if (Validator.isEmpty(data.state)) {
		errors.state = 'Please Select State';
	}
	// zip
	if (!Validator.isLength(data.zip, { min: 6, max: 6 })) {
		errors.zip = 'Must be 6 Number';
	}
	if (!Validator.isNumeric(data.zip)) {
		errors.zip = 'Must be a Number';
	}
	if (Validator.isEmpty(data.zip)) {
		errors.zip = 'Zip Field Is Required';
	}
	// aadhar
	if (!Validator.isLength(data.aadhar, { min: 12, max: 12 })) {
		errors.aadhar = 'Must be 12 Number';
	}
	if (!Validator.isNumeric(data.aadhar)) {
		errors.aadhar = 'Must be a Number';
	}
	if (Validator.isEmpty(data.aadhar)) {
		errors.aadhar = 'Number Field is Required';
	}

	return {
		errors,
		isValid: isEmpty(errors),
	};
};
