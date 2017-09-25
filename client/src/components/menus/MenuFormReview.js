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
				<label>
					{label}
				</label>
				<div>
					{formValues[name]}
				</div>
			</div>
		);
	});
	const reviewAllergiesFields = _.map(allergiesOptions, ({ name, label }) => {
		return (
			<div key={name}>
				<label>
					<h3>
						{label}
					</h3>
				</label>
				<div>
					{formValues[name] ? 'contains ' + formValues[name] : null}
				</div>
			</div>
		);
	});
	return (
		<div>
			<h5>Please confirm your entries</h5>
			{console.log(formValues)}
			{reviewFields}
			{reviewAllergiesFields}
			<button onClick={onCancel}>back</button>
			<button onClick={() => submitMenu(formValues, history)}>Send</button>
		</div>
	);
};

function mapStateToProps(state) {
	return { formValues: state.form.menuForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(MenuFormReview));
