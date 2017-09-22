import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import MenuForm from './MenuForm';
import MenuFormReview from './MenuFormReview';

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
	form: 'menuForm'
})(MenuNew);
