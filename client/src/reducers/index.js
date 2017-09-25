import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import menusReducer from './menusReducer';

export default combineReducers({
	auth: authReducer,
	form: reduxForm,
	menus: menusReducer
});
