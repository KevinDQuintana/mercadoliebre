const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'src', 'app.js'));
});

app.listen(PORT, () => console.log(`server started in port: ${port}`));