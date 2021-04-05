import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { setCurrentUser } from './redux/user/user.actions';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInUp from './pages/sign-in-up/sign-in-up.component.jsx';
import Header from './components/header/header.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.scss';

class App extends React.Component {
	// constructor() {	//FIXME: Ya no se necesita
	// 	super();

	// 	this.state = {
	// 		currentUser: null
	// 	};
	// }

	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = createUserProfileDocument(userAuth);

				(await userRef).onSnapshot((snapShot) => {
					// this.setState({
					// 	currentUser: {
					// 		id: snapShot.id,
					// 		...snapShot.data()
					// 	}
					// });	//FIXME: se cambia por lo de abajo

					setCurrentUser({
						id: snapShot.id,
						...snapShot.data()
					});
				});
			}

			setCurrentUser(userAuth);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div className='App'>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route path='/signin' component={SignInUp} />
				</Switch>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
