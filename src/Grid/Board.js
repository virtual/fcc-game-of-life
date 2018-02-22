import React, { Component } from 'react';
import Square from './Square';

export default class Board extends Component {
  constructor() {
    super();
  }
  
  render() {
    let boxWidth =  (100 / this.props.cols) + "%";
    
    let print = [];
      this.props.thisBoard.forEach( (element, index) => {
        element.forEach( (e, i) => {
          let key = "key"+index+"-"+i;
          print.push(<Square boxWidth={boxWidth} updateAlive={this.props.updateAlive} a={index} b={i} alive={e} key={key} />)
        });
      });
    return (
      <div className="board">
        {print}
      </div>
    );
  }
}