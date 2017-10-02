import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import MenuEditForm from './MenuEditForm';
import MenuFormReview from './MenuFormReview';

class EditMenu extends Component {
	state = { showFormReview: false };
	renderContent() {
		if (this.state.showFormReview) {
			return (
				<MenuFormReview
					oncancel={() => this.setState({ showFormReview: false })}
				/>
			);
		}
		return (
			<MenuForm onMenuSubmit={() => this.setState({ showFormReview: true })} />
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
