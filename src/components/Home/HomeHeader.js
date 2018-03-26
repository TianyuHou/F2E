import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../actions/auth';

const HomeHeader = ({ startLogin }) => {
  return (
    <div className="home-header">
      <button type="submit" onClick={startLogin} className="login-btn">
        Login
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(null, mapDispatchToProps)(HomeHeader);
