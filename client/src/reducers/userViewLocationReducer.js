import { USER_VIEW_LOCATION } from '../actions/types';

export default function(state = [], action) {
	switch (action.type) {
		case USER_VIEW_LOCATION:
			return action.payload;
		default:
			return state;
	}
}
