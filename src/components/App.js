import React, { Component } from 'react';

import ModelSelector from '../containers/ModelSelector';
import ModelQueryInterface from '../containers/ModelQueryInterface';
import Records from '../containers/Records';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Reac</h2>
        </div>
        <ModelSelector />
        <ModelQueryInterface />
        <Records />
      </div>
    );
  }
}

export default App;
