import React, { Component } from 'react';
import { Collapse } from 'react-collapse';

class ChatBox extends Component {
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
      <div id="live-chat">
        <header className="clearfix" onClick={this.click}>
          <a href="#" className="chat-close">
            x
          </a>

          <h4>Zhu Yin</h4>

          <span className="chat-message-counter">3</span>
        </header>

        <Collapse isOpened={this.state.isopen}>
          <div className="chat">
            <div className="chat-history">
              <div className="chat-message clearfix">
                <img src="/images/u2.jpg" alt="" width="32" height="32" />

                <div className="chat-message-content clearfix">
                  <span className="chat-time">13:35</span>

                  <h5>Zhu Yin</h5>

                  <p>
                    Last week we talked about how to prepare for a job interview
                    and this week we are going to practice a little bit. Besides
                    that, we will still have half an hour left, maybe we can
                    discuss your resume.
                  </p>
                </div>
                {/* <!-- end chat-message-content --> */}
              </div>
              {/* <!-- end chat-message --> */}

              <hr />

              <div className="chat-message clearfix">
                <img src="/images/u3.jpg" alt="" width="32" height="32" />

                <div className="chat-message-content clearfix">
                  <span className="chat-time">13:37</span>

                  <h5>Zhi Zunbao</h5>

                  <p>
                    That will be great! Thank you so much! BTW, I have several
                    questions about my web class assignment this week, can you
                    give me some feedback about it?
                  </p>
                </div>
                {/* <!-- end chat-message-content --> */}
              </div>
              {/* <!-- end chat-message --> */}

              <hr />

              <div className="chat-message clearfix">
                <img
                  src="http://lorempixum.com/32/32/people"
                  alt=""
                  width="32"
                  height="32"
                />

                <div className="chat-message-content clearfix">
                  <span className="chat-time">13:38</span>

                  <h5>Zhu Yin</h5>

                  <p>No problem! Please send me your github link by email.</p>
                </div>
                {/* <!-- end chat-message-content --> */}
              </div>
              {/* <!-- end chat-message --> */}

              <hr />
            </div>
            {/* <!-- end chat-history --> */}

            <p className="chat-feedback">Your partner is typing…</p>

            <form action="#" method="post">
              <fieldset>
                <input type="text" placeholder="Type your message…" autoFocus />
                <input type="hidden" />
              </fieldset>
            </form>
          </div>
          {/* <!-- end chat --> */}
        </Collapse>
      </div>
      // <!-- end live-chat -->
    );
  }
}

export default ChatBox;
