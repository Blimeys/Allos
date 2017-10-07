import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPublicMenus } from '../../actions';

class PublicMenu extends Component {
	componentDidMount() {
		const currentPath = this.props.match.params.location;
		// console.log(currentPath);
		this.props.fetchPublicMenus(currentPath);
	}

	renderMenus() {
		return this.props.menus.reverse().map(menu => {
			if (menu.length < 1) {
				return (
					<div>
						<h1>Oooops! Nothing to be found here</h1>
					</div>
				);
			}
			return (
				<div key={menu._id} id={(menu.gluten ? 'gluten' : null, menu.location)}>
					<div>
						<h2>
							{menu.title}
						</h2>
						<p>
							{menu.description}
						</p>
						<ul>
							{menu.nuts ? <li>nuts</li> : null}
							{menu.gluten ? <li>gluten</li> : null}
							{menu.crustacean ? <li>crustacean</li> : null}
							{menu.egg ? <li>egg</li> : null}
							{menu.fish ? <li>fish</li> : null}
							{menu.peanut ? <li>peanut</li> : null}
							{menu.soybean ? <li>soybean</li> : null}
							{menu.milk ? <li>milk</li> : null}
							{menu.nuts ? <li>nuts</li> : null}
							{menu.celery ? <li>mustard</li> : null}
							{menu.sesame ? <li>sesame</li> : null}
							{menu.sulphite ? <li>sulphite</li> : null}
							{menu.lupin ? <li>lupin</li> : null}
							{menu.mollusc ? <li>mollusc</li> : null}
						</ul>
					</div>
					{/* Implement edit */}
					{/* <Link to="/menus/edit">
						<button>Edit</button>
					</Link> */}
				</div>
			);
		});
	}
	render() {
		return (
			<div>
				<h1>Menus Items</h1>
				{this.renderMenus()}
			</div>
		);
	}
}

function mapStatToProps({ menus }) {
	return { menus };
}

export default connect(mapStatToProps, { fetchPublicMenus })(PublicMenu);
