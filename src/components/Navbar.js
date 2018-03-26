import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ startLogout }) => (
  <div className="nav-bar">
    <NavLink to={`/profile`} className="nav-icon" activeClassName="is-active">
      <i className="fas fa-user-circle" />
      <h3>Profile</h3>
    </NavLink>
    <NavLink to={`/message`} activeClassName="is-active" className="nav-icon">
      <i className="fas fa-envelope" />
      <h3>Message</h3>
    </NavLink>
    <NavLink to={`/education`} activeClassName="is-active" className="nav-icon">
      <i className="fas fa-graduation-cap" />
      <h3>Education</h3>
    </NavLink>
    <NavLink to={`/financial`} activeClassName="is-active" className="nav-icon">
      <i className="far fa-credit-card" />
      <h3>Financial</h3>
    </NavLink>
    <NavLink to={`/job`} activeClassName="is-active" className="nav-icon">
      <i className="fas fa-briefcase" />
      <h3>Jobboard</h3>
    </NavLink>
  </div>
);

export default Navbar;
