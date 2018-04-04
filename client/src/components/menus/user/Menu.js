import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLocations, filterLocations, userViewLocation } from '../../../actions';

class Menu extends Component {
	componentDidMount() {
		this.props.fetchLocations();
	}
	renderMenu(){
		let selectedLocation = this.props.locations.find(selectedLocation => selectedLocation.location === this.props.userSelectLocation);
		return(
      <div className="location-grid" key={selectedLocation._id}>
      	<div className="location-title">
      		<h1 id={selectedLocation.location}>
            {selectedLocation.location}
      			<i className="fa fa-arrow-left location-arrow" aria-hidden="true"></i></h1>
          </div>
      <div className="location-grid-description">
      	<div className="location-description-content">
      		<div className="location-description-text">
      			<p>
							{selectedLocation.description}
  </p>
      		</div>
      		<div className="public-location-url">
      				<a href={"http://maps.google.com/?q=" + selectedLocation.streetAddress} target="_blank">{selectedLocation.streetAddress}</a><i className="fa fa-map-o" aria-hidden="true"></i>
      		</div>
      		<div className="public-location-url">
      			<a href={selectedLocation.externalUrl} target="_blank">{selectedLocation.externalUrl}</a><i className="fa fa-link" aria-hidden="true"></i>
      		</div>
      	</div>
      </div>
      </div>
    )
	}
	render() {
		return (
			<div>
							{this.renderMenu()}
	    </div>

		);
	}
}

function mapStatToProps({ locations, filters, userSelectLocation, activeLocation }) {
	return { locations, filters, userSelectLocation, activeLocation };
}

export default connect(mapStatToProps, {
	fetchLocations,
	filterLocations,
	userViewLocation
})(Menu);
