import React, { Component } from 'react';

export default class Square extends Component {
  constructor() {
    super();
    this.state = {
      alive: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.updateAlive(this.props.a, this.props.b)
  }
  render() {
    let sqClass = (this.props.alive) ? "square-alive" : "square-dead";
    return (
      <div style={{width: this.props.boxWidth}} className={sqClass} onClick={this.handleClick}></div>
    );
  }
}