import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import LocationForm from './LocationForm';
import LocationFormReview from './LocationFormReview';
import { testNewLocation } from '../../actions';

class LocationNew extends Component {
	componentDidMount() {
		console.log(this.props);
	}
	state = { showFormReview: false };

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
				onLocationSubmit={() => this.setState({ showFormReview: true })}
			/>
		);
	}
	render() {
		return <div className="main">{this.renderContent()}</div>;
	}
}

export default reduxForm({
	form: 'locationForm'
})(LocationNew);
