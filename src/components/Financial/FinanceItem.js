import React, { Component } from 'react';
import { UnmountClosed } from 'react-collapse';

class FinanceItem extends Component {
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
      <li className="table-content table-financial" onClick={this.click}>
        <div>
          <div className="avator">
            <img src="/images/u1.jpg" />
            <h4>Donor</h4>
          </div>
          <h4>+$10,000</h4>
          <h4>Living Expense</h4>
          <h4>15 Sep, 8:56Am</h4>
        </div>
        <UnmountClosed
          className="collapsible-content"
          isOpened={this.state.isopen}
        >
          <h5>
            Hi, This is Administrator from F2E, I'm here to inform you that you
            need to submit your report. thank you! Hi, This is Administrator
            from F2E, I'm here to inform you that you need to submit your
            report. thank you! Hi, This is Administrator from F2E, I'm here to
            inform you that you need to submit your report. thank you!
          </h5>
        </UnmountClosed>
      </li>
    );
  }
}

export default FinanceItem;
