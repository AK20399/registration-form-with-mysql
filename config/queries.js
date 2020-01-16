let queries = {
	createDatabase: 'CREATE DATABASE IF NOT EXISTS registrationNewFeature',
	createTable:
		'CREATE TABLE IF NOT EXISTS users(id INT AUTO_INCREMENT,firstname VARCHAR(255),lastname VARCHAR(255),username VARCHAR(255),email VARCHAR(255),country VARCHAR(255),state VARCHAR(255),zip INT(6),aadhar INT(12),PRIMARY KEY (id))',
	insertData: 'INSERT INTO users SET ?',
};
module.exports = queries;
