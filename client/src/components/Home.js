import React from 'react';
import { Link } from 'react-router-dom';
import MenusList from './menus/MenusList';
import LocationsList from './menus/LocationsList';

const Home = () => {
	return (
		<div className="main">
			<LocationsList />
			<MenusList />
			<Link to="/menus/new">
				<span className="fa-stack fa-2x">
					<i className="fa fa-circle fa-stack-2x" />
					<i className="fa fa-plus fa-stack-1x fa-inverse" />
				</span>
			</Link>
			<Link to="/locations/new">
				<span className="fa-stack fa-2x">
					<i className="fa fa-circle fa-stack-2x" />
					<i className="fa fa-map-marker fa-stack-1x fa-inverse" />
				</span>
			</Link>
		</div>
	);
};

export default Home;
