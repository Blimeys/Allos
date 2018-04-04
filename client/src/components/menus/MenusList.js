import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMenus, deleteMenuItem, fetchLocations, userViewLocation } from '../../actions';
import LocationSelector from './user/LocationSelector';
import LocationHeader from './user/LocationHeader';
import CategorySelector from './user/CategorySelector';


class MenusList extends Component {
	constructor() {
		super();
		this.state = { location: null, category: false, refresh: true };
	}
	componentDidMount() {
		this.props.fetchMenus();
		this.props.fetchLocations();
	}
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
					if (this.state.category === category){
						return (
							<li
								className="user-location location-on"
								key={category}
								if={category}
								onClick={this.handleCategory.bind(this, category)}
							>
								{category}
							</li>
						);
					}
					return (
						<li
							className="user-location"
							key={category}
							if={category}
							onClick={this.handleCategory.bind(this, category)}
						>
							{category}
						</li>
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

	renderMenus() {
		if (this.state.refresh) {
			return this.props.menus.reverse().map(menu => {
				if (menu.location === this.state.location) {
					if (!this.state.category) {
						return (
							<div className="item item-grid-holder" key={menu._id}	id={(menu.location, menu.category)}>
							<div className="item-container">
								<div className="item-title-container">
									<div className="item-title">
									<h1>
										{menu.title}  {menu.price}
									</h1>
									</div>
									<div className="item-utils">
										<div className="delete-button" onClick={this.deleteAndRefresh.bind(this, menu)}>
											<i className="fa fa-trash-o" aria-hidden="true">
											</i>
										</div>
									</div>
								</div>
									<div className="allergens">
										<ul>
												{menu.gluten && (<li >gluten</li>)}
												{menu.crustacean && (<li >crustacean</li>)}
												{menu.egg && (<li >egg</li>)}
												{menu.fish && (<li >fish</li>)}
												{menu.peanut && (<li >peanut</li>)}
												{menu.soybean && (<li >soybean</li>)}
												{menu.milk && (<li >milk</li>)}
												{menu.nuts && (<li >nuts</li>)}
												{menu.celery && (<li >mustard</li>)}
												{menu.sesame && (<li >sesame</li>)}
												{menu.sulphite && (<li >sulphite</li>)}
												{menu.lupin && (<li >lupin</li>)}
												{menu.mollusc && (<li >mollusc</li>)}
											</ul>
										</div>
										<div className="item-description">
											<p>{menu.description}</p>
										</div>
								</div>
							</div>
						);
					} else {
						if (menu.category === this.state.category) {
							return (
								<div className="item item-grid-holder" key={menu._id}	id={(menu.location, menu.category)}>
								<div className="item-container">
									<div className="item-title-container">
										<div className="item-title">
										<h1>
											{menu.title}
										</h1>
									</div>
										<div className="item-utils">
											<div className="delete-button" onClick={this.deleteAndRefresh.bind(this, menu)}>
												<i className="fa fa-trash-o" aria-hidden="true">
												</i>
											</div>
										</div>
									</div>
										<div className="allergens">
											<ul>
													{menu.gluten && (<li >gluten</li>)}
													{menu.crustacean && (<li >crustacean</li>)}
													{menu.egg && (<li >egg</li>)}
													{menu.fish && (<li >fish</li>)}
													{menu.peanut && (<li >peanut</li>)}
													{menu.soybean && (<li >soybean</li>)}
													{menu.milk && (<li >milk</li>)}
													{menu.nuts && (<li >nuts</li>)}
													{menu.celery && (<li >mustard</li>)}
													{menu.sesame && (<li >sesame</li>)}
													{menu.sulphite && (<li >sulphite</li>)}
													{menu.lupin && (<li >lupin</li>)}
													{menu.mollusc && (<li >mollusc</li>)}
												</ul>
											</div>
											<div className="item-description">
												<p>{menu.description}</p>
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
		if (this.props.menus.length === 0) {
			return (
				<div className="categories">
					<p>Get started by adding menus items</p>
				</div>
			);
		} else {
			if(this.props.userSelectLocation === null){
				return (
					<div>
					<LocationSelector/>

					</div>
				)
			} else {
			return (
				<div className="categories">
					<LocationHeader />
					<CategorySelector/>
					{this.props.menus.length === 0 && <p>Nothing to see here</p>}
					{this.renderLocations()}
						{this.state.location &&
							<div className="location-selector">
									<ul>{this.renderCategories()}
									</ul>
							</div>
						}
						<div className="items-container items-grid">
						{this.state.location && this.renderMenus(this.state.location)}
						</div>
					</div>

			)
		}
		}
	}
}

function mapStateToProps({ menus, locations, userSelectLocation, globalAllergens}) {
	return { menus, locations, userSelectLocation, globalAllergens};
}

export default connect(mapStateToProps, {
	fetchMenus,
	deleteMenuItem,
	fetchLocations,
	userViewLocation
})(MenusList);
