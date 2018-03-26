import React, { Component } from 'react';

class ProgressBar extends Component {
  constructor(props) {
    super(props);
  }

  move() {
    let elem = document.getElementById('progress-bar');
    let width = 0;
    const id = setInterval(() => {
      if (width >= 75) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + '%';
        elem.innerHTML = `${this.props.name} Progress ${width * 1}%`;
      }
    }, 15);
  }

  componentDidMount() {
    this.move();
  }

  render() {
    return (
      <div className="progress">
        <div id="progress-bar">Progress 0%</div>
      </div>
    );
  }
}

export default ProgressBar;
