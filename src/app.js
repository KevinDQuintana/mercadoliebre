const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, '../', 'public')));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/signup', function (req, res) {
	// res.send('Funcionando');
	res.sendFile(path.join(__dirname, 'views', 'signup.html'));
});

app.post('/signup', function (req, res) {
	res.redirect('/');
});

app.get('/signin', function (req, res) {
	res.sendFile(path.join(__dirname, 'views', 'signin.html'));
});

app.post('/signin', function (req, res) {
	res.redirect('/');
});

app.listen(PORT, () => console.log(`server started at port: ${PORT}`));