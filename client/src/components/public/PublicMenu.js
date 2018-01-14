import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllergyFilters from './AllergyFilters';
import Menus from './Menus';

class PublicMenu extends Component {
	componentDidUpdate() {}
	state = {
		showResults: false
	};
	displayContent() {
		if (this.state.showResults) {
			return <AllergyFilters />;
		}
		return <AllergyFilters />;
	}
	displayMenus() {
		return <Menus location={this.props.match.params.location} />;
	}
	render() {
		return (
			<div className="main">
				{this.displayContent()}
				{this.displayMenus()}
			</div>
		);
	}
}

// function mapStateToProps({}) {
// 	return {};
// }

export default connect()(PublicMenu);
