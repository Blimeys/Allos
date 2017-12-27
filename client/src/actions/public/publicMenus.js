import axios from 'axios';
import {
	FETCH_PUBLIC_MENUS,
	ALLERGY_SELECTOR,
	RESET_ALLERGY_SELECTOR
} from './types';

export const fetchPublicMenus = currentPath => async dispatch => {
	const res = await axios.get('/api/public/' + currentPath);
	dispatch({ type: FETCH_PUBLIC_MENUS, payload: res.data });
};

export const handleAllergy = allergy => async dispatch => {
	dispatch({ type: ALLERGY_SELECTOR, payload: allergy });
};
export const resetAllergy = () => async dispatch => {
	dispatch({ type: RESET_ALLERGY_SELECTOR, payload: [] });
};
