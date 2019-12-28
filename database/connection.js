const mysql = require('mysql');
const { host, user, password } = require('./config/keys');

const con = mysql.createConnection({
	host: host,
	user: user,
	password: password,
});

module.exports = con;
