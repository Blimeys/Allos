import { USER_ACTIVE_MENU } from '../../../actions/types';

export default function(state = [], action) {
	switch (action.type) {
		case USER_ACTIVE_MENU:
			return action.payload;
		default:
			return state;
	}
}
