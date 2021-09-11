import React from 'react';
// import logo from './logo.svg';
import mp from './images/mp.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mp} className="App-logo" alt="logo" />
        <p style={{paddingTop: 64}}>
          Cheers! My name is Mikhail Petukhov
        </p>
        <span >
          <span>Find me on </span>
          <a
            className="App-link"
            href="https://github.com/Ascendancey"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <span> and </span>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/mpetukhov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          {/* <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a> */}
        </span>
      </header>
    </div>
  );
}

export default App;
