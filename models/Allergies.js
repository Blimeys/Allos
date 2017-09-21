const mongoose = require('mongoose');
const { Schema } = mongoose;

const AllergiesSchema = new Schema({
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

module.exports = AllergiesSchema;
