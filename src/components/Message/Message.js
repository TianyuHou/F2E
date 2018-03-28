import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import MsgItem from './MsgItem';
import Page from '../Page';

const Message = () => (
  <div className="message-container">
    <Header />
    <div className="message">
      <div className="table-container">
        <div className="table-title table-title-message">
          <h4>Sent From</h4>
          <h4>Subject</h4>
          <h4>Date</h4>
        </div>
        <ul>
          <MsgItem
            name="Mentor"
            des="Lecture 5 Uploaded"
            date="6 Feb, 10:33 pm"
            detail="Hi, Allen! Lecture 5 has been uploaded, please take a look and feel free to give me some feedback before our next meeting!"
          />
          <MsgItem
            name="Mentor"
            des="Academic Report Feedback"
            date="28 Dec, 5:18 pm"
            detail="Hi, Allen! I have checked your academic report for 2017 fall! You really did a great job and made huge progress! I am very proud of you!"
          />
          <MsgItem
            name="Administrator"
            des="Academic Report Status Update"
            date="15 Sep, 11:45 am"
            detail="Dear Allen, your academic report has been validated! Your academic report status has been updated, please check your status at
            https://f2e-ctmmdysy.herokuapp.com/education/checkreportstatus"
          />
          <MsgItem
            name="Administrator"
            des="Academic Report Submission"
            date="21 Dec, 2:32 pm"
            detail="Dear Allen, please submit your academic report using the following link:
            https://f2e-ctmmdysy.herokuapp.com/education/submitacademicreport"
          />
          <MsgItem
            name="Administrator"
            des="Financial Status Update"
            date="15 Sep, 8:56Am"
            detail="Dear Allen, your financial status has been updated, please check your status at
            https://f2e-ctmmdysy.herokuapp.com/education/checkfinancialstatus"
          />
        </ul>
      </div>
    </div>
    <Page />
    <Footer />
  </div>
);

export default Message;
