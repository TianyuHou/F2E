import React, { Component } from 'react';
import { UnmountClosed } from 'react-collapse';

class LectureItem extends Component {
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
      <li className="table-content table-lecture" onClick={this.click}>
        <a>
          Lecture {this.props.id} <i className="fas fa-play-circle" />
        </a>
        <UnmountClosed
          className="collapsible-content"
          isOpened={this.state.isopen}
        >
          <h5>{this.props.content}</h5>
        </UnmountClosed>
      </li>
    );
  }
}

export default LectureItem;
