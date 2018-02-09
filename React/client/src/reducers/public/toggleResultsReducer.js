import { TOGGLE_RESULTS } from '../../actions/public/types';

export default function(state = [], action) {
	switch (action.type) {
		case TOGGLE_RESULTS:
			return action.payload;
		default:
			return false;
	}
}
