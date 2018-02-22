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
      rows: 10,
      cols: 10,
      initalized: false,
      speed: 1000
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
    //  (3,4) (3,5) (3,6)
    //  (4,4) (4,5) (4,6)
    //  (5,4) (5,5) (5,6)

    let neighbors = 0;
    // (4,5)

    let b = this.state.thisBoard;
    if (x !== 0) {
      if (y !== 0) {
        if (b[x-1][y-1]) { neighbors++}
      }
      if (b[x-1][y]) { neighbors++}
      if (y !== b[x].length - 1) {
        if (b[x-1][y+1]) { neighbors++}
      }
    }
   
    if (y !== 0) {
      if (b[x][y-1]) { neighbors++}
    } 
    if (b[x][y]) { neighbors++}
    if (y !== b[x].length - 1) {
      if (b[x][y+1]) { neighbors++}
    }
    if (x !== b.length - 1) {
      if (y !== 0) {
        if (b[x+1][y-1]) { neighbors++}
      }
      if (b[x+1][y]) { neighbors++}
      if (y !== b[x].length - 1) {
        if (b[x+1][y+1]) { neighbors++}
      }
    }
    console.log(x,y,neighbors)
    return neighbors;

  }
  incrementGeneration(){
    // this.getAliveNCount(1,1)
    let htmlBoard = [];
    for (var i = 0; i < this.state.rows; i++) {
      let htmlRow = [];
      for (var h = 0; h < this.state.cols; h++) {
        let neighbors = this.getAliveNCount(i,h);
        if (neighbors < 4) { 
          if (neighbors > 2) {
          htmlRow.push(true);
          }else {
            htmlRow.push(false)
          }
        } else {
          htmlRow.push(false)
        }
      }
      htmlBoard.push(htmlRow)
    }
    this.setState({
      thisBoard: htmlBoard
    })
    console.log(htmlBoard)
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
            <Board key="board1" initalized={this.state.initalized} thisBoard={this.state.thisBoard} rows={this.state.rows} cols={this.state.cols} updateAlive={this.updateAlive}  />
            <div className="actions">
              <Start speed={this.state.speed} iGen={this.incrementGeneration} />
              <Reset setupBoard={this.setupBoard} rows={this.state.rows} cols={this.state.cols} />
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
