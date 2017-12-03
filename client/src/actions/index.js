import axios from 'axios';
import {
	FETCH_USER,
	FETCH_MENUS,
	FETCH_PUBLIC_MENUS,
	FETCH_LOCATIONS,
	FILTER_LOCATIONS
} from './types';
export * from './locationCreator.js';
export * from './user.js';

export const fetchMenus = () => async dispatch => {
	const res = await axios.get('/api/menus');
	dispatch({ type: FETCH_MENUS, payload: res.data });
};
export const submitMenu = (values, history) => async dispatch => {
	const res = await axios.post('/api/menus', values);
	history.push('/home');
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchLocations = () => async dispatch => {
	const res = await axios.get('/api/userlocations');
	dispatch({ type: FETCH_LOCATIONS, payload: res.data });
};
export const filterLocations = location => async dispatch => {
	dispatch({ type: FILTER_LOCATIONS, payload: location });
};
export const fetchPublicMenus = currentPath => async dispatch => {
	const res = await axios.get('/api/public/' + currentPath);
	dispatch({ type: FETCH_PUBLIC_MENUS, payload: res.data });
};

export const deleteMenuItem = values => async dispatch => {
	const res = await axios.post('/api/menus/delete', values);
	dispatch({ type: FETCH_MENUS, payload: res.data });
};
export const editMenuItem = (values, history) => async dispatch => {
	const res = await axios.post('api/menus/edit', values);
	dispatch({ type: FETCH_USER, payload: res.data });
};
