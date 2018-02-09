import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllergyFilters from './AllergyFilters';
import Menus from './Menus';

class PublicMenu extends Component {
	state = {
		showResults: false
	};

	componentDidUpdate() {}

	displayContent() {
		if (this.state.showResults) {
			return null;
		}
		return <AllergyFilters />;
	}
	displayMenus() {
		if (this.state.showResults) {
			return <Menus location={this.props.match.params.location} />;
		}
	}
	toggleResults() {
		return (
			<button
				key="show-results"
				onClick={() =>
					this.state.showResults
						? this.setState({ showResults: false })
						: this.setState({ showResults: true })
				}
			>
				go
			</button>
		);
	}
	renderLocation() {}
	render() {
		return (
			<div className="main">
				{this.renderLocation()}
				{this.displayContent()}
				{this.toggleResults()}
				{this.displayMenus()}
			</div>
		);
	}
}

// function mapStateToProps({}) {
// 	return {};
// }

export default connect()(PublicMenu);
