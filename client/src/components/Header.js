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
					<div className="header-user">
					<a href="/auth/google">
						<i className="fa fa-user-o fa-1x" aria-hidden="true"></i>
					</a>
					</div>
				);
			default:
				return (
					<div className="header-user">
						<Link to="/menus/new"><i className="fa fa-plus" aria-hidden="true"></i></Link>
						<Link to="/locations/new"><i className="fa fa-map-marker" aria-hidden="true"></i></Link>
					<Link to="/home"><i className="fa fa-home" aria-hidden="true"></i></Link>
					<a href="/api/logout">
						<i className="fa fa-sign-out fa-1x" aria-hidden="true" />
					</a>
					</div>
				);
		}
	}
	render() {
		return (
			<div className="header">
				<div className="header-content">
					<Link to="/" className="home-link">
					<div className="header-logo">
						<div className="logo-container">
							<span className="logo-circle">ἄ</span>
							<span className="logo-left-font">Allos</span>
						</div>
					</div>
					</Link>
					{this.renderContent()}
					</div>
				</div>


		);
	}
}
function mapStateToProps({ auth }) {
	return { auth };
}
export default connect(mapStateToProps)(Header);
