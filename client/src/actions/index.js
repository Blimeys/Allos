import axios from 'axios';
import { FETCH_LOCATIONS, FILTER_LOCATIONS, USER_VIEW_LOCATION, USER_CATEGORY_FILTER, USER_ACTIVE_LOCATION, USER_ACTIVE_MENU } from './types';
import { FETCH_MENUS } from './public/types';
export * from './user/locationCreator.js';
export * from './auth/user.js';
export * from './public/publicMenus.js';
export * from './user/menusCreator.js';

export const fetchMenus = () => async dispatch => {
	const res = await axios.get('/api/menus');
	dispatch({ type: FETCH_MENUS, payload: res.data });
};

export const fetchLocations = () => async dispatch => {
	const res = await axios.get('/api/userlocations');
	dispatch({ type: FETCH_LOCATIONS, payload: res.data });
};
export const filterLocations = location => async dispatch => {
	dispatch({ type: FILTER_LOCATIONS, payload: location });
};

export const deleteMenuItem = values => async dispatch => {
	const res = await axios.post('/api/menus/delete', values);
	dispatch({ type: FETCH_MENUS, payload: res.data });
};
export const userViewLocation = userLocation => async dispatch =>{
	dispatch({type: USER_VIEW_LOCATION, payload: userLocation})
}
export const userCategoryFilter = category => async dispatch => {
	dispatch({type: USER_CATEGORY_FILTER, payload: category})
}
export const userActiveLocation = activeLocation => async dispatch => {
	dispatch({type: USER_ACTIVE_LOCATION, payload: activeLocation})
}
export const userActiveMenu = menus => async dispatch => {
	dispatch({type: USER_ACTIVE_MENU, payload: menus})
}
