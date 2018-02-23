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
 
        //this.props.iGen();
        this.setState({
          buttonText: 'Stop',
          interval: setInterval(() => {
            console.log('run')
            this.props.iGen();
          }, this.props.speed)
        
        });

    
  }
  stop() {
    console.log('clear')
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
      <button className="btnStart" onClick={this.handleClick}>{this.state.buttonText}</button>
    );
  }
}