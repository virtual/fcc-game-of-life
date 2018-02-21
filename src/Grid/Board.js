import React, { Component } from 'react';
import Square from './Square';

export default class Board extends Component {
  constructor() {
    super();


    this.state = {
      aliveState: null,
      initalized: false
    }
    this.updateAlive = this.updateAlive.bind(this);
  }
  componentDidMount() {
    if (this.state.aliveState === null) {
      let htmlBoard = [];
      for (var i = 0; i < this.props.rows; i++) {
        let htmlRow = [];
        for (var h = 0; h < this.props.cols; h++) {
          htmlRow.push(false)
        }
        htmlBoard.push(htmlRow)
      }
      this.setState({
        aliveState: htmlBoard,
        initalized: true
      })
    }
  }
  updateAlive(a, b) {
    let updateAlive = this.state.aliveState;
    if (updateAlive[a][b]) {
      updateAlive[a][b] = false
    } else {
      updateAlive[a][b] = true;
    }
    console.log("setting",a,b,updateAlive[a][b]);
    this.setState({
      aliveState: updateAlive 
    })
  }
  render() {
    let boxWidth =  (100 / this.props.cols) + "%";
    let print = [];
    if (this.state.initalized) {
      this.state.aliveState.forEach( (element, index) => {
        element.forEach( (e, i) => {
          print.push(<Square boxWidth={boxWidth} updateAlive={this.updateAlive} a={index} b={i} alive={e} />)
        });
      });
    return (
      <div className="board">
        {print}
      </div>
    );
    } else {
      return ( "Loading..." )
    }
  }
}