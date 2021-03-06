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
import userViewLocationReducer from './userViewLocation';
import globalAllergensReducer from './globalAllergens';
import userActiveLocationReducer from './view/user/userActiveLocationReducer';
import userCategoryReducer from './userCategoryReducer';
import userCategoriesListReducer from './view/user/userCategoriesListReducer'
import userActiveMenusReducer from './view/user/userActiveMenuReducer'

export default combineReducers({
	auth: authReducer,
	form: reduxForm,
	menus: menusReducer,
	locations: locationsReducer,
	filters: filtersReducer,
	newData: newData,
	publicMenus: publicMenusReducer,
	allergySelector: allergySelectorReducer,
	filteredMenusData: filteredMenusReducer,
	userSelectLocation: userViewLocationReducer,
	globalAllergens: globalAllergensReducer,
	activeLocation: userActiveLocationReducer,
	activeCategory: userCategoryReducer,
	categoriesList: userCategoriesListReducer,
	activeMenuList: userActiveMenusReducer
});
