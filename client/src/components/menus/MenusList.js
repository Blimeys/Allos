import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchMenus, deleteMenuItem } from '../../actions';

// import LocationList from './LocationList';

class MenusList extends Component {
	constructor() {
		super();
		this.state = { location: null, category: false, refresh: true };
	}
	componentDidMount() {
		this.props.fetchMenus();
	}

	// componentWillUpdate() {
	// 	this.props.fetchMenus();
	// }
	deleteAndRefresh(menu) {
		this.props.deleteMenuItem(menu);
		this.setState({ refresh: false });
		console.log(this.state.refresh);
		this.props.fetchMenus();
		this.setState({ location: null, category: false, refresh: true });
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
		if (this.state.refresh) {
			if (this.state.location) {
				const categories = [];
				this.props.menus.map(menu => {
					return categories.push(menu.category);
				});
				var newCategories = [...new Set(categories)];
				return newCategories.sort().map(category => {
					return (
						<button
							className="selector-small buttons-clickable"
							key={category}
							if={category}
							onClick={this.handleCategory.bind(this, category)}
						>
							{category}
						</button>
					);
				});
			}
		}
	}
	renderLocations() {
		if (this.state.refresh) {
			const locations = [];
			this.props.menus.reverse().map(menu => {
				return locations.push(menu.location);
			});
			var newLocations = [...new Set(locations)];
			return newLocations.map(location => {
				return (
					<button
						className="selector buttons-clickable"
						key={location}
						id={location}
						onClick={this.handleLocation.bind(this, location)}
					>
						{location}
					</button>
				);
			});
		}
	}
	renderCategory(category) {
		return (
			category &&
			<h1>
				{category}
			</h1>
		);
	}
	renderMenus() {
		if (this.state.refresh) {
			return this.props.menus.reverse().map(menu => {
				if (menu.location === this.state.location) {
					if (!this.state.category) {
						return (
							<div
								className="card"
								key={menu._id}
								id={(menu.location, menu.category)}
							>
								<div>
									<h2>
										{menu.title}
										<span
											className="delete-button"
											onClick={this.deleteAndRefresh.bind(this, menu)}
										>
											<i className="fa fa-minus-circle" aria-hidden="true" />
										</span>
									</h2>
									<div className="card-description">
										<p>
											{menu.description}
										</p>
										{menu.gluten
											? <span className="allergen allergenOn">gluten</span>
											: <span className="allergen allergenOff">gluten</span>}
										{menu.crustacean
											? <span className="allergen allergenOn">crustacean</span>
											: <span className="allergen allergenOff">
													crustacean
												</span>}
										{menu.egg
											? <span className="allergen allergenOn">egg</span>
											: <span className="allergen allergenOff">egg</span>}
										{menu.fish
											? <span className="allergen allergenOn">fish</span>
											: <span className="allergen allergenOff">fish</span>}
										{menu.peanut
											? <span className="allergen allergenOn">peanut</span>
											: <span className="allergen allergenOff">peanut</span>}
										{menu.soybean
											? <span className="allergen allergenOn">soybean</span>
											: <span className="allergen allergenOff">soybean</span>}
										{menu.milk
											? <span className="allergen allergenOn">milk</span>
											: <span className="allergen allergenOff">milk</span>}
										{menu.nuts
											? <span className="allergen allergenOn">nuts</span>
											: <span className="allergen allergenOff">nuts</span>}
										{menu.celery
											? <span className="allergen allergenOn">mustard</span>
											: <span className="allergen allergenOff">mustard</span>}
										{menu.sesame
											? <span className="allergen allergenOn">sesame</span>
											: <span className="allergen allergenOff">sesame</span>}
										{menu.sulphite
											? <span className="allergen allergenOn">sulphite</span>
											: <span className="allergen allergenOff">sulphite</span>}
										{menu.lupin
											? <span className="allergen allergenOn">lupin</span>
											: <span className="allergen allergenOff">sulphite</span>}
										{menu.mollusc
											? <span className="allergen allergenOn">mollusc</span>
											: <span className="allergen allergenOff">mollusc</span>}
									</div>
								</div>
							</div>
						);
					} else {
						if (menu.category === this.state.category) {
							return (
								<div key={menu._id} id={(menu.location, menu.category)}>
									<div>
										<h4>
											{menu.title}{' '}
											<span
												className="delete-button"
												onClick={deleteMenuItem(menu)}
											>
												<i className="fa fa-minus-circle" aria-hidden="true" />
											</span>
										</h4>
										<p>
											{menu.description}
										</p>
										<div className="allergen-container">
											{menu.gluten
												? <span className="allergen allergenOn">gluten</span>
												: <span className="allergen allergenOff">gluten</span>}
											{menu.crustacean
												? <span className="allergen allergenOn">
														crustacean
													</span>
												: <span className="allergen allergenOff">
														crustacean
													</span>}
											{menu.egg
												? <span className="allergen allergenOn">egg</span>
												: <span className="allergen allergenOff">egg</span>}
											{menu.fish
												? <span className="allergen allergenOn">fish</span>
												: <span className="allergen allergenOff">fish</span>}
											{menu.peanut
												? <span className="allergen allergenOn">peanut</span>
												: <span className="allergen allergenOff">peanut</span>}
											{menu.soybean
												? <span className="allergen allergenOn">soybean</span>
												: <span className="allergen allergenOff">soybean</span>}
											{menu.milk
												? <span className="allergen allergenOn">milk</span>
												: <span className="allergen allergenOff">milk</span>}
											{menu.nuts
												? <span className="allergen allergenOn">nuts</span>
												: <span className="allergen allergenOff">nuts</span>}
											{menu.celery
												? <span className="allergen allergenOn">mustard</span>
												: <span className="allergen allergenOff">mustard</span>}
											{menu.sesame
												? <span className="allergen allergenOn">sesame</span>
												: <span className="allergen allergenOff">sesame</span>}
											{menu.sulphite
												? <span className="allergen allergenOn">sulphite</span>
												: <span className="allergen allergenOff">
														sulphite
													</span>}
											{menu.lupin
												? <span className="allergen allergenOn">lupin</span>
												: <span className="allergen allergenOff">
														sulphite
													</span>}
											{menu.mollusc
												? <span className="allergen allergenOn">mollusc</span>
												: <span className="allergen allergenOff">mollusc</span>}
										</div>
									</div>
								</div>
							);
						}
					}
				}
				return null;
			});
		}
	}
	render() {
		return (
			<div className="main-middle">
				<h1>Locations</h1>
				{this.renderLocations()}
				{this.state.location && <h1>Categories</h1>}
				{this.renderCategories()}
				{this.renderCategory(this.state.category)}
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
