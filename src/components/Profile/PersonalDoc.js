import React from 'react';

const PersonalDoc = () => (
  <div className="table-container">
    <div className="table-title table-profile-title">
      <h3>Personal Documents</h3>
      <button className="profile-btn">Update</button>
    </div>
    <ul className="table-content table-profile">
      <li>
        <span>Resume</span> <span>Resume.pdf</span>
      </li>
      <li>
        <span>Cover Letter</span> <span>Cover Letter.pdf</span>
      </li>
      <li>
        <span>Academic Report</span> <span>Academic Report.pdf</span>
      </li>
      <li>
        <span>Diploma Of Graduation</span> <span>Diploma.jpg</span>
      </li>
    </ul>
  </div>
);

export default PersonalDoc;
