import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MenuField from './MenuField';
import formFields from './formFields';
import { fetchLocations } from '../../actions';
import allergiesOptions from './allergiesOptions';
import AllergiesField from './AllergiesField';

class MenuForm extends Component {
	componentDidMount() {
		this.props.fetchLocations();
	}
	renderLocationList() {
		return this.props.locations.reverse().map(location => {
			return (
				<option key={location._id} value={location.location}>
					{location.location}
				</option>
			);
		});
	}
	renderLocations() {
		return (
			<Field
				key="location-name"
				component="select"
				label="Location"
				name="location"
			>
				<option />
				{this.renderLocationList()}
			</Field>
		);
	}
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
			<div className="main-middle">
				<form onSubmit={this.props.handleSubmit(this.props.onMenuSubmit)}>
					<div>{this.renderLocations()}</div>
					{this.renderFields()}
					{this.renderAllergiesOptions()}
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

	_.each(formFields, ({ name }) => {
		if (!values[name]) {
			errors[name] = 'You must provide a value';
		}
	});

	return errors;
}
function mapStatToProps({ locations }) {
	return { locations };
}

MenuForm = reduxForm({
	validate,
	form: 'menuForm',
	destroyOnUnmount: false
})(MenuForm);

export default connect(mapStatToProps, { fetchLocations })(MenuForm);
