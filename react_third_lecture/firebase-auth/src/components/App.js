import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Account from './Account';
import Home from './Home';
import Landing from './Landing';
import Navigation from './Navigation';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { AuthProvider } from '../firebase/Auth';
import PrivateRoute from './PrivateRoute';
function App() {
	return (
		<AuthProvider>
			<Router>
				<div className='App'>
					<header className='App-header'>
						<Navigation />
					</header>
				</div>
				<Route exact path='/' component={Landing} />
				<PrivateRoute path='/home' component={Home} />
				<PrivateRoute path='/account' component={Account} />
				<Route path='/signin' component={SignIn} />
				<Route path='/signup' component={SignUp} />
			</Router>
		</AuthProvider>
	);
}

export default App;
