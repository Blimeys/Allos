import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import allergiesOptions from './allergiesOptions';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const MenuFormReview = ({ onCancel, formValues, submitMenu, history }) => {
	const reviewFields = _.map(formFields, ({ name, label }) => {
		return (
			<div key={name}>
				<label>{label}</label>
				<div>{formValues[name]}</div>
			</div>
		);
	});
	const reviewAllergiesFields = _.map(allergiesOptions, ({ name, label }) => {
		return (
			<div key={name}>
				<label>
					<h2>{label}</h2>
				</label>
				<div>
					<p>{formValues[name] ? 'contains ' + formValues[name] : null}</p>
				</div>
			</div>
		);
	});
	return (
		<div>
			<h2>Please confirm your entries</h2>
			{reviewFields}
			{reviewAllergiesFields}
			<button className="blank-button" onClick={onCancel}>
				<i className="fa fa-arrow-left" aria-hidden="true" />
			</button>
			<button
				className="blank-button"
				onClick={() => submitMenu(formValues, history)}
			>
				<i className="fa fa-check" aria-hidden="true" />
			</button>
		</div>
	);
};

function mapStateToProps(state) {
	return { formValues: state.form.menuForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(MenuFormReview));
