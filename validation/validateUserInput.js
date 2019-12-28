const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateUserInput(data) {
	let errors = {};

	data.name = !isEmpty(data.name) ? data.name : '';
	data.email = !isEmpty(data.email) ? data.email : '';
	data.number = !isEmpty(data.number) ? data.number : '';

	if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
		errors.name = 'Name Must be between 2 and 30 characters';
	}
	if (Validator.isEmpty(data.name)) {
		errors.name = 'Name Field Is Required';
	}
	if (!Validator.isEmail(data.email)) {
		errors.email = 'Email is Invalid';
	}
	if (Validator.isEmpty(data.email)) {
		errors.email = 'Email Field Is Required';
	}
	if (!Validator.isLength(data.number, { min: 10, max: 10 })) {
		errors.number = 'Must be 10 number';
	}
	if (!Validator.isNumeric(data.number)) {
		errors.number = 'Must be a number';
	}
	if (Validator.isEmpty(data.number)) {
		errors.number = 'Number Field is Required';
	}
	return {
		errors,
		isValid: isEmpty(errors),
	};
};
