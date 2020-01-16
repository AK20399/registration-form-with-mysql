const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;

// ROUTES
const register = require('./routes/register');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.send('Use register');
});
app.use('/register', register);

app.listen(port, () => {
	console.log(`Server Running on ${port}`);
});
