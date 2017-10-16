const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const UserLocations = mongoose.model('userLocations');

module.exports = app => {
	app.get('/api/userlocations', requireLogin, async (req, res) => {
		const users = await UserLocations.find({ _user: req.user.id }).select();
		res.send(users);
	});
	app.post('/api/userlocations', requireLogin, async (req, res) => {
		const { locations, _user } = req.body;
		const userLocation = new UserLocations({
			locations,
			_user: req.user.id
		});
		try {
			await userLocation.save();
			const user = await req.user.save();

			res.send(user);
		} catch (err) {
			res.status(422).send(err);
		}
	});
};
