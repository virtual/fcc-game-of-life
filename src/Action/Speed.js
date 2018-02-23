import React, { Component } from 'react';

export default class Speed extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  } 
  handleClick(e) {
    this.props.changeSpeed(e.target.value);
  }
  render() {
    return (
      <div>
         - Slower
        <input onChange={this.handleClick} 
        type="range" min="10" max="1000" style={{direction: 'rtl'}} value={this.props.speed} className="slider" id="myRange"
        />
        + Faster
      </div>
    );
  }
}