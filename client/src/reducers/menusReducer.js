import { FETCH_MENUS, FETCH_PUBLIC_MENUS } from '../actions/types';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_PUBLIC_MENUS:
			return action.payload;
		case FETCH_MENUS:
			return action.payload;

		default:
			return state;
	}
}
