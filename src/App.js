import React, { Component } from 'react';
import './App.css';
import Board from './Grid/Board';
import Start from './Action/Start';
import Reset from './Action/Reset';
import Speed from './Action/Speed';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      thisBoard: null,
      rows: 10,
      cols: 10,
      initalized: false,
      speed: 300,
      generation: 0
    }
    this.updateAlive = this.updateAlive.bind(this);
    this.incrementGeneration = this.incrementGeneration.bind(this);
    this.getAliveNCount = this.getAliveNCount.bind(this);
    this.setupBoard = this.setupBoard.bind(this);
    this.changeSpeed = this.changeSpeed.bind(this);
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
    //console.log(htmlBoard)

    // Some predefined goodness
    htmlBoard[7][1] = true;
    htmlBoard[8][1] = true;
    htmlBoard[7][2] = true;
    htmlBoard[8][2] = true;
    htmlBoard[7][11] = true;
    htmlBoard[8][11] = true;
    htmlBoard[9][11] = true;
    htmlBoard[6][12] = true;
    htmlBoard[5][13] = true;
    htmlBoard[5][14] = true;
    htmlBoard[10][12] = true;
    htmlBoard[11][13] = true;
    htmlBoard[11][14] = true;
    htmlBoard[10][16] = true;
    htmlBoard[8][15] = true;
    htmlBoard[6][16] = true;
    htmlBoard[7][17] = true;
    htmlBoard[8][17] = true;
    htmlBoard[9][17] = true;
    htmlBoard[8][18] = true;
    htmlBoard[7][21] = true;
    htmlBoard[6][21] = true;
    htmlBoard[5][21] = true;
    htmlBoard[7][22] = true;
    htmlBoard[6][22] = true;
    htmlBoard[5][22] = true;
    htmlBoard[4][23] = true;
    htmlBoard[8][23] = true;
    htmlBoard[4][25] = true;
    htmlBoard[3][25] = true;
    htmlBoard[8][25] = true;
    htmlBoard[9][25] = true;
    htmlBoard[6][35] = true;
    htmlBoard[5][35] = true;
    htmlBoard[5][36] = true;
    htmlBoard[6][36] = true;

    // 

    this.setState({
      thisBoard: htmlBoard,
      initalized: true,
      rows: rows,
      cols: cols
    })
  }

  componentDidMount() {
    if (this.state.thisBoard === null) {
      this.setupBoard(20,38);
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
    //console.log(x,y,neighbors)
    return neighbors;
  }
  incrementGeneration(){
    let htmlBoard = [];
    for (var i = 0; i < this.state.rows; i++) {
      let htmlRow = [];
      for (var h = 0; h < this.state.cols; h++) {
        let neighbors = this.getAliveNCount(i,h);
        
        /*
        Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
        Any live cell with two or three live neighbours lives on to the next generation.
        Any live cell with more than three live neighbours dies, as if by overpopulation.
        Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
        */
        if (this.state.thisBoard[i][h]) { // current spot alive
          if (neighbors < 2) { 
            htmlRow.push(false)
          } else if (neighbors === 2 || neighbors === 3) {
            htmlRow.push(true);
          } else {
            htmlRow.push(false)
          }
        } else { // current spot is dead
          if (neighbors === 3) { 
            htmlRow.push(true);
          } else {
            htmlRow.push(false)
          }
        }
      }
      htmlBoard.push(htmlRow)
    }
    let gen = this.state.generation + 1;
    this.setState({
      thisBoard: htmlBoard,
      generation: gen
    })
  }
  updateAlive(a, b) {
    console.log(a,b)
    let updateAlive = this.state.thisBoard;
    if (updateAlive[a][b]) {
      updateAlive[a][b] = false
    } else {
      updateAlive[a][b] = true;
    }
    this.setState({
      thisBoard: updateAlive 
    })
  }
  changeSpeed(speed) {
    this.setState({
      speed: speed
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
            {this.state.generation}
              <Start speed={this.state.speed} iGen={this.incrementGeneration} />
              <Reset setupBoard={this.setupBoard} rows={this.state.rows} cols={this.state.cols} />
              <Speed speed={this.state.speed} changeSpeed={this.changeSpeed} />
            </div>
          </main>
        </div>
      );
    } else {
      return ("Loading...")
    }
  }
}