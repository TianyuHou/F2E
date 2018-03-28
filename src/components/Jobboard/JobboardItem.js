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
            <h4>{this.props.companyName}</h4>
          </div>
          <h4>{this.props.position}</h4>
          <a>
            <i className="fas fa-paper-plane" />Apply
          </a>
          <h4>{this.props.date}</h4>
          <a className="delete-icon">
            <i className="fas fa-trash-alt" />Delete
          </a>
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

export default JobboardItem;
