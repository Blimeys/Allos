import React from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const LocationFormReview = ({
	onCancel,
	formValues,
	submitLocation,
	history,
	error
}) => {
	return (
		<div>
			<h2>
				Do you want to create the location{' '}
				<span className="boldy">{formValues.location}</span> ?
			</h2>
			<button className="blank-button" onClick={onCancel}>
				<i className="fa fa-arrow-left" aria-hidden="true" />
			</button>
			<button
				className="blank-button"
				onClick={() => submitLocation(formValues, history)}
			>
				<i className="fa fa-check" aria-hidden="true" />
			</button>
		</div>
	);
};

function mapStateToProps(state) {
	return {
		formValues: state.form.locationFormField.values
	};
}

export default connect(mapStateToProps, actions)(
	withRouter(LocationFormReview)
);
