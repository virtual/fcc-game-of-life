import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Grid/Board';
import Start from './Action/Start';
import Reset from './Action/Reset';

class App extends Component {
  constructor() {
    super();
    this.state = {
      thisBoard: null,
      nextBoard: null,
      rows: 10,
      cols: 10,
      initalized: false
    }
    this.updateAlive = this.updateAlive.bind(this);
    this.incrementGeneration = this.incrementGeneration.bind(this);
    this.getAliveNCount = this.getAliveNCount.bind(this);
    this.setupBoard = this.setupBoard.bind(this);
  }
  setupBoard(rows,cols) {
    let htmlBoard = [];
    for (var i = 0; i < rows; i++) {
      let htmlRow = [];
      for (var h = 0; h < cols; h++) {
        htmlRow.push(false)
      }
      htmlBoard.push(htmlRow)
    }
    console.log('hi', htmlBoard)

    this.setState({
      thisBoard: htmlBoard,
      initalized: true,
      rows: rows,
      cols: cols
    })
  }

  componentDidMount() {
    if (this.state.thisBoard === null) {
      this.setupBoard(5,5);
    }
  }
  
  // Number of alive neighbors adjacent
  getAliveNCount(x,y) {
    let neighbors = 0;
    if (x != 0) {
      console.log("hey it's not on the border")
    }
  }
  incrementGeneration(){
    this.getAliveNCount(1,1)
  }
  updateAlive(a, b) {
    let updateAlive = this.state.thisBoard;
    if (updateAlive[a][b]) {
      updateAlive[a][b] = false
    } else {
      updateAlive[a][b] = true;
    }
    console.log("setting",a,b,updateAlive[a][b]);
    this.setState({
      thisBoard: updateAlive 
    })
  }
  render() {
    if (this.state.initalized){
      return (
        <div className="App">
          <header className="App-header"> 
            <h1 className="App-title">Game of Life</h1>
          </header>
          <main>
            <Board key="board1" initalized={this.state.initalized} thisBoard={this.state.thisBoard} rows={this.state.rows} cols={this.state.cols} updateAlive={this.updateAlive} />
            <div className="actions">
              <Start />
              <Reset />
              Speed slider
            </div>
          </main>
        </div>
      );
    } else {
      return ("Loading...")
    }
  }
}

export default App;
