import axios from 'axios';
import { FETCH_USER, FETCH_MENUS, FETCH_PUBLIC_MENUS } from './types';

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');
	console.log(res.data);
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchMenus = () => async dispatch => {
	const res = await axios.get('/api/menus');
	dispatch({ type: FETCH_MENUS, payload: res.data });
};
export const submitMenu = (values, history) => async dispatch => {
	const res = await axios.post('/api/menus', values);
	history.push('/home');
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchPublicMenus = currentPath => async dispatch => {
	const res = await axios.get('/api/public/' + currentPath);
	console.log(res.data.length);
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
