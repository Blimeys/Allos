import { FILTER_LOCATIONS } from '../actions/types';

export default function(state = [], action) {
	switch (action.type) {
		case FILTER_LOCATIONS:
			return action.payload || false;
		default:
			return state;
	}
}
