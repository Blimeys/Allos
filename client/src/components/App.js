import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Home from './Home';
import MenuNew from './menus/MenuNew';
import MenuEdit from './menus/edit/MenuEditForm';
import PublicMenu from './public/PublicMenu';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}
	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Header />
						<Route exact path="/" component={Landing} />
						<Route exact path="/home" component={Home} />
						<Route exact path="/menus/new" component={MenuNew} />
						<Route exact path="/menus/edit" component={MenuEdit} />
						<Route exact path="/public/:location" component={PublicMenu} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);
