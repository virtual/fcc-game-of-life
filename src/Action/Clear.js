import React, { Component } from 'react';

export default class Clear extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.setupBoard(this.props.rows, this.props.cols, 'empty')
  }
  render() {
    return (
      <button onClick={this.handleClick}>x Clear</button>
    );
  }
}