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
	app.post('/api/menu/edit', requireLogin, async (req, res) => {
		const {
			location,
			category,
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
			_id
		} = req.body;
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
			_id: req.body._id
		});
		try {
			editItem = await Menu.findOneAndUpdate({ _id: req.body._id }).save();
			return;
		} catch (err) {
			res.status(200).send(err);
		}
	});
	app.post('/api/menus/delete', requireLogin, async (req, res) => {
		const {
			location,
			category,
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
			_id
		} = req.body;

		const menu = new Menu({
			location,
			title,
			description,
			_user: req.user.id,
			_id: req.body._id
		});
		try {
			const removeItem = await Menu.findOneAndRemove({
				_id: req.body._id
			}).remove();

			return;
		} catch (err) {
			res.status(422).send(err);
		}
	});
	app.post('/api/menus', requireLogin, async (req, res) => {
		const {
			location,
			title,
			category,
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
			_user
		} = req.body;
		const menu = new Menu({
			location,
			title,
			category,
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
			_user: req.user.id
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
