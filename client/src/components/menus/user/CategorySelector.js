import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userCategoryFilter, deleteMenuItem } from '../../../actions';

class CategorySelector extends Component {
	constructor() {
		super();
		this.state = { category: false};
	}
	componentDidMount() {
	}

	handleCategory(activeCategory){
		this.props.userCategoryFilter(activeCategory);
		this.setState({category : activeCategory })
	}

	renderCategories(){
		let categories = this.props.activeMenuList.map(item => item.category).filter((value, index, self) => self.indexOf(value) === index)
		return (
			categories.map(category => {
				return (
					<li
						className={this.state.category === category ? "user-location location-on" : "user-location"}
						key={category}
						if={category}
						onClick={this.handleCategory.bind(this, category)}
					>
						{category}
					</li>
				)
		})
		)
	}
	renderAll(){
		let all = "all"
		return (
			<li
				className={this.state.category === "all" ? "user-location location-on" : "user-location"}
				key={all}
				if={all}
				onClick={this.handleCategory.bind(this, all)}
			>
				{all}
			</li>
		)
	}
	render() {
		return (
			<div className="location-selector">
					<ul>
						{this.renderAll()}
						{this.renderCategories()}

					</ul>
			</div>

		);
	}
}

function mapStatToProps({ menus, activeLocation, activeCategory, activeMenuList, categoriesList }) {
	return { menus, activeLocation, activeCategory, activeMenuList, categoriesList };
}

export default connect(mapStatToProps, {
	userCategoryFilter,
	deleteMenuItem
})(CategorySelector);
