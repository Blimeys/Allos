const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Menu = mongoose.model('menus');

module.exports = app => {
	app.get('/api/menus', requireLogin, async (req, res) => {
		const menus = await Menu.find({ _user: req.user.id }).select();
		res.send(menus);
	});

	app.post('/api/menus', requireLogin, async (req, res) => {
		const {
			location,
			title,
			description,
			gluten,
			crustacean,
			egg,
			fish,
			peanut,
			soybean,
			milk,
			nuts,
			celery,
			mustard,
			sesame,
			sulphite,
			lupin,
			mollusc
		} = req.body;
		console.log(req.body);
		const menu = new Menu({
			location,
			title,
			description,
			gluten,
			crustacean,
			egg,
			fish,
			peanut,
			soybean,
			milk,
			nuts,
			celery,
			mustard,
			sesame,
			sulphite,
			lupin,
			mollusc,
			_user: req.user.id,
			dateCreated: Date.now()
		});

		try {
			await menu.save();
			const user = await req.user.save();

			res.send(user);
		} catch (err) {
			res.status(422).send(err);
		}
	});
};
