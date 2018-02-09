const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');

const Menu = mongoose.model('menus');

module.exports = app => {
	app.get('/api/public/:location', async (req, res) => {
		location = req.params.location.replace(/_/g, ' ');

		const menus = await Menu.find(
			{ location: location },
			{ _user: 0 }
		).select();
		if (menus.length == 0) {
			return res.json({ error: true });
		}
		return res.send(menus);
	});
};
