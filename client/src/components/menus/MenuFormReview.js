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
			<div className="left" key={label}>
				<p>{formValues[name]}</p>
				</div>
		);
	});
	const reviewAllergiesFields = _.map(allergiesOptions, ({ name, label }) => {
		return (
			<div className="confirm-allergens" key={formValues[name]}>
			{formValues[name] ? formValues[name] : null}
			</div>
		);
	});
	return (
		<div className="main-middle">
			<div className="location-grid">
					<div className="location-grid-title">
						<div className="location-title">
							<h1>
								Confirm
								<i className="fa fa-plus black-yellow-icons" aria-hidden="true"></i>
							</h1>
						</div>
					</div>
				<div className="form-grid white-bg">
					<div className="form-grid-top confirm-box">
						{reviewFields}
					</div>
								{reviewAllergiesFields}
								<div className="form-control-box-left">
									<i className="fa fa-2x fa-arrow-left" aria-hidden="true" onClick={onCancel}></i>
								</div>
								<div className="form-control-box-right">
              <i className="fa fa-2x fa-check" aria-hidden="true" onClick={() => submitMenu(formValues, history)}></i>
            </div>
				</div>
</div>
</div>
	);
};

function mapStateToProps(state) {
	return { formValues: state.form.menuForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(MenuFormReview));
