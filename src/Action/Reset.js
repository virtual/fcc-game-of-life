import React, { Component } from 'react';

export default class Reset extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.setupBoard(this.props.rows, this.props.cols)
  }
  render() {
    return (
      <button onClick={this.handleClick}>Reset</button>
    );
  }
}