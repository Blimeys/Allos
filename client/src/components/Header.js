import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<a href="/auth/google">
						<i className="fa fa-user-o fa-1x" aria-hidden="true" />
					</a>
				);
			default:
				return (
					<a href="/api/logout">
						<i className="fa fa-sign-out fa-1x" aria-hidden="true" />
					</a>
				);
		}
	}
	render() {
		return (
			<div className="header">
				<div className="header-content">
					<Link to="/home" className="home-link">
						<div className="header-logo">
							<span className="logo-left-font">Les</span>
							<span className="logo-right-font">a</span>
						</div>
					</Link>
					<div className="header-user">{this.renderContent()}</div>
				</div>
			</div>
		);
	}
}
function mapStateToProps({ auth }) {
	return { auth };
}
export default connect(mapStateToProps)(Header);
