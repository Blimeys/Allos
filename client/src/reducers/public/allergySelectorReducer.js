import { ALLERGY_SELECTOR, RESET_ALLERGY_SELECTOR } from '../../actions/types';
export default function(
	state = {
		gluten: false,
		crustacean: false,
		egg: false,
		fish: false,
		peanut: false,
		soybean: false,
		milk: false,
		nuts: false,
		celery: false,
		mustard: false,
		sesame: false,
		sulphite: false,
		lupin: false,
		mollusc: false
	},
	action
) {
	switch (action.type) {
		case ALLERGY_SELECTOR:
			var allergen = action.payload;
			state[allergen] = !state[allergen];
			return { ...state };
		case RESET_ALLERGY_SELECTOR:
			var resetstate = {
				gluten: false,
				crustacean: false,
				egg: false,
				fish: false,
				peanut: false,
				soybean: false,
				milk: false,
				nuts: false,
				celery: false,
				mustard: false,
				sesame: false,
				sulphite: false,
				lupin: false,
				mollusc: false
			};
			return { ...resetstate };

		default:
			return state;
	}
}
