import { FILTERED_MENUS } from '../../actions/public/types';

export default function(state = [], action) {
	switch (action.type) {
		case FILTERED_MENUS:
			return action.payload;
		default:
			return state;
	}
}
