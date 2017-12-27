import { ALLERGY_SELECTOR, RESET_ALLERGY_SELECTOR } from '../../actions/types';

export default function(
	state = {
		gluten: true,
		crustacean: true,
		egg: true,
		fish: true,
		peanut: true,
		soybean: true,
		milk: true,
		nuts: true,
		celery: true,
		mustard: true,
		sesame: true,
		sulphite: true,
		lupin: true,
		mollusc: true
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
				gluten: true,
				crustacean: true,
				egg: true,
				fish: true,
				peanut: true,
				soybean: true,
				milk: true,
				nuts: true,
				celery: true,
				mustard: true,
				sesame: true,
				sulphite: true,
				lupin: true,
				mollusc: true
			};
			return { ...resetstate };

		default:
			return state;
	}
}
