import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import JobboardItem from './JobboardItem';
import Page from '../Page';

const Jobboard = () => (
  <div className="jobboard-container">
    <Header />
    <div className="jobboard">
      <div className="table-container">
        <div className="table-title table-title-jobboard">
          <h3>Company Name</h3>
          <h3>Job Title</h3>
          <h3>Apply</h3>
          <h3>Post Date</h3>
        </div>
        <ul>
          <JobboardItem />
          <JobboardItem />
          <JobboardItem />
          <JobboardItem />
          <JobboardItem />
        </ul>
      </div>
    </div>
    <Page />
    <Footer />
  </div>
);

export default Jobboard;
