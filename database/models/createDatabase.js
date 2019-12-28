const con = require('../connection');

// Create Database
createDatabase = () =>
	con.query('CREATE DATABASE mydb', function(err, result) {
		if (err) console.log(err);
		else console.log('Database created');
	});
con.connect(function(err) {
	console.log('Dtbse connected');
});

module.exports = createDatabase;
