const express = require('express');
const mysql = require('mysql');
const router = express.Router();

// Config
const keys = require('../config/keys');
const queries = require('../config/queries');

// Models
const con = require('../database/connection');

const validateUserInput = require('../validation/validateUserInput');

router.get('/', (req, res) => {
	res.json({ error: 'use post method' });
});

// ROUTE		/register/
// METHOD		POST
// ACCESS 		public
router.post('/', (req, res) => {
	const { errors, isValid } = validateUserInput(req.body);

	let user = {
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		username: req.body.username,
		email: req.body.email,
		country: req.body.country,
		state: req.body.state,
		zip: req.body.zip,
		aadhar: req.body.aadhar,
	};
	if (!isValid) {
		return res.status(400).json(errors);
	}

	con.connect(err => {
		if (err) console.log(err);
		console.log('Connected to mySQL');

		// Create Database
		con.query(queries.createDatabase, err => {
			if (err) console.log(err);
			con.changeUser({ database: keys.database }, err => console.log(err));
			console.log('Database created');

			// Create Table
			con.query(queries.createTable, err => {
				if (err) console.log(err);
				console.log('Table Created');

				// Insert Data
				con.query(queries.insertData, user, err => {
					if (err) console.log(err);
					console.log('Data inserted');
				});
			});
		});
	});
	res.send('Working');
});

module.exports = router;
