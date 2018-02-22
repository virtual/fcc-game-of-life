import React, { Component } from 'react';

export default class Speed extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  } 
  handleClick() {
    this.props.changeSpeed(this.props.speed + 100);
  }
  render() {
    return (
      <button onClick={this.handleClick}>{this.props.speed}</button>
    );
  }
}