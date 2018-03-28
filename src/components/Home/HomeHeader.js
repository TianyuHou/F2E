import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogin } from '../../actions/auth';

const HomeHeader = ({ startLogin }) => {
  return (
    <div className="home-header">
      <button type="submit" onClick={startLogin} className="login-btn">
        Login
      </button>
      <NavLink
        to={`/home`}
        className="home-language-text"
        activeClassName="home-language-text-active"
      >
        English
      </NavLink>
      <div className="home-vertical-line" />
      <NavLink
        to={`/home2`}
        className="home-language-text"
        activeClassName="home-language-text-active"
      >
        Español
      </NavLink>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(null, mapDispatchToProps)(HomeHeader);
