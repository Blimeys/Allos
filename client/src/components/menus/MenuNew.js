import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import MenuForm from './MenuForm';
import MenuFormReview from './MenuFormReview';

class MenuNew extends Component {
	state = { showFormReview: false };
	renderContent() {
		if (this.state.showFormReview) {
			return (
				<MenuFormReview
					onCancel={() => this.setState({ showFormReview: false })}
				/>
			);
		}
		return (
			<MenuForm onMenuSubmit={() => this.setState({ showFormReview: true })} />
		);
	}
	render() {
		return <div className="main">{this.renderContent()}</div>;
	}
}

export default reduxForm({
	form: 'menuForm'
})(MenuNew);
