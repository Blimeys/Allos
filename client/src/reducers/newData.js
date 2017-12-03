import { NEW_LOCATION } from '../actions/types';

export default function(state = [], action) {
	switch (action.type) {
		case NEW_LOCATION:
			return action.payload;
		default:
			return state;
	}
}
