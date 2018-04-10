import React,{Component} from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogin } from '../../actions/auth';
import LoginWindow from './LoginWindow';

class HomeHeader extends Component{
  constructor(props){
    super(props);
    this.state={
      display: 'hide-window'
    }
    this.onClick = this.onClick.bind(this);
    this.closeWindow = this.closeWindow.bind(this);
  }

  onClick(){
    this.setState({
      display: 'show-window'
    })
  }

  closeWindow(){
    this.setState({
      display: 'hide-window'
    })
  }

  render(){
    return (
      <div className="home-header">
        <button type="submit" onClick={this.onClick} className="login-btn">
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
        <LoginWindow display={this.state.display} close={this.closeWindow}/>
      </div>
    )
  }
};

export default HomeHeader;
