import React, { Component } from 'react';

export default class Start extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.iGen();
  }
  render() {
    return (
      <button onClick={this.handleClick}>Start</button>
    );
  }
}