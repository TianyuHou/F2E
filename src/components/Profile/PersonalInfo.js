import React from 'react';

const PersonalInfo = () => (
  <div className="table-container">
    <div className="table-title table-profile-title">
      <h3>Personal Information</h3>
      <button className="profile-btn">Edit</button>
    </div>
    <ul className="table-content table-profile">
      <li>
        <span>Name</span> <span>Allen yu</span>
      </li>
      <li>
        <span>Username</span> <span>Allen yu</span>
      </li>
      <li>
        <span>Date of Birth</span> <span>01-01-2018</span>
      </li>
      <li>
        <span>Email</span> <span>Tianyu@gmail.com</span>
      </li>
      <li>
        <span>Phone Number</span> <span>123-456-7890</span>
      </li>
      <li>
        <span>Address</span>
        <span>1234 123rd Ave NE, #123, Seattle WA 98100</span>
      </li>
      <li>
        <span>School</span> <span>Northeastern University</span>
      </li>
      <li>
        <span>Attending Program</span> <span>Information Systems</span>
      </li>
      <li>
        <span>Expected Graduation Date</span> <span>May 2019</span>
      </li>
    </ul>
  </div>
);

export default PersonalInfo;
