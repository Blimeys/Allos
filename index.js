const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const passport = require('passport');
const bodyParser = require('body-parser');
const app = express();

require('./routes/authRoutes')(app);
mongoose.connect(keys.mongoURI);

app.use(bodyParser.json());
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
	res.send('Hello');
});
app.get('/api/', (req, res) => {
	res.send('Api loc');
});
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(_dirname, 'client', 'build', 'index.html'));
	});
}
const PORT = process.env.PORT || 5000;

app.listen(PORT);
