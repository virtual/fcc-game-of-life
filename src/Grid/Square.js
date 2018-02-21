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
    console.log('you clicked a square!')
    if (this.state.alive){
      this.setState({
        alive: false
      })
    } else {
      this.setState({
        alive: true
      })
    }
  }
  render() {
    let sqClass = (this.state.alive) ? "square-alive" : "square-dead";
    return (
      <div style={{width: this.props.boxWidth}} className={sqClass} onClick={this.handleClick}></div>
    );
  }
}