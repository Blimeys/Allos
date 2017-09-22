import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import MenuForm from './MenuForm';
import MenuFormNew from './MenuFormNew';

class MenuNew extends Component {
	state = { showMenuReview: false };
	renderContent() {
		if (this.state.showMenuReview) {
			return (
				<MenuFormReview
					oncancel={() => this.setState({ showFormReview: false })}
				/>
			);
		}
		return (
			<MenuFormReview
				onSurveySubmit={() => this.setState({ showFormReview: true })}
			/>
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
	form: 'menuForm'
})(MenuNew);
