import React, { Component } from 'react';
import { connect } from 'react-redux';

class LocationList extends Component {
	renderLocations() {
		return this.props.menus.reverse().map(locations => {
			if (!locations) {
				return (
					<div>
						<h2>No locations</h2>
					</div>
				);
			}
			return (
				<div key={locations._id}>
					<button>
						{locations.location}
					</button>
				</div>
			);
		});
	}
	render() {
		return (
			<div>
				{this.renderLocations()}
			</div>
		);
	}
}
function mapStatToProps({ menus }) {
	return { menus };
}
export default connect(mapStatToProps)(LocationList);
