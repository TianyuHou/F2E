import React, { Component } from "react";
import { connect } from "react-redux";
import { startLoginWithPwd } from "../../actions/auth";

class LoginWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  checkInput = () => {
    return this.state.email.length === 0 || this.state.password.length === 0;
  };

  onEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  };

  onPwdChange = e => {
    this.setState({
      password: e.target.value
    });
  };

  onLogin = async () => {
    if (this.checkInput()) {
      this.props.renderWarn("Please Enter Your Email With Your Password!");
    } else {
      const res = await this.props.startLoginWithPwd(
        this.state.email,
        this.state.password
      );
      switch (res) {
        case "auth/invalid-email":
          this.props.renderWarn("the email address is not valid!");
          return;
        case "auth/user-disabled":
          this.props.renderWarn(
            "the user corresponding to the given email has been disabled!"
          );
          return;
        case "auth/user-not-found":
          this.props.renderWarn(
            "there is no user corresponding to the given email!"
          );
          return;
        case "auth/wrong-password":
          this.props.renderWarn("Wrong Password, Please check your Password!");
          return;
        default:
          this.props.hideWarn();
          return;
      }
    }
  };

  render() {
    return (
      <div className={`login-window ${this.props.displaywin}`}>
        <div className="window-content">
          <div className="window-header">
            <h1>Login</h1>
            <span className="close" onClick={this.props.close}>
              &times;
            </span>
          </div>
          <div className="window-body">
            <div className="window-body-item">
              <label>E-mail:</label>
              <input placeholder="E-mail" onChange={this.onEmailChange} />
            </div>
            <div className="window-body-item">
              <label>Password:</label>
              <input
                type="password"
                placeholder="Password"
                onChange={this.onPwdChange}
              />
            </div>
          </div>
          <div className="window-footer">
            <button onClick={this.onLogin}>Login</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startLoginWithPwd: (email, pwd) => dispatch(startLoginWithPwd(email, pwd))
});

export default connect(null, mapDispatchToProps)(LoginWindow);
