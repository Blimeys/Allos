import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import menusReducer from './menusReducer';
import locationsReducer from './locationsReducer';
import filtersReducer from './filtersReducer';
import newData from './newData';
import publicMenusReducer from './public/publicMenusReducer';
import allergySelectorReducer from './public/allergySelectorReducer';
import filteredMenusReducer from './public/filteredMenusReducer';

export default combineReducers({
	auth: authReducer,
	form: reduxForm,
	menus: menusReducer,
	locations: locationsReducer,
	filters: filtersReducer,
	newData: newData,
	publicMenus: publicMenusReducer,
	allergySelector: allergySelectorReducer,
	filteredMenusData: filteredMenusReducer
});
