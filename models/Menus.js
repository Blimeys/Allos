const mongoose = require('mongoose');
const { Schema } = mongoose;
const AllergiesSchema = require('./Allergies');

const MenusSchema = new Schema({
	location: String,
	_user: { type: Schema.Types.ObjectId, ref: 'User' },
	title: String,
	description: String,
	allergies: [AllergiesSchema]
});

mongoose.model('menus', MenusSchema);
