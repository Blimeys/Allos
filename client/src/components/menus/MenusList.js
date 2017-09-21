import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMenus } from '../../actions';

class MenuList extends Component {
	componentDidMount() {
		this.props.fetchMenus();
	}
	renderMenus() {
		return this.props.menus.reverse.map(menu => {
			return (
				<div key={menu._id}>
					<div>
						<h2>
							{menu.title}
						</h2>
					</div>
				</div>
			);
		});
	}
}
