import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Intro from './Intro';
import Footer from './Footer';
import Landing from './Landing';
import Home from './Home';
import MenuNew from './menus/MenuNew';
// import MenuEdit from './menus/edit/MenuEditForm';
import LocationNew from './menus/LocationNew';
import PublicMenu from './public/PublicMenu';
class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
		this.props.fetchLocations();
	}
	render() {
		return (
			<BrowserRouter>
			<div>
					<div className="container">
					<Header />
					<Route exact path="/" component={Landing} />
					<Route exact path="/home" component={Home} />
					<Route exact path="/menus/new" component={MenuNew} />
					{/* <Route exact path="/menus/edit" component={MenuEdit} /> */}
					<Route exact path="/locations/new" component={LocationNew} />
					<Route exact path="/public/:location" component={PublicMenu} />
					</div>
					<Route exact path="/" component={Intro} />
					<Footer />
					</div>
			</BrowserRouter>
		);
	}
}

export default connect(null, actions)(App);
