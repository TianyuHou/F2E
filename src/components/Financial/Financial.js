import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import SearchBar from './SearchBar';
import ProgressBar from '../ProgressBar';
import FinanceItem from './FinanceItem';
import RequestBar from './RequestBar';
import Page from '../Page';

const Financial = () => (
  <div className="financial-container">
    <Header />
    <div className="financial">
      <ProgressBar name="Financial" />
      <SearchBar />
      <RequestBar />
      <div className="table-container">
        <div className="table-title table-title-financial">
          <h3>From</h3>
          <h3>Amount</h3>
          <h3>Description</h3>
          <h3>Date</h3>
        </div>
        <ul>
          <FinanceItem />
          <FinanceItem />
          <FinanceItem />
          <FinanceItem />
        </ul>
      </div>
    </div>
    <Page />
    <Footer />
  </div>
);

export default Financial;
