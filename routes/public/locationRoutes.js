const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');

const Menu = mongoose.model('menus');

module.exports = app => {
	app.get('/api/public/:location', async (req, res) => {
		location = req.params.location.split('_').join(' ');
		const menus = await Menu.find(
			{ location: location },
			{ _user: 0 }
		).select();
		if (menus.length == 0) {
			res.send('404');
		}
		res.send(menus);
	});
};
