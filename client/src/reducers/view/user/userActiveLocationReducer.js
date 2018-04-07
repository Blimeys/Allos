import { USER_ACTIVE_LOCATION } from '../../../actions/types';

export default function(state = null, action) {
	switch (action.type) {
		case USER_ACTIVE_LOCATION:
			return action.payload;
		default:
			return state;
	}
}
