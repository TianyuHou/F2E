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
          <FinanceItem
            name="Donor"
            amount="+$10,000"
            des="Living Expense"
            date="01 Jan, 8:56Am"
            detail="Living Expense for January"
          />
          <FinanceItem
            name="Student"
            amount="-$10,000"
            des="Living Expense"
            date="03 Jan, 11:50Am"
            detail="Request Living Expense for January"
          />
          <FinanceItem
            name="Donor"
            amount="+$20,000"
            des="Living Expense"
            date="01 Feb, 7:46Am"
            detail="Living Expense for February and March"
          />
          <FinanceItem
            name="Donor"
            amount="+$30,000"
            des="Living Expense"
            date="01 Apr, 10:56Am"
            detail="Living Expense for April, May and June"
          />
          <FinanceItem
            name="Donor"
            amount="+$20,000"
            des="Tuition"
            date="04 Jan, 9:48Am"
            detail="Tuition fee for 2017 Spring"
          />
          <FinanceItem
            name="F2E"
            amount="-$20,000"
            des="Tuition"
            date="14 Jan, 10:30Am"
            detail="Tuition fee for 2017 Spring has been sent to school"
          />
        </ul>
      </div>
    </div>
    <Page />
    <Footer />
  </div>
);

export default Financial;
