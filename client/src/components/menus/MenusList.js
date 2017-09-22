import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMenus } from '../../actions';

class MenusList extends Component {
	componentDidMount() {
		this.props.fetchMenus();
	}
	renderMenus() {
		return this.props.menus.reverse().map(menu => {
			console.log(menu);
			return (
				<div key={menu._id}>
					<div>
						<h2>
							{menu.title}
						</h2>
						<p>
							{menu.description}
						</p>
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

export default connect(mapStatToProps, { fetchMenus })(MenusList);
