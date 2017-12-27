import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPublicMenus } from '../../actions';
import AllergyFilters from './AllergyFilters';

class PublicMenu extends Component {
	componentDidUpdate() {
		console.log(this.props);
	}
	state = {
		showResults: false
	};
	componentDidMount() {
		const currentPath = this.props.match.params.location;
		this.props.fetchPublicMenus(currentPath);
	}
	displayContent() {
		if (this.state.showResults) {
			return <AllergyFilters />;
		}
		return <AllergyFilters />;
	}
	render() {
		return <div>{this.displayContent()}</div>;
	}
}

function mapStateToProps({ publicMenus, allergySelector }) {
	return { publicMenus, allergySelector };
}

export default connect(mapStateToProps, { fetchPublicMenus })(PublicMenu);
