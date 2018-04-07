import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMenus } from '../../actions';
import LocationSelector from './user/LocationSelector';
import LocationHeader from './user/LocationHeader';
import CategorySelector from './user/CategorySelector';
import Menu from './user/Menu'


class MenusList extends Component {
	componentDidMount() {
		this.props.fetchMenus();
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
					<Menu />
					{this.props.menus.length === 0 && <p>Nothing to see here</p>}
					</div>

			)
		}
		}
	}
}

function mapStateToProps({ menus, userSelectLocation}) {
	return { menus, userSelectLocation};
}

export default connect(mapStateToProps, {
	fetchMenus
})(MenusList);
