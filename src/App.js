import React from 'react';
import logo from './logo.svg';
import './App.css';
const user = 'By Maria '
const num = 777
const counts = 1000 + 500;
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
        {user}
        {num}
        {count}
        {log && 'is true'}
        {log ? 1 : 2}
        {null}
        {undefined}
        {false}
        {true}

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
