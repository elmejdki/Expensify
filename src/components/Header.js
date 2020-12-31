import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <div>
    <h1>Exspensify</h1>
    <NavLink to="/dashboard" activeClassName="is-active" exact >
      DashBoard
    </NavLink> - 
    <NavLink to="/create" activeClassName="is-active" >
      Create Page
    </NavLink>
    <button onClick={startLogout}>Log Out</button>
  </div>
);

const mapDispatchToProps = { startLogout };

export default connect(undefined, mapDispatchToProps)(Header);