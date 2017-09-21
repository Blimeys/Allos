import { combineReducers } from 'redux';
import authReducer from './authReducer';
import menusReducer from './menusReducer';

export default combineReducers({
	auth: authReducer,
	menus: menusReducer
});
