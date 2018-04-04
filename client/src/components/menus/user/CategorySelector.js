import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userCategoryFilter } from '../../../actions';

class CategorySelector extends Component {
	componentDidMount() {
	}
	findCategories(){
		let activeMenu = this.props.menus.filter(item => item.location === this.props.activeLocation)
		let categories = activeMenu.map(item => item.category).filter((value, index, self) => self.indexOf(value) === index)
		return (
			categories.map(category => {
			return(
				<li
					className="user-location location-on"
					key={category}
					if={category}
				>
					{category}
				</li>
			)
		})
		)
	}
	render() {
		return (
			<div className="location-selector">
					<ul>{this.findCategories()}
					</ul>
			</div>

		);
	}
}

function mapStatToProps({ menus, activeLocation }) {
	return { menus, activeLocation };
}

export default connect(mapStatToProps, {
	userCategoryFilter
})(CategorySelector);
