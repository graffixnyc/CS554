import React from "react";
import { NavLink } from "react-router-dom";
import SignOutButton from "./SignOut";
import { firebase } from "../firebase";
const Navigation = () => (
  <div>
    {firebase.isAuthenticated() ? <NavigationAuth /> : <NavigationNonAuth />}
  </div>
);

const NavigationAuth = () => (
  <nav className="navigation">
    <ul>
      <li>
        <NavLink exact to="/" activeClassName="active">
          Landing
        </NavLink>
      </li>
      <li>
        <NavLink to="/home" activeClassName="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/account" activeClassName="active">
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
  <nav className="navigation">
    <ul>
      <li>
        <NavLink exact to="/" activeClassName="active">
          Landing
        </NavLink>
      </li>
      <li>
        <NavLink to="/signin" activeClassName="active">
          Sign-in
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
