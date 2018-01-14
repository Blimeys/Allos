import axios from 'axios';
import {
	FETCH_PUBLIC_MENUS,
	ALLERGY_SELECTOR,
	RESET_ALLERGY_SELECTOR,
	FILTERED_MENUS
} from './types';

export const fetchPublicMenus = currentPath => async dispatch => {
	const res = await axios.get('/api/public/' + currentPath);
	let menus = [];
	let formated = {};
	res.data.forEach(item => {
		if (!item.gluten) {
			item.gluten = false;
		}
		if (!item.crustacean) {
			item.crustacean = false;
		}
		if (!item.egg) {
			item.egg = false;
		}
		if (!item.fish) {
			item.fish = false;
		}
		if (!item.peanut) {
			item.peanut = false;
		}
		if (!item.soybean) {
			item.soybean = false;
		}
		if (!item.milk) {
			item.milk = false;
		}
		if (!item.nuts) {
			item.nuts = false;
		}
		if (!item.celery) {
			item.celery = false;
		}
		if (!item.mustard) {
			item.mustard = false;
		}
		if (!item.sesame) {
			item.sesame = false;
		}
		if (!item.sulphite) {
			item.sulphite = false;
		}
		if (!item.lupin) {
			item.lupin = false;
		}
		if (!item.mollusc) {
			item.mollusc = false;
		}
	});
	res.data.forEach(item => {
		formated = {
			title: item.title,
			_id: item._id,
			category: item.category,
			description: item.description,
			allergen: {
				celery: item.celery,
				crustacean: item.crustacean,
				egg: item.egg,
				fish: item.fish,
				gluten: item.gluten,
				lupin: item.lupin,
				milk: item.milk,
				mollusc: item.mollusc,
				mustard: item.mustard,
				nuts: item.nuts,
				peanut: item.peanut,
				sesame: item.sesame,
				soybean: item.soybean,
				sulphite: item.sulphite
			}
		};
		menus.push(formated);
	});

	dispatch({ type: FETCH_PUBLIC_MENUS, payload: menus });
};

export const handleAllergy = allergy => async dispatch => {
	dispatch({ type: ALLERGY_SELECTOR, payload: allergy });
};
export const resetAllergy = () => async dispatch => {
	dispatch({ type: RESET_ALLERGY_SELECTOR, payload: [] });
};

export const filteredMenus = menus => async dispatch => {
	dispatch({ type: FILTERED_MENUS, payload: menus });
};
