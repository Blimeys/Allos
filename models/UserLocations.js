const mongoose = require('mongoose');
const { Schema } = mongoose;

const userLocationsSchema = new Schema({
	_user: { type: Schema.Types.ObjectId, ref: 'User' },
	locations: String
});

mongoose.model('userLocations', userLocationsSchema);
