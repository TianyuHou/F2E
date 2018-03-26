import React, { Component } from 'react';

class RequestBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isopen: false
    };
    this.click = this.click.bind(this);
  }

  click() {
    this.setState({
      isopen: !this.state.isopen
    });
  }

  render() {
    return (
      <div className="request-form">
        <div>
          <label>Amount: </label>
          <input type="Number" placeholder="Amount..." />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" />
        </div>
        <div>
          <label>Description: </label>
          <input type="text" placeholder="Description..." />
        </div>
        <button className="request-money-btn" onClick={this.click}>
          Request Money
        </button>
      </div>
    );
  }
}

export default RequestBar;
