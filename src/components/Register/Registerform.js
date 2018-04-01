import React from 'react';
import { Link } from 'react-router-dom';

const Registerform = () => (
  <form className="register-form">
    <div className="register-basic-title">
      <h3>Basic Information</h3>
      <Link to="/home" className="back-btn">
        <i className="fas fa-chevron-circle-left" />
        Back Home
      </Link>
    </div>
    <div className="register-basic">
      <div>
        <label>Username: </label>
        <input placeholder="Username" />
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
          <i className="far fa-image" />
        </div>

        <button>Browse</button>
      </div>
      <div>
        <label>Other Document: </label>
        <button>Browse</button>
      </div>
    </div>

    <div className="register-btn">
      <button>Submit</button>
      <button type="reset">Reset</button>
    </div>
  </form>
);

export default Registerform;
