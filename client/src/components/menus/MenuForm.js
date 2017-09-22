import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import MenuField from './MenuField';
import formFields from './formFields';

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

	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(this.props.onMenuSubmit)}>
					{this.renderFields()}
					<Link to="/home">Cancel</Link>
					<button type="submit">Next</button>
				</form>
			</div>
		);
	}
}

export default reduxForm({
	form: 'menuForm',
	destroyOnUnmount: false
})(MenuForm);
