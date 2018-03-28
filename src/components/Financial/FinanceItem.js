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
            <h4>{this.props.name}</h4>
          </div>
          <h4>{this.props.amount}</h4>
          <h4>{this.props.des}</h4>
          <h4>{this.props.date}</h4>
        </div>
        <UnmountClosed
          className="collapsible-content"
          isOpened={this.state.isopen}
        >
          <h5>{this.props.detail}</h5>
        </UnmountClosed>
      </li>
    );
  }
}

export default FinanceItem;
