import { ALLERGY_SELECTOR, RESET_ALLERGY_SELECTOR } from '../../actions/types';

export default function(state = [], action) {
	switch (action.type) {
		case ALLERGY_SELECTOR:
			if (state.indexOf(action.payload) === undefined) {
				return null;
			}
			return [...state, action.payload];
		case RESET_ALLERGY_SELECTOR:
			state = [];
			return state;
		default:
			return state;
	}
}
