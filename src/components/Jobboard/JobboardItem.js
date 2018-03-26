import React, { Component } from 'react';
import { UnmountClosed } from 'react-collapse';

class JobboardItem extends Component {
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
      <li className="table-content table-jobboard" onClick={this.click}>
        <div>
          <div className="avator">
            <img src="/images/u1.jpg" />
            <h4>Amazon</h4>
          </div>
          <h4>SDE</h4>
          <a>
            <i className="fas fa-paper-plane" />Apply
          </a>
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

export default JobboardItem;
