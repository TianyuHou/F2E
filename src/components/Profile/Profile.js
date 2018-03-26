import React from 'react';
import Header from '../Header';
import DashBoard from './DashBoard';
import PersonalInfo from './PersonalInfo';
import PersonalDoc from './PersonalDoc';
import ProgressBar from '../ProgressBar';
import Footer from '../Footer';

const Profile = () => (
  <div>
    <Header />
    <div className="profile-progressbar">
      <ProgressBar name="Graduation" />
    </div>
    <div className="profile">
      <div className="profile-pic">
        <img src="/images/u3.jpg" className="profile-image" />
        <div className="edit-icon">
          <a>
            <i className="fas fa-edit" />Edit
          </a>
          <a>
            <i className="fas fa-cog" />Setting
          </a>
        </div>
      </div>
      <div className="profile-content">
        <div className="profile-content-dashboard">
          <DashBoard />
        </div>
        <PersonalInfo />
        <PersonalDoc />
      </div>
    </div>
    <Footer />
  </div>
);

export default Profile;
