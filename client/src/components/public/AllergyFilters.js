import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import allergiesOptions from './allergiesOptions';
import { handleAllergy, resetAllergy } from '../../actions';

class AllergyFilters extends Component {
	componentDidUpdate() {
		console.log(this.props.allergySelector);
	}
	handleFilter(allergy) {
		if (this.props.allergySelector.indexOf(allergy) === -1) {
			this.props.handleAllergy(allergy);
		} else {
			return null;
		}
	}
	renderAllergyButtons() {
		return _.map(allergiesOptions, ({ label, name }) => {
			return (
				<button
					key={label}
					name={name}
					label={name}
					onClick={this.handleFilter.bind(this, name)}
				>
					{name}
				</button>
			);
		});
	}
	resetAllergyButton() {
		return (
			<button key="reset-allergy" onClick={this.props.resetAllergy}>
				reset
			</button>
		);
	}
	render() {
		return (
			<div>
				{this.renderAllergyButtons()}
				{this.resetAllergyButton()}
			</div>
		);
	}
}
function mapStateToProps({ allergySelector }) {
	return { allergySelector };
}
export default connect(mapStateToProps, { handleAllergy, resetAllergy })(
	AllergyFilters
);
