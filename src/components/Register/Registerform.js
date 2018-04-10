import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Registerform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identity: props.identity,
      email: '',
      pwd: '',
      repwd: '',
      firstName: '',
      lastName: '',
      birth: '',
      gender: '',
      phone: '',
      address: '',
      state: '',
      zip: '',
      organization: '',
      img: '/images/profile-default.png'
    };
    this.onChange = this.onChange.bind(this);
    this.reset = this.reset.bind(this);
    this.submit = this.submit.bind(this);
  }

  onChange(e) {
    if (e.target.files.length === 0) {
      this.setState({
        img: '/images/profile-default.png'
      });
    } else {
      const imgFile = e.target.files[0];
      //实例化一个FileReader
      let reader = new FileReader();

      reader.onload = event => {
        this.setState({
          img: event.target.result
        });
      };

      reader.readAsDataURL(imgFile);
    }
  }

  submit() {}

  reset() {
    this.setState({
      identity: props.identity,
      email: '',
      pwd: '',
      repwd: '',
      firstName: '',
      lastName: '',
      birth: '',
      gender: '',
      phone: '',
      address: '',
      state: '',
      zip: '',
      organization: '',
      img: '/images/profile-default.png'
    });
  }

  render() {
    return (
      <form className="register-form" action="/register" method="post">
        <div className="register-basic-title">
          <h3>Basic Information</h3>
          <Link to="/home" className="back-btn">
            <i className="fas fa-chevron-circle-left" />
            Back Home
          </Link>
        </div>
        <div className="register-basic">
          <div>
            <label>Identity: </label>
            <input value={`${this.state.identity}`} readOnly />
          </div>
          <div>
            <label>Email: </label>
            <input placeholder="Email" type="email" />
          </div>
          <div>
            <label>Password: </label>
            <input placeholder="Password" />
          </div>
          <div>
            <label>Re-enter password: </label>
            <input placeholder="Renter-Password" />
          </div>
        </div>

        <div className="register-application-title">
          <h3>Application Information</h3>
        </div>

        <div className="register-application">
          <div>
            <label>First Name: </label>
            <input placeholder="First Name" />
          </div>
          <div>
            <label>Last Name: </label>
            <input placeholder="Last Name" />
          </div>
          <div>
            <label>Date of Birth: </label>
            <input placeholder="Date of Birth" type="date" />
          </div>
          <div>
            <label>Gender: </label>
            <select placeholder="Date of Birth">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div>
            <label>Phone: </label>
            <input placeholder="Phone" />
          </div>
          <div>
            <label>School/Company: </label>
            <input placeholder="School/Company" />
          </div>
          <div>
            <label>Address1: </label>
            <input placeholder="Address1" />
          </div>
          <div>
            <label>Address2: </label>
            <input placeholder="Address2" />
          </div>
          <div>
            <label>State: </label>
            <input placeholder="State" />
          </div>
          <div>
            <label>Zip Code: </label>
            <input placeholder="Zip Code" />
          </div>
        </div>

        <div className="register-doc-title">
          <h3>Upload Documents</h3>
        </div>

        <div className="register-doc">
          <div>
            <label>Profile: </label>
            <div className="user-profile">
              <img src={this.state.img} />
            </div>
          </div>
          <div>
            <input
              type="file"
              accept="image/*"
              capture="camera"
              id="file-upload"
              onChange={this.onChange}
            />
          </div>
        </div>

        <div className="register-btn">
          <button onClick={this.click}>Submit</button>
          <button type="reset" onClick={this.reset}>
            Reset
          </button>
        </div>
      </form>
    );
  }
}

export default Registerform;
