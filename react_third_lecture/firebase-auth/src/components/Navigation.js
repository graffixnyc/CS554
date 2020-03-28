import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../firebase/Auth';
import SignOutButton from './SignOut';
const Navigation = () => {
	const { currentUser } = useContext(AuthContext);
	return <div>{currentUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>;
};
const NavigationAuth = () => (
	<nav className='navigation'>
		<ul>
			<li>
				<NavLink exact to='/' activeClassName='active'>
					Landing
				</NavLink>
			</li>
			<li>
				<NavLink to='/home' activeClassName='active'>
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

const NavigationNonAuth = () => (
	<nav className='navigation'>
		<ul>
			<li>
				<NavLink exact to='/' activeClassName='active'>
					Landing
				</NavLink>
			</li>
			<li>
				<NavLink to='/signin' activeClassName='active'>
					Sign-in
				</NavLink>
			</li>
			<li>
				<NavLink to='/signup' activeClassName='active'>
					Sign-Up
				</NavLink>
			</li>
		</ul>
	</nav>
);

export default Navigation;
