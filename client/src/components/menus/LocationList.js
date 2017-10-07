import React, { Component } from 'react';
import { connect } from 'react-redux';

class LocationList extends Component {
	toggleLocations = id => {
		console.log(id);
	};
	renderLocations() {
		return this.props.menus.reverse().map(locations => {
			// const locationListing = locations.location;
			// console.log(locationListing);
			if (!locations) {
				return (
					<div>
						<h2>No locations</h2>
					</div>
				);
			}
			return (
				<div key={locations.location}>
					<button
						id={locations.location}
						onClick={this.toggleLocations.bind(this.props.location)}
					>
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
