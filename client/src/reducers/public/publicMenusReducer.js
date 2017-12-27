import { FETCH_PUBLIC_MENUS } from '../../actions/public/types';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_PUBLIC_MENUS:
			return action.payload;
		default:
			return state;
	}
}
