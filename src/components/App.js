import React, { Component } from 'react';
import logo from '../assets/viaplay-logo.png';
import './App.css';
import HomePage from './HomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <img src={logo} className="logo" alt="logo" />
        </header>
          <HomePage />
          <footer className="app-footer" />
      </div>
    );
  }
}

export default App;