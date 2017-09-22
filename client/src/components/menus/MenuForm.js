import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import MenuField from './MenuField';
import formField from './formField';

class MenuForm extends Component {
	renderFields() {
		return _.map(formField, ({ label, name }) => {
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
					<Link to="/menus">Cancel</Link>
					<button type="submit">Next</button>
				</form>
			</div>
		);
	}
}

export default reduxForm({
	form: 'menuForm',
	destroyOnUnmount: false
});
