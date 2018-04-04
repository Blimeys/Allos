import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLocations, filterLocations, userViewLocation } from '../../actions';
import { Link } from 'react-router-dom';

class LocationsList extends Component {
	componentDidMount() {
		this.props.fetchLocations();
	}
	handleLocation(location) {
		// this.props.filterLocations(location.location);
		this.props.userViewLocation(location.location);
	}
	renderLocations() {
		return this.props.locations.reverse().map(location => {
			const publicLocation = '/public/' + location.location.replace(/ /g, '_');
			return (
<div className="location-grid" key={location._id}>

	<div className="location-title">

		<h1 id={location.location}	onClick={this.handleLocation.bind(this, location)}>
								{location.location}
								<i className="fa fa-arrow-left location-arrow" aria-hidden="true"></i></h1>
</div>
<div className="location-grid-description">
	<div className="location-description-content">
		<div className="location-description-text">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
				in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		</div>
		<div className="location-address">
			<p>
				123 king road, London, se42dt <i className="fa fa-map-o" aria-hidden="true"></i>
			</p>
		</div>
		<div className="public-location-url">
			<a href="" target="_blank">http://www.allios.io/public/{location.location.replace(/ /g,"_")}</a><i className="fa fa-link" aria-hidden="true"></i>
		</div>
	</div>
</div>


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

function mapStatToProps({ locations, filters, userSelectLocation }) {
	return { locations, filters, userSelectLocation };
}

export default connect(mapStatToProps, {
	fetchLocations,
	filterLocations,
	userViewLocation
})(LocationsList);
