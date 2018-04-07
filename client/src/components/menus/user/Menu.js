import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteMenuItem, userActiveMenu } from '../../../actions';

class Menu extends Component {
	constructor() {
		super();
		this.state = { refresh: true };
	}
	componentDidMount() {
	}
	deleteAndRefresh(menu) {
		this.props.deleteMenuItem(menu);
		this.props.userActiveMenu(this.props.activeMenuList.filter(item => item.title !== menu.title))
	}
	checkAllergen(item){
		this.props.globalAllergens.map(allergen =>{
			if(item[allergen] === true){
				return this.renderAllergen(allergen)
			}
			return null


		})
	}
	renderMenu(){
		return this.props.activeMenuList.map(item => {
			if (this.props.activeCategory === "all"){
				return (
						<div className="item item-grid-holder" key={item._id}	id={(item.location, item.category)}>
						<div className="item-container">
							<div className="item-title-container">
								<div className="item-title">
								<h1>
									{item.title} <span className="user-price">{item.price}</span>
								</h1>
								</div>
								<div className="item-utils">
									<div className="delete-button" onClick={this.deleteAndRefresh.bind(this, item)}>
										<i className="fa fa-trash-o" aria-hidden="true">
										</i>
									</div>
								</div>
							</div>
								<div className="allergens">
									<ul>
										{this.props.globalAllergens && this.props.globalAllergens.map(allergen => {
												if(item[allergen] === true){
													return <li key={item._id + item.title + allergen}>{allergen}</li>
												} return null
											})}
										</ul>
									</div>
									<div className="item-description">
										<p>{item.description}</p>
									</div>
							</div>
						</div>
				)}	else if (this.props.activeCategory === item.category) {
					return (
						<div className="item item-grid-holder" key={item._id}	id={(item.location, item.category)}>
						<div className="item-container">
							<div className="item-title-container">
								<div className="item-title">
								<h1>
									{item.title} <span className="user-price">{item.price}</span>
								</h1>
								</div>
								<div className="item-utils">
									<div className="delete-button" onClick={this.deleteAndRefresh.bind(this, item)}>
										<i className="fa fa-trash-o" aria-hidden="true">
										</i>
									</div>
								</div>
							</div>
								<div className="allergens">
									<ul>
										{this.props.globalAllergens && this.props.globalAllergens.map(allergen => {
												if(item[allergen] === true){
													return <li key={item._id + item.title + allergen}>{allergen}</li>
												} return null
											})}
										</ul>
									</div>
									<div className="item-description">
										<p>{item.description}</p>
									</div>
							</div>
						</div>
					)
				}
				return null;
			}
		)
	}
	render() {
		return (
			<div className="items-container items-grid">
							{this.renderMenu()}
	    </div>

		);
	}
}

function mapStatToProps({ activeMenuList, activeCategory, globalAllergens }) {
	return { activeMenuList, activeCategory, globalAllergens };
}

export default connect(mapStatToProps, {
	userActiveMenu,
deleteMenuItem
})(Menu);
