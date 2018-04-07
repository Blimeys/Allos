import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLocations, userViewLocation, userActiveLocation, userInitCategories, userActiveMenu, userCategoryFilter } from '../../../actions';

class LocationSelector extends Component {
	componentDidMount() {
		this.props.fetchLocations();

	}
	selectLocation(location) {
		this.props.userViewLocation(location);
		this.props.userActiveLocation(location);
		this.props.userCategoryFilter("all")
		this.props.userActiveMenu(this.props.menus.filter(item => item.location === location))
		this.props.userInitCategories(this.props.activeMenuList.map(item => item.category).filter((value, index, self) => self.indexOf(value) === index))

	}
	renderLocationsSelector() {
		return this.props.locations.map(location => {
			return (
  	       <div key={location._id}>
             <button className="user-location" id={location.location}	onClick={this.selectLocation.bind(this, location.location)}>
               {location.location}
             </button>
           </div>
			);
		});
	}

	render() {
		return (
      <div>
        {this.renderLocationsSelector()}
	     </div>
		);
	}
}

function mapStatToProps({ menus, locations, activeMenuList}) {
	return { menus, locations, activeMenuList};
}

export default connect(mapStatToProps, {
	fetchLocations,
	userViewLocation,
	userActiveLocation,
	userInitCategories,
	userActiveMenu,
	userCategoryFilter
})(LocationSelector);
