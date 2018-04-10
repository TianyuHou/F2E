import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../actions/auth';

const LoginWindow = ({startLogin, display, close}) => {
  return (
  <div className={`login-window ${display}`}>

  <div className="window-content">
    <div className="window-header">
      <span className="close" onClick={close}>&times;</span>
      <h1>Login</h1>
    </div>
    <div className="window-body">
      <div>
        <label>E-mail:</label>
        <input placeholder="E-mail"></input>
      </div>
      <div>
        <label>Password:</label>
        <input placeholder="Password"></input>
      </div>
    </div>
    <div className="window-footer">
      <button>Login</button>
      <button onClick={startLogin}>Login With Google</button>
    </div>
  </div>
</div>
)};

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(null, mapDispatchToProps)(LoginWindow);
