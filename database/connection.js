const mysql = require('mysql');
const data = require('../config/keys');

module.exports = con1 = mysql.createConnection({
	host: data.host,
	user: data.user,
	password: data.password,
});
