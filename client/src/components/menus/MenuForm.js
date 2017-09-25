import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import MenuField from './MenuField';
import formFields from './formFields';
import allergiesOptions from './allergiesOptions';
import AllergiesField from './AllergiesField';

class MenuForm extends Component {
	renderFields() {
		return _.map(formFields, ({ label, name }) => {
			return (
				<Field
					key={name}
					component={MenuField}
					type="text"
					label={label}
					name={name}
				/>
			);
		});
	}
	renderAllergiesOptions() {
		return _.map(allergiesOptions, ({ label, name }) => {
			return (
				<Field
					key={name}
					component={AllergiesField}
					type="checkbox"
					name={name}
					label={name}
				/>
			);
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(this.props.onMenuSubmit)}>
					{this.renderFields()}
					{this.renderAllergiesOptions()}
					<Link to="/home">Cancel</Link>
					<button type="submit">Next</button>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	_.each(formFields, ({ name }) => {
		if (!values[name]) {
			errors[name] = 'You must provide a value';
		}
	});

	return errors;
}

export default reduxForm({
	validate,
	form: 'menuForm',
	destroyOnUnmount: false
})(MenuForm);
