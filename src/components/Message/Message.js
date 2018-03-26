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
          <MsgItem />
          <MsgItem />
          <MsgItem />
          <MsgItem />
          <MsgItem />
        </ul>
      </div>
    </div>
    <Page />
    <Footer />
  </div>
);

export default Message;
