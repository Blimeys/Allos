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
	renderDescription(){
		return (
			<Field placeholder="Describe it !" key="description" name="description" type="text" label="description" component="textarea"/>
		)
	}
	renderAllergiesOptions() {
		return _.map(allergiesOptions, ({ label, name, classStyle }) => {
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
				<div className="location-grid">
					<div className="location-grid-title">
						<h1>Create<i className="fa fa-plus black-yellow-icons" aria-hidden="true"></i></h1>
					</div>
					<form onSubmit={this.props.handleSubmit(this.props.onMenuSubmit)} className="form-grid white-bg">
						<div className="form-grid-top">
							<div className="location-list-selector">{this.renderLocations()}</div>
							</div>
							<div className="form-grid-left">
								{this.renderFields()}
								{this.renderDescription()}
							</div>
							<div className="form-grid-right">
								<div>
									{this.renderAllergiesOptions()}
									</div>
							</div>
					<div className="form-control-box-left">
								<Link to="/home">
									<i className="fa fa-times fa-2x" aria-hidden="true" />
								</Link>

					</div>
					<div className="form-control-box-right">
						<button type="submit">
							<i className="fa fa-arrow-right fa-2x" aria-hidden="true" />
						</button>
					</div>
				</form>
				</div>
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
