import React from 'react';
import {NavLink} from 'react-router-dom'

const Navigation = () =>
   <nav className="navigation">
    <ul>
        <li><NavLink exact to="/" >Landing</NavLink></li>
        <li><NavLink  to="/counter" >Counter</NavLink></li>
    </ul>
    </nav>

export default Navigation;
