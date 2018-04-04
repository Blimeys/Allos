import { USER_CATEGORY_FILTER } from '../actions/types';

export default function(state = null, action) {
	switch (action.type) {
		case USER_CATEGORY_FILTER:
			return action.payload;
		default:
			return state;
	}
}
