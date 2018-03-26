import React, { Component } from 'react';
import Registerform from './Registerform';
import Footer from '../Footer';

class Register extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Registerform />
        <Footer />
      </div>
    );
  }
}

export default Register;
