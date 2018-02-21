import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Grid/Board';
import Start from './Action/Start';
import Reset from './Action/Reset';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"> 
          <h1 className="App-title">Game of Life</h1>
        </header>
        <main>
          <Board rows={20} cols={30}/>
          <div className="actions">
            <Start />
            <Reset />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
