import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import MenuEditForm from './MenuEditForm';
import EditReview from './EditReview';

class EditMenu extends Component {
	state = { showFormReview: false };
	renderContent() {
		if (this.state.showFormReview) {
			return (
				<EditFormReview
					oncancel={() => this.setState({ showFormReview: false })}
				/>
			);
		}
		return (
			<EditForm onEditSubmit={() => this.setState({ showFormReview: true })} />
		);
	}
	render() {
		return (
			<div>
				{this.renderContent()}
			</div>
		);
	}
}

export default reduxForm({
	form: 'EditForm'
})(EditMenu);
