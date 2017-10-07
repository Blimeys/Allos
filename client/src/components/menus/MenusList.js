import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchMenus, deleteMenuItem } from '../../actions';

// import LocationList from './LocationList';

class MenusList extends Component {
	constructor() {
		super();
		// const allergies = {
		// 	gluten:false,
		// 	crustacean: false,
		// 	egg: false,
		// 	fish: false,
		// 	peanut: false,
		// 	soybean: false,
		// 	milk: false,
		// 	nuts: false,
		// 	celery: false,
		// 	mustard: false,
		// 	sesame: false,
		// 	sulphite: false,
		// 	lupin: false,
		// 	mollusc: false
		// }

		this.state = { location: null, category: false };
	}
	componentDidMount() {
		this.props.fetchMenus();
		// const allergens = [
		// 'gluten',
		// 'crustacean',
		// 'egg',
		// 'fish',
		// 'peanut',
		// 'soybean',
		// 'milk',
		// 'nuts',
		// 'celery',
		// 'mustard',
		// 'sesame',
		// 'sulphite',
		// 'lupin',
		// 'mollusc'
		// ];
	}
	componentDidUpdate() {
		this.props.fetchMenus();
	}
	handleLocation(location) {
		this.setState({ location: location });
		console.log(this.state.location);
	}
	handleCategory(category) {
		this.setState({ category: category });
		console.log(this.state.category);
	}
	renderCategories() {
		const categories = [];
		this.props.menus.reverse().map(menu => {
			return categories.push(menu.category);
		});
		var newCategories = [...new Set(categories)];
		return newCategories.map(category => {
			return (
				<button
					key={category}
					if={category}
					onClick={this.handleCategory.bind(this, category)}
				>
					{category}
				</button>
			);
		});
	}
	renderLocations() {
		const locations = [];
		this.props.menus.reverse().map(menu => {
			return locations.push(menu.location);
		});
		var newLocations = [...new Set(locations)];
		return newLocations.map(location => {
			return (
				<button
					key={location}
					id={location}
					onClick={this.handleLocation.bind(this, location)}
				>
					{location}
				</button>
			);
		});
	}

	renderMenus() {
		return this.props.menus.reverse().map(menu => {
			if (menu.location === this.state.location) {
				if (!this.state.category) {
					return (
						<div key={menu._id} id={(menu.location, menu.category)}>
							<div>
								<h2>
									{menu.title}
								</h2>
								<p>
									{menu.description}
								</p>
								<ul>
									{menu.gluten ? <li>gluten</li> : null}
									{menu.crustacean ? <li>crustacean</li> : null}
									{menu.egg ? <li>egg</li> : null}
									{menu.fish ? <li>fish</li> : null}
									{menu.peanut ? <li>peanut</li> : null}
									{menu.soybean ? <li>soybean</li> : null}
									{menu.milk ? <li>milk</li> : null}
									{menu.nuts ? <li>nuts</li> : null}
									{menu.celery ? <li>mustard</li> : null}
									{menu.sesame ? <li>sesame</li> : null}
									{menu.sulphite ? <li>sulphite</li> : null}
									{menu.lupin ? <li>lupin</li> : null}
									{menu.mollusc ? <li>mollusc</li> : null}
								</ul>
							</div>
							<button onClick={deleteMenuItem(menu)}>delete</button>
						</div>
					);
				} else {
					if (menu.category === this.state.category) {
						return (
							<div key={menu._id} id={(menu.location, menu.category)}>
								<div>
									<h2>
										{menu.title}
									</h2>
									<p>
										{menu.description}
									</p>
									<ul>
										{menu.gluten ? <li>gluten</li> : null}
										{menu.crustacean ? <li>crustacean</li> : null}
										{menu.egg ? <li>egg</li> : null}
										{menu.fish ? <li>fish</li> : null}
										{menu.peanut ? <li>peanut</li> : null}
										{menu.soybean ? <li>soybean</li> : null}
										{menu.milk ? <li>milk</li> : null}
										{menu.nuts ? <li>nuts</li> : null}
										{menu.celery ? <li>mustard</li> : null}
										{menu.sesame ? <li>sesame</li> : null}
										{menu.sulphite ? <li>sulphite</li> : null}
										{menu.lupin ? <li>lupin</li> : null}
										{menu.mollusc ? <li>mollusc</li> : null}
									</ul>
								</div>
								<button onClick={deleteMenuItem(menu)}>delete</button>
							</div>
						);
					}
				}
			}
			return null;
		});
	}
	render() {
		return (
			<div>
				{/* implement location list */}
				{/* <LocationList /> */}
				<h1>Locations</h1>
				{this.renderLocations()}
				<h1>Categories</h1>
				{this.renderCategories()}
				<h1>Menus Items</h1>
				{this.renderMenus(this.state.location)}
			</div>
		);
	}
}

function mapStatToProps({ menus }) {
	return { menus };
}

export default connect(mapStatToProps, { fetchMenus, deleteMenuItem })(
	MenusList
);
