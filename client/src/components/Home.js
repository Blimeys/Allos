import React from 'react';
import { Link } from 'react-router-dom';
import MenusList from './menus/MenusList';

const Home = () => {
	return (
		<div>
			<MenusList />
			<div>
				<Link to="/menus/new">
					<button>add</button>
				</Link>
			</div>
		</div>
	);
};

export default Home;
