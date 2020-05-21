import React from 'react';
import logo from './logo.svg';
import './App.css';
import {count, length} from './number.js'
const user = 'By Maria '
const num = 777
const count = 1000 + 500;
const log = false;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1 style = {{color: '#7B68EE'}}>My first app</h1>
       <p> {user} </p>
        <p> {num}  </p>
       <p> {counts} </p>
        <p> {log && 'is true'} </p>
        <p> {log ? 1 : 2} </p>
       <p> {null} </p>
        <p> {undefined} </p>
       <p> {false} </p>
       <p> {true} </p>
       <h2> Count * length = {count} * {length} </h2>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
