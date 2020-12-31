import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div>
    <button onClick={startLogin}>Log In</button>
  </div>
);

const mapDispatchToProps = { startLogin };

export default connect(undefined, mapDispatchToProps)(LoginPage);
