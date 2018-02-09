import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLocations, filterLocations } from '../../actions';
import { Link } from 'react-router-dom';

class LocationsList extends Component {
	componentDidMount() {
		this.props.fetchLocations();
	}
	handleLocation(location) {
		this.props.filterLocations(location.location);
	}
	renderLocations() {
		return this.props.locations.reverse().map(location => {
			const publicLocation = '/public/' + location.location.replace(/ /g, '_');
			return (
				<div key={location._id}>
					<Link to={publicLocation} target="_blank">
						<h2
							className="public-link-location"
							id={location}
							onClick={this.handleLocation.bind(this, location)}
						>
							{location.location}
						</h2>
					</Link>
				</div>
			);
		});
	}
	render() {
		return (
			<div>
				<h1>Locations</h1>
				{this.renderLocations()}
			</div>
		);
	}
}

function mapStatToProps({ locations, filters }) {
	return { locations, filters };
}

export default connect(mapStatToProps, {
	fetchLocations,
	filterLocations
})(LocationsList);
