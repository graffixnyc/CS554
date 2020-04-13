import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../firebase/Auth';
import SignOutButton from './SignOut';
import '../App.css';

const Navigation = () => {
	const { currentUser } = useContext(AuthContext);
	return <div>{currentUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>;
};

const NavigationAuth = () => {
	return (
		<nav className='navigation'>
			<ul>
				<li>
					<NavLink exact to='/' activeClassName='active'>
						Landing
					</NavLink>
				</li>
				<li>
					<NavLink exact to='/home' activeClassName='active'>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink exact to='/account' activeClassName='active'>
						Account
					</NavLink>
				</li>
				<li>
					<SignOutButton />
				</li>
			</ul>
		</nav>
	);
};

const NavigationNonAuth = () => {
	return (
		<nav className='navigation'>
			<ul>
				<li>
					<NavLink exact to='/' activeClassName='active'>
						Landing
					</NavLink>
				</li>
				<li>
					<NavLink exact to='/signup' activeClassName='active'>
						Sign-up
					</NavLink>
				</li>

				<li>
					<NavLink exact to='/signin' activeClassName='active'>
						Sign-In
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
