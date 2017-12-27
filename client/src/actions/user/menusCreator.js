import axios from 'axios';
import { FETCH_USER } from '../types';
export const submitMenu = (values, history) => async dispatch => {
	const res = await axios.post('/api/menus', values);
	history.push('/home');
	dispatch({ type: FETCH_USER, payload: res.data });
};
