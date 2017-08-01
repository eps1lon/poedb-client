import React, { Component } from 'react';

import ModelInstanceExplorer from '../containers/ModelInstanceExplorer';
import ModelSelector from '../containers/ModelSelector';
import ModelQueryInterface from '../containers/ModelQueryInterface';
import Records from '../containers/Records';
import TableOptions from '../containers/TableOptions';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>MyPoedb</h1>
        <ModelSelector />
        <ModelQueryInterface />
        <TableOptions />
        <Records />
        {false && <ModelInstanceExplorer />}
      </div>
    );
  }
}

export default App;
