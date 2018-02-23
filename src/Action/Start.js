import React, { Component } from 'react';

export default class Start extends Component {
  constructor() {
    super();
    this.state = {
      buttonText: 'Start',
      interval: null
    }
    this.handleClick = this.handleClick.bind(this);
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.setState({
      buttonText: 'Stop',
      interval: setInterval(() => {
        this.props.iGen();
      }, this.props.speed)
    });
  }
  stop() {
    clearInterval(this.state.interval);
    this.setState({
      buttonText: 'Start'       
    });
  }
  handleClick() {
    if (this.state.buttonText === 'Start') {
      this.increment();
    } else {
      this.stop();
    }
  }
  render() {
    return (
      <button onClick={this.handleClick}>{this.state.buttonText}</button>
    );
  }
}