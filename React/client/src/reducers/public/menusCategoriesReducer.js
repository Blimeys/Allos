import { MENUS_CATEGORIES } from '../../actions/public/types';

export default function(state = [], action) {
	switch (action.type) {
		case MENUS_CATEGORIES:
			let categories = action.payload;
			categories.sort();
			let uniq = [...new Set(categories)];

			return uniq;
		default:
			return state;
	}
}
