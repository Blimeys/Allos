import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				console.log('not logged in');
				return (
					<li>
						<a href="/auth/google">Login with Google</a>
					</li>
				);
			default:
				console.log('logged in');
				return [
					<li key="1">
						<a href="/api/logout">Logout</a>
					</li>,
					<li key="2">
						<h3>You are logged in</h3>
					</li>
				];
		}
	}
	render() {
		return (
			<nav>
				<div>Les Allergy</div>
				<div>
					<ul>
						{this.renderContent()}
					</ul>
				</div>
			</nav>
		);
	}
}
function mapStatToProps({ auth }) {
	return { auth };
}
export default connect(mapStatToProps)(Header);
