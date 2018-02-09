import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import allergiesOptions from './allergiesOptions';
import { handleAllergy, resetAllergy, toggleResultsView } from '../../actions';

class AllergyFilters extends Component {
	componentDidMount() {
		let viewDefault = { showResults: false };
		this.props.toggleResultsView(viewDefault);
	}
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
	goHandler() {
		console.log(this.props.toggleResults);
	}
	hideShowResults() {
		return (
			<button key="toggle-results" onClick={this.props.toggleResultsView}>
				go
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
function mapStateToProps({ allergySelector, toggleResults }) {
	return { allergySelector, toggleResults };
}
export default connect(mapStateToProps, {
	handleAllergy,
	resetAllergy,
	toggleResultsView
})(AllergyFilters);
