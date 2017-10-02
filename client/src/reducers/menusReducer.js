import { FETCH_MENUS } from '../actions/types';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_MENUS:
			return action.payload;

		default:
			return state;
	}
}
