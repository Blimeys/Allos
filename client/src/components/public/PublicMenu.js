import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPublicMenus } from '../../actions';

class PublicMenu extends Component {
	componentDidMount() {
		this.props.fetchPublicMenus();
	}

	renderMenus() {
		return this.props.menus.reverse().map(menu => {
			if (menu.length < 1) {
				return console.log(404);
			}
			return (
				<div key={menu._id} id={menu.gluten ? 'gluten' : null}>
					<div>
						<h2>
							{menu.title}
						</h2>
						<p>
							{menu.description}
						</p>
						<ul>
							<li>
								{menu.gluten ? 'gluten' : 'nogluten'}
							</li>
							<li>
								{menu.crustacean ? 'crustacean' : 'nocrustacean'}
							</li>
						</ul>
					</div>
				</div>
			);
		});
	}
	render() {
		return (
			<div>
				<h1>Menus Items</h1>
				{this.renderMenus()}
			</div>
		);
	}
}

function mapStatToProps({ menus }) {
	return { menus };
}

export default connect(mapStatToProps, { fetchPublicMenus })(PublicMenu);
