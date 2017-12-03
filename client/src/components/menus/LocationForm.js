import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import LocationFields from './LocationFields';
import locationFormField from './locationFormField';

class LocationForm extends Component {
	renderFields() {
		return _.map(locationFormField, ({ label, name }) => {
			return (
				<Field
					key={name}
					component={LocationFields}
					type="text"
					label={label}
					name={name}
				/>
			);
		});
	}

	render() {
		return (
			<div className="main-middle">
				<form onSubmit={this.props.handleSubmit(this.props.onLocationSubmit)}>
					{this.renderFields()}
					<div className="form-buttons-holder">
						<button className="blank-button buttons-clickable">
							<Link to="/home">
								<i className="fa fa-times fa-2x" aria-hidden="true" />
							</Link>
						</button>
						<button type="submit" className="blank-button buttons-clickable">
							<i className="fa fa-arrow-right fa-2x" aria-hidden="true" />
						</button>
					</div>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	_.each(locationFormField, ({ name }) => {
		if (!values[name]) {
			errors[name] = 'You must provide a value';
		}
	});

	return errors;
}

export default reduxForm({
	validate,
	form: 'locationFormField',
	destroyOnUnmount: false
})(LocationForm);
