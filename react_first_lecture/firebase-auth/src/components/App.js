import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Account from './Account';
import ChangePassword from './ChangePassword';
import ForgotPassword from './ForgotPassword';
import Home from './Home';
import Landing from './Landing';
import Navigation from './Navigation';
import SignIn from './SignIn';
import SignUp from './SignUp';

function App() {
	return (
		<Router>
			<div className='App'>
				<header className='App-header'>
					<Navigation />
				</header>
			</div>
			<Route exact path='/' component={Landing} />
			<Route path='/home' component={Home} />
			<Route path='/account' component={Account} />
			<Route path='/signin' component={SignIn} />
			<Route path='/signup' component={SignUp} />
			<Route path='/changepassword' component={ChangePassword} />
			<Route path='/forgotpassword' component={ForgotPassword} />
		</Router>
	);
}

export default App;
