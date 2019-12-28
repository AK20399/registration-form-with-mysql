const express = require('express');
const router = express.Router();
const validateUserInput = require('../validation/validateUserInput');
const con = require('../database/connection');
const createDatabase = require('../database/models/createDatabase');
const createTable = require('../database/models/createTable');

router.get('/', (req, res) => {
	res.status(400).json({ error: 'Please Use Post Method' });
});

// ROUTE 	/register/
// METHOD 	POST
// ACCESS	public
router.post('/', (req, res) => {
	const { errors, isValid } = validateUserInput(req.body);

	const name = req.body.name;
	const email = req.body.email;
	const number = req.body.number;

	if (!isValid) {
		return res.status(400).json(errors);
	}

	createDatabase();
	createTable();
	console.log(`${name}${email}${number}`);

	// Insert data
	// let sql = `INSERT INTO users (name,email,number) VALUES ( '${name}','${email}','${number}' )`;
	// con.query(sql, function(err, result) {
	// 	if (err) console.log(err);
	// 	else console.log('1 record inserted');
	// });
});

module.exports = router;
