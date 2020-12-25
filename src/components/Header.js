import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <h1>Exspensify</h1>
    <NavLink to="/" activeClassName="is-active" exact >
      DashBoard
    </NavLink> - 
    <NavLink to="/create" activeClassName="is-active" >
      Create Page
    </NavLink>
  </div>
);

export default Header;