import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import allergiesOptions from './allergiesOptions';
import { handleAllergy, resetAllergy } from '../../actions';

class AllergyFilters extends Component {
	handleFilter(allergy) {
		this.props.handleAllergy(allergy);
	}

	renderAllergyButtons() {
		return _.map(allergiesOptions, ({ label, name }) => {
			return (
				<button
					className={
						this.props.allergySelector[name]
							? 'selector buttons-clickable buttons-on'
							: 'selector buttons-clickable'
					}
					key={label}
					name={name}
					id={name}
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
