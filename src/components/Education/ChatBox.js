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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Error, explicabo quasi ratione odio dolorum harum.
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Blanditiis, nulla accusamus magni vel debitis numquam qui
                    tempora rem voluptatem delectus!
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

                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
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
