import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <div className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Exspensify</h1>
        </Link>
        <button
          className="button button--link"
          onClick={startLogout}
        >
          Log Out
        </button>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = { startLogout };

export default connect(undefined, mapDispatchToProps)(Header);