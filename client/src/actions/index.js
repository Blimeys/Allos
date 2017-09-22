import axios from 'axios';
import { FETCH_USER, FETCH_MENUS } from './types';

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchMenus = () => async dispatch => {
	const res = await axios.get('/api/menus');
	dispatch({ type: FETCH_MENUS, payload: res.data });
};
export const submitMenu = (values, history) => async dispatch => {
	const res = await axios.post('/api/menus', values);
	history.push('/menus');
	dispatch({ type: FETCH_MENUS, payload: res.data });
};
