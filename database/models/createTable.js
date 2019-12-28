const con = require('../connection');

//Create Table
createTable = () => {
	var sql =
		'CREATE TABLE IF NOT EXISTS users (name VARCHAR(255), email VARCHAR(255),number VARCHAR(255))';

	con.query(sql, function(err, result) {
		if (err) console.log(err);
		else console.log('Table created');
	});
};

module.exports = createTable;
