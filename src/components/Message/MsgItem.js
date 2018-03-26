import React, { Component } from 'react';
import { UnmountClosed } from 'react-collapse';

class MsgItem extends Component {
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
      <li className="table-content table-message" onClick={this.click}>
        <div>
          <div className="avator">
            <img src="/images/u1.jpg" />
            <h4>Administrator</h4>
          </div>
          <h4>Academic Report Submission</h4>
          <h4>15 Sep, 8:56Am</h4>
          <a className="delete-icon">
            <i className="fas fa-trash-alt" />Delete
          </a>
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

export default MsgItem;
