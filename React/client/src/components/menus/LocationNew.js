import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import LocationForm from './LocationForm';
import LocationFormReview from './LocationFormReview';
import { testNewLocation, resetNewLocationData } from '../../actions';

class LocationNew extends Component {
	state = {
		showFormReview: false,
		newLocationExist: false
	};
	componentDidMount() {
		this.props.resetNewLocationData();
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.newData !== this.props.newData) {
			if (this.props.newData.error) {
				this.setState({ newLocationExist: true });
			} else if (this.props.newData.success) {
				this.setState({ newLocationExist: false });
				this.setState({ showFormReview: true });
			}
		}
	}
	testingNewLocation(formValues) {
		this.props.testNewLocation(formValues.location);
		return;
	}
	validation(formValues) {
		this.testingNewLocation(formValues);
	}
	renderContent() {
		if (this.state.showFormReview) {
			return (
				<LocationFormReview
					onCancel={() => this.setState({ showFormReview: false })}
				/>
			);
		}
		return (
			<LocationForm
				onLocationSubmit={formValues => this.validation(formValues)}
				// this.setState({ showFormReview: true })
			/>
		);
	}
	render() {
		return (
			<div className="main">
				{this.renderContent()}
				{this.state.newLocationExist && <p>This location already exists</p>}
			</div>
		);
	}
}
function mapStateToProps({ newData }) {
	return { newData };
}
LocationNew = reduxForm({
	form: 'locationForm'
})(LocationNew);

export default connect(mapStateToProps, {
	testNewLocation,
	resetNewLocationData
})(LocationNew);
