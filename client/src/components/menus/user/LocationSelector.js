import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLocations, filterLocations, userViewLocation, userActiveLocation } from '../../../actions';

class LocationSelector extends Component {
	componentDidMount() {
		this.props.fetchLocations();
	}
	selectLocation(location) {
		this.props.userViewLocation(location.location);
		this.props.userActiveLocation(location.location);
	}
	renderLocationsSelector() {
		return this.props.locations.reverse().map(location => {
			return (
  	       <div className="location-title" key={location._id}>
             <button className="user-location" id={location.location}	onClick={this.selectLocation.bind(this, location)}>
               {location.location}
             </button>
           </div>
			);
		});
	}
	render() {
		return (
      <div className="location-grid" >
        {this.renderLocationsSelector()}
	     </div>
		);
	}
}

function mapStatToProps({ locations, filters, userSelectLocation, activeLocation}) {
	return { locations, filters, userSelectLocation, activeLocation };
}

export default connect(mapStatToProps, {
	fetchLocations,
	filterLocations,
	userViewLocation,
	userActiveLocation
})(LocationSelector);
