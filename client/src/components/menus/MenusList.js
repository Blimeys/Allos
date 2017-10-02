import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMenus, deleteMenuItem, editMenuItem } from '../../actions';
import LocationList from './LocationList';

class MenusList extends Component {
	componentDidMount() {
		this.props.fetchMenus();
		// const allergens = [
		// 	'gluten',
		// 	'crustacean',
		// 	'egg',
		// 	'fish',
		// 	'peanut',
		// 	'soybean',
		// 	'milk',
		// 	'nuts',
		// 	'celery',
		// 	'mustard',
		// 	'sesame',
		// 	'sulphite',
		// 	'lupin',
		// 	'mollusc'
		// ];
	}
	componentWillUpdate() {
		this.props.fetchMenus();
	}

	renderMenus() {
		return this.props.menus.reverse().map(menu => {
			return (
				<div key={menu._id} id={(menu.gluten ? 'gluten' : null, menu.location)}>
					<div>
						<h2>
							{menu.title}
						</h2>
						<p>
							{menu.description}
						</p>
						<ul>
							{/* {this.props.allergens.map(allergen => {
								{
									menu.allergen
										? <li>
												{allergen}
											</li>
										: null;
								}
							})} */}
							{menu.nuts ? <li>nuts</li> : null}
							{menu.gluten ? <li>gluten</li> : null}
							{menu.crustacean ? <li>crustacean</li> : null}
							{menu.egg ? <li>egg</li> : null}
							{menu.fish ? <li>fish</li> : null}
							{menu.peanut ? <li>peanut</li> : null}
							{menu.soybean ? <li>soybean</li> : null}
						</ul>
					</div>
					<button onClick={deleteMenuItem(menu)}>delete</button>
					<Link to="/menus/edit">
						<button>Edit</button>
					</Link>
				</div>
			);
		});
	}
	render() {
		return (
			<div>
				<LocationList />
				<h1>Menus Items</h1>
				{this.renderMenus()}
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
