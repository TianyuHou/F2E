import React from 'react';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = ({ startLogout }) => (
  <div className="header">
    <div className="header-container">
      <div className="header-logout">
        <h4>Signed in As Allen</h4>
        <a onClick={startLogout} className="logout-btn">
          <i className="fas fa-sign-out-alt" />Logout
        </a>
      </div>
    </div>
    <Navbar />
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(null, mapDispatchToProps)(Header);
