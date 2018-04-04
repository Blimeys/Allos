const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const UserLocations = mongoose.model('userLocations');

module.exports = app => {
	app.get('/api/userlocations', requireLogin, async (req, res) => {
		const users = await UserLocations.find(
			{ _user: req.user.id },
			{ _user: 0 }
		).select();
		res.send(users);
	});
	app.post('/api/new/userlocations', requireLogin, async (req, res) => {
		console.log(req.body)
		const { location, streetAddress, description, externalUrl, _user } = req.body;
		const existingLocation = await UserLocations.find({
			location: req.body.location
		});
		try {
			await existingLocation;
			if (existingLocation[0]) {
				console.log({ error: true });
				return res.json({ error: 'location already exists' });
			} else {
				const userLocation = new UserLocations({
					location: req.body.location,
					externalUrl: req.body.externalUrl,
					description: req.body.description,
					streetAddress: req.body.streetAddress,
					_user: req.user.id
				});
				try {
					await userLocation.save();
					const user = await req.user.save();

					res.send(user);
				} catch (err) {
					res.status(422).send(err);
				}
			}
		} catch (err) {
			res.status(422).send(err);
		}
	});
	app.post('/api/userlocations', requireLogin, async (req, res) => {
		const { location, _user } = req.body;
		const existingLocation = await UserLocations.find({
			location: req.body.location
		});

		try {
			await existingLocation;
			if (existingLocation[0]) {
				console.log({ error: true });
				return res.json({ error: 'location already exists' });
			} else {
				try {
					res.json({ success: 'location do not exists' });
				} catch (err) {
					res.status(422).send(err);
				}
			}
		} catch (err) {
			res.status(422).send(err);
		}
	});
};
