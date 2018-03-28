import React, { Component } from 'react';
import { UnmountClosed } from 'react-collapse';

class CommentListItem extends Component {
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
      <li className="table-content table-comment">
        <div className="comment-item">
          <div className="comment-header">
            <div className="comment-header-pic">
              <img src="/images/u2.jpg" />
              <h5>{this.props.authorName}</h5>
            </div>
            <h5>{this.props.postDate}</h5>
          </div>
          <div className="comment-content">{this.props.content}</div>
          <div className="comment-operation">
            <a>
              Like<i className="far fa-thumbs-up" />
            </a>
            <a>
              Copy<i className="far fa-copy" />
            </a>
            <a onClick={this.click}>
              Reply<i className="fas fa-reply" />
            </a>
          </div>
        </div>
        <UnmountClosed
          className="collapsible-content"
          isOpened={this.state.isopen}
        >
          <textarea
            className="reply"
            type="text"
            placeholder="Reply to author..."
          />
        </UnmountClosed>
      </li>
    );
  }
}

export default CommentListItem;
