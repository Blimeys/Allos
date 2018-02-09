const mongoose = require('mongoose');
const { Schema } = mongoose;

const MenusPublicSchema = new Schema({
	location: String,
	_user: { type: Schema.Types.ObjectId, ref: 'User' },
	title: String,
	category: String,
	description: String,
	gluten: Boolean,
	crustacean: Boolean,
	egg: Boolean,
	fish: Boolean,
	peanut: Boolean,
	soybean: Boolean,
	milk: Boolean,
	nuts: Boolean,
	celery: Boolean,
	mustard: Boolean,
	sesame: Boolean,
	sulphite: Boolean,
	lupin: Boolean,
	mollusc: Boolean
});

mongoose.model('menuspublic', MenusPublicSchema);
