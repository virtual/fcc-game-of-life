import React, { Component } from 'react';
import Square from './Square';

export default class Board extends Component {
  render() {
    let htmlRow = [];
    let boxWidth =  (100 / this.props.cols) + "%";
    for (var i = 0; i < this.props.rows; i++) {
      for (var h = 0; h < this.props.cols; h++) {
        htmlRow.push(<Square boxWidth={boxWidth} />)
      }
      htmlRow.push(<br/>)
    }
    return (
      <div className="board">
        {htmlRow}
      </div>
    );
  }
}