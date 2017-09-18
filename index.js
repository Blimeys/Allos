const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('Hello');
});
app.get('/api/', (req, res) => {
	res.send('Api loc');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
