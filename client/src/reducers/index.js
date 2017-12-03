import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import menusReducer from './menusReducer';
import locationsReducer from './locationsReducer';
import filtersReducer from './filtersReducer';
import newData from './newData';

export default combineReducers({
	auth: authReducer,
	form: reduxForm,
	menus: menusReducer,
	locations: locationsReducer,
	filters: filtersReducer,
	newData: newData
});
