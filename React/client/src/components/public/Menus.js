// import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	fetchPublicMenus,
	filteredMenus,
	fetchMenusCategories
} from '../../actions';

class Menus extends Component {
	componentDidMount() {
		this.props.fetchPublicMenus(this.props.location);
		this.props.fetchMenusCategories(this.props.location);
	}
	componentDidUpdate() {}
	componentWillReceiveProps() {}
	initMenus() {
		if (!this.props.publicMenus.length || this.props.publicMenus.length === 0) {
			return false;
		} else if (
			Object.keys(this.props.allergySelector).every(
				key => this.props.allergySelector[key]
			)
		) {
			return false;
		} else {
			return true;
		}
	}
	hasAllergen() {
		let allergies = [];
		Object.keys(this.props.allergySelector).map(allergy => {
			if (this.props.allergySelector[allergy]) {
				return allergies.push(allergy);
			}
			return null;
		});
		if (allergies.length === 14) {
			allergies = [];
		}

		const results = this.props.publicMenus.filter(({ allergen }) =>
			allergies.every(key => allergen[key] !== this.props.allergySelector[key])
		);
		let categories = results.map(item => {
			return item.category;
		});
		return [...new Set(categories)].map(category => {
			return (
				<div key={category}>
					<h3>{category}</h3>
					{this.renderMenus(results, category.toLowerCase())}
				</div>
			);
		});
	}
	hasCategory(menus, category) {
		return menus.map(item => {
			if (item.category) {
				return true;
			}
			return false;
		});
	}
	renderMenus(results, category) {
		// let setCategories = [
		// 	'starter',
		// 	'starters',
		// 	'main course',
		// 	'main courses',
		// 	'side',
		// 	'sides',
		// 	'dessert',
		// 	'desserts'
		// ];
		return results.map(item => {
			const smallP = {
				fontSize: '10px'
			};
			if (item.category.toLowerCase() === category) {
				return (
					<div key={item._id}>
						<p>{item.title}</p>
						<p style={smallP}>{item.description}</p>
					</div>
				);
			}
			return null;
		});
	}

	render() {
		return (
			<div>
				{this.initMenus() ? (
					this.hasAllergen()
				) : (
					<h1>Nothing to see here ...</h1>
				)}
			</div>
		);
	}
}

function mapStateToProps({
	publicMenus,
	allergySelector,
	filteredMenusData,
	menusCategories
}) {
	return { publicMenus, allergySelector, filteredMenusData, menusCategories };
}

export default connect(mapStateToProps, {
	fetchPublicMenus,
	filteredMenus,
	fetchMenusCategories
})(Menus);
