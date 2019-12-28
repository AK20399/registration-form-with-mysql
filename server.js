const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const register = require('./route/register');

// Body Parser MiddleWare
app.use(
	bodyParser.urlencoded({
		extended: false,
	}),
);
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.send('Hello world');
});

// ROute for registration
app.use('/register', register);

app.listen(port, () => console.log(`Port running on ${port}`));
