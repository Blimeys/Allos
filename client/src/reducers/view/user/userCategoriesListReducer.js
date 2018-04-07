import { USER_INIT_CATEGORY_LIST } from '../../../actions/types';

export default function(state = [], action) {
	switch (action.type) {
		case USER_INIT_CATEGORY_LIST:
			return action.payload;
		default:
			return state;
	}
}
