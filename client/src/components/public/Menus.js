// import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPublicMenus, filteredMenus } from '../../actions';

class Menus extends Component {
	componentDidMount() {
		this.props.fetchPublicMenus(this.props.location);
	}
	componentDidUpdate() {}
	componentWillReceiveProps() {}
	initMenus() {
		if (
			Object.keys(this.props.allergySelector).every(
				key => this.props.allergySelector[key] === true
			)
		) {
			return false;
		} else {
			return true;
		}
	}
	hasAllergen() {
		let allergies = [];
		Object.keys(this.props.allergySelector).map(allergy => {
			if (this.props.allergySelector[allergy]) {
				return allergies.push(allergy);
			}
			return null;
		});
		if (allergies.length === 14) {
			allergies = [];
		}
		const result = this.props.publicMenus.filter(({ allergen }) =>
			allergies.every(key => allergen[key] !== this.props.allergySelector[key])
		);
		return result.map(item => {
			return (
				<div key={item._id}>
					<h4>{item.title}</h4>
					<p>{item.description}</p>
				</div>
			);
		});
	}

	test() {}
	render() {
		return <div>{this.initMenus() ? this.hasAllergen() : <h1>Start</h1>}</div>;
	}
}

function mapStateToProps({ publicMenus, allergySelector, filteredMenusData }) {
	return { publicMenus, allergySelector, filteredMenusData };
}

export default connect(mapStateToProps, { fetchPublicMenus, filteredMenus })(
	Menus
);
