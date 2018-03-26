import React from 'react';
import HomeHeader from './HomeHeader';
import Contact from './Contact';
import Apply from './Apply';
import StudentList from './StudentList';

const Home = () => {
  const studentContent = `"To become our student and get fund from donor to continue your
  study and continue your dream your life"`;

  const mentorContent = `"To become our student and get fund from donor to continue your
  study and continue your dream your life"`;

  const donorContent = `"To become our student and get fund from donor to continue your
  study and continue your dream your life"`;
  return (
    <div className="home">
      <div>
        <div className="home-header-container">
          <HomeHeader />
          <p className="home-board">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea "
          </p>
        </div>
        <div className="apply-header">
          <h1>Apply For Our Service</h1>
          <hr />
          <h4>Lorem ipsum quis nostrud exercitation ullamco laboris nisi ut</h4>
        </div>
        <div className="apply-container">
          <Apply identity="student" content={studentContent} />
          <Apply identity="mentor" content={mentorContent} />
          <Apply identity="donor" content={donorContent} />
        </div>
      </div>
      <div className="student-header">
        <h1>Merit Students</h1>
        <hr />
        <h4>
          Lorem ipsum quis nostrud exercitation ullamco laboris nisi ut aliquip
        </h4>
      </div>
      <StudentList />
      <Contact />
    </div>
  );
};

export default Home;
