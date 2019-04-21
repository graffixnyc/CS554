import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = () => (
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
        <NavLink to="/signin" activeClassName="active">
          Sign-in
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/account" activeClassName="active">
          Account
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
